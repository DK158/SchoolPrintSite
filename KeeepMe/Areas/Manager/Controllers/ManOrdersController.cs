using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeclass;
using System.IO;
using Ionic.Zip;
using System.Text.RegularExpressions;
using KeepMeModel;
using KeepMeBll;
using System.Data;

namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManOrdersController : Controller
    {
        //
        // GET: /Manager/ManOrders/
        KeepMeBll.BllOrders bo = new KeepMeBll.BllOrders();
        //储存当前表格所在文件夹路径，是“物理路径”
        public static string nowdir;
        public static string store_id;

        public ActionResult Showorders()
        {
            if(Session["ma_store"]==null|| Session["ma_store"].ToString() == "")//未登录或者没有店铺信息
            {
                return null;
            }
            store_id= Session["ma_store"].ToString();
            return View();
        }
        /*显示订单文件*/
        public JsonResult Showorder()
        {
            string dir = "/FileUploadFile/" + store_id + "/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/" + DateTime.Now.Day + "/";
            string tempdir = Path.GetDirectoryName(Request.MapPath(dir));
            nowdir = tempdir;//更新全局变量，赋值
            //创建文件夹
            Directory.CreateDirectory(tempdir); 
            List<FileSystemItem> list = KeepMeclass.SystemFile.GetItems(tempdir);
            list = changelist(list, GetTheDayOrderFile());//将文件是否打印的信息加入list中，为此在类 FileSystemItem 中添加 ifprint 字段用于记录是否打印
            var num = list.Count;
            var dataJson = new { code = 0, msg = "", count = num, data = list };
            var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            return json;
        }
        //获取数据库中的文件信息
        protected DataTable GetTheDayOrderFile()
        {
            string str = nowdir;
            string[] paths = str.Split('\\');
            int i = 0;//记录数组
            string thedate;//进入文件夹的日期
            for (i = 0; i < paths.Length; i ++ )
            {
                if (paths[i] == Session["ma_store"].ToString())
                {
                    break;
                }
            }
            if (paths.Length - i != 4)//不是底部目录
            {
                return null;
            }
            else
            {
                if(Convert.ToInt32(paths[i + 1]) < 10) { paths[i + 1] = "0" + paths[i + 1]; }
                if(Convert.ToInt32(paths[i + 2]) < 10) { paths[i + 2] = "0" + paths[i + 2]; }
                if(Convert.ToInt32(paths[i + 3]) < 10) { paths[i + 3] = "0" + paths[i + 3]; }
                thedate = paths[i + 1] + paths[i + 2] + paths[i + 3];
                return bo.GetTheDayOrderFile(thedate);
            }
        }

        protected List<FileSystemItem> changelist(List<FileSystemItem> list,DataTable dt)
        {
            if (dt == null) { return list; }
            string colname = "pf_changename";
            foreach (FileSystemItem ele in list)
            {
                if (ele.IsFolder == true) { ele.ifprint = 2; continue; }//如果是文件夹
                string name = ele.Name;
                if(name== "recordfile.txt") { ele.ifprint = 3; continue; }//非打印文件
                if (dt.Select(colname + "='" + name + "'").Length > 0)//如果list中文件在dataTable中存在
                {
                    DataRow dr = dt.Select(colname + "='" + name + "'")[0];
                    ele.ifprint = Convert.ToInt16(dr["pf_ifprint"]);
                }
            }
            return list;
        }
        
        /*文件页面表格重载：点击“返回上一级”*/
        public JsonResult Showorder1()
        {
            int floder = Convert.ToInt32(Request["floder"]);
            //string dir = "/FileUploadFile/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/" + DateTime.Now.Day + "/";
            string tempdir = nowdir;//使用后全局变量赋值当前路径
            //string tempdir = Path.GetDirectoryName(Request.MapPath(dir)); //该方法用于获取物理路径，参数为虚拟路径
            for (int i = 0; i < 1; i++) //之前使用 i<floder 作为判断条件，由于改为不使用前台传来的的文件路径，所以只需去掉最后一个“\”即可
            {
                tempdir = tempdir.Substring(0, tempdir.LastIndexOf(@"\"));
            }
            nowdir = tempdir;//更新值
            List<FileSystemItem> list = KeepMeclass.SystemFile.GetItems(tempdir);
            var num = list.Count;
            var dataJson = new { code = 0, msg = "", count = num, data = list };
            var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            return json;
        }
        /*文件页面表格重载,不放在一起的原因是 Request 在获取值的时候似乎是有缓存，即使是在使用过后就释放为空，
         * 在第二次获取（不传值的情况下）也会获取到上一次传的值*/
        public JsonResult Showorder2()
        {
            string tempdir = Request["route"];
            nowdir = tempdir;//更新全局变量，赋值
            List<FileSystemItem> list = KeepMeclass.SystemFile.GetItems(tempdir);
            var num = list.Count;
            var dataJson = new { code = 0, msg = "", count = num, data = list };
            var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            return json;
        }
        
        /// <summary>
        /// 下载单个文件
        /// </summary>
        public int DownLoadfile1()
        {
            string fileName = Request["filename"]; ;//客户端保存的文件名  
            string filePath = Request["fileroute"];//路径  
            DownLoadfile(fileName, filePath);
            return bo.CheckHavePrint(fileName);
        }
        public void DownLoadfile(string fileName,string filePath)
        {
            try
            {
                Response.ContentType = "application/x-doc-compressed";
                Response.AddHeader("Content-Disposition", "attachment;filename='" + fileName + "'");
                string filename = filePath;
                //指定编码 防止中文文件名乱码  
                Response.HeaderEncoding = System.Text.Encoding.GetEncoding("gb2312");
                Response.TransmitFile(filename);  
               // return File(iStream, "application/octet-stream");
            }
            catch (Exception ex)
            {
                //做处理
            }

         }
        /// <summary>
        /// 下载选中的文件
        /// </summary>
        public void DownLoadfilelist()
        {
            string fileName = Request["filename"]; //客户端保存的文件名
            string filePath = Request["fileroute"];//路径
            String[] FileName = Regex.Split(fileName, ",");
            String[] FilePath = Regex.Split(filePath, ",");
            Response.Clear();
            Response.ContentType = "application/zip";
            Response.AddHeader("content-disposition", "filename=选中文件.zip");
            using (ZipFile zip = new ZipFile(System.Text.Encoding.Default))//解决中文乱码问题  
            {
                for (int i = 0; i < FileName.Length;i++ )
                {
                    //if (((CheckBox)gvr.Cells[0].Controls[1]).Checked)
                    //{
                        zip.AddFile(FilePath[i], "");//"d:\\webroot\\" + (gvr.Cells[1].Controls[1] as Label).Text
                    //}
                }
                zip.Save(Response.OutputStream);
                //zip.Save("F:\\Visual Studio工作\\KeeepMe\\KeeepMe\\FileUploadFile\\2018\\1\\16\\Test.zip");
                //zip.Save("Test.zip");
            }
            Response.End();  
        }
        
        /// <summary>
        /// 下载今日所有订单
        /// </summary>
        /// <returns></returns>
        public ActionResult DownLoadfiletoday()
        {
            using (ZipFile zip = new ZipFile(System.Text.Encoding.Default))
            {
                string dir = "/FileUploadFile/" + store_id + "/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/"+DateTime.Now.Day+"/";
                string tempdir = Path.GetDirectoryName(Request.MapPath(dir));
                zip.AddDirectory(tempdir);
                zip.Save(Server.MapPath("~/Test.zip"));
                return File(Server.MapPath("~/Test.zip"), "application/zip", "今日订单.zip");
            }
        }

        public ActionResult DownLoadfileNowpage()
        {
            string tempdir = Request["route"];
            tempdir = tempdir.Substring(0, tempdir.LastIndexOf(@"\"));
            using (ZipFile zip = new ZipFile(System.Text.Encoding.Default))
            {
                zip.AddDirectory(tempdir);
                zip.Save(Server.MapPath("~/Test.zip"));
                return File(Server.MapPath("~/Test.zip"), "application/zip", "当前文件夹所有订单文件.zip");
            }
        }
        /*删除选中文件*/
        public int deleteSelected()
        {
            string filename = Request["name"];
            //找寻路径
            string fileroute = Request["route"];
            //判断文件是否存在
            if (System.IO.File.Exists(fileroute))
            {
                System.IO.File.Delete(fileroute);//执行IO文件删除,需引入命名空间System.IO; 
                return 1; //删除成功
            }
            else
            {
                return -1;
            }
        }

        
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeclass;
using System.IO;
using Ionic.Zip;
using System.Text.RegularExpressions;
using KeepMeBll;

namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManOrdersController : Controller
    {
        //
        // GET: /Manager/ManOrders/

        //储存当前表格所在文件夹路径，是“物理路径”
        public static string nowdir;

        public ActionResult Showorders()
        {
            return View();
        }
        public JsonResult Showorder()
        {
            string dir = "/FileUploadFile/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/" + DateTime.Now.Day + "/";
            string tempdir = Path.GetDirectoryName(Request.MapPath(dir));
            nowdir = tempdir;//更新全局变量，赋值
            //创建文件夹
            Directory.CreateDirectory(tempdir); 
            List<FileSystemItem> list = KeepMeclass.SystemFile.GetItems(tempdir);
            var num = list.Count;
            var dataJson = new { code = 0, msg = "", count = num, data = list };
            var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            return json;
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
        public void DownLoadfile()
        {
            try
            {
                string fileName = Request["filename"]; ;//客户端保存的文件名  
                string filePath = Request["fileroute"];//路径  
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
            string fileName = Request["filename"]; ;//客户端保存的文件名  
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
                string dir = "/FileUploadFile/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/"+DateTime.Now.Day+"/";
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

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Text;
using KeepMeclass;
using KeepMeBll;
using System.Text.RegularExpressions;
using KeepMeModel;


namespace KeeepMe.Controllers
{
    public class PrintController : Controller
    {
        //
        // GET: /Print/
        KeepMeBll.BllPrint manp = new KeepMeBll.BllPrint();
        public ActionResult Main()
        {
            return View();
        }

        /// <summary>
        /// 文件上传
        /// </summary>
        public ActionResult FileUpload()
        {
            //接收文件
            HttpPostedFileBase file = Request.Files["MyFileUpload"];
            //进行判断
            if (file == null)
            {
                return Json("no:上传文件不能为空!:-1");
            }
            else
            {
                //获取文件名
                string fileName = Path.GetFileName(file.FileName);
                string fileName1 = Path.GetFileNameWithoutExtension(file.FileName);
                //获取文件扩展名(全部转换为大写)
                string fileExt = Path.GetExtension(fileName);
                //判断扩展名
                if (fileExt == ".doc" || fileExt == ".docx" || fileExt == ".pdf")
                {
                    //创建文件夹
                    string dir = "/FileUploadFile/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/" + DateTime.Now.Day + "/temp/";//付款之前。临时文件夹

                    string dir1 = "/FileUploadFile/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/" + DateTime.Now.Day + "/"; //付款之后
                    //不包括文件名全路径
                    string tempdir = Path.GetDirectoryName(Request.MapPath(dir));

                    string tempdir1 = Path.GetDirectoryName(Request.MapPath(dir1));
                    //创建文件夹
                    Directory.CreateDirectory(tempdir); 
                    //更新文件名称,全局唯一名称
                    //string newFileName = Guid.NewGuid().ToString();
                    DateTime dt = DateTime.Now;
                    string timestr = dt.Year.ToString() + dt.Month.ToString() + dt.Day.ToString() + dt.Hour.ToString() + dt.Minute.ToString() + dt.Second.ToString();
                    string newFileName = fileName1 + timestr;
                    //全路径
                    string fullDir = dir + newFileName + fileExt;
                    //保存图片
                    file.SaveAs(Request.MapPath(fullDir));
                    /*计算文档页数*/
                    int pgnum = -1;

                    KeepMeclass.PageCount pgc = new KeepMeclass.PageCount();
                    if (fileExt == ".pdf")
                    {
                        string fulldir = tempdir + "\\" + newFileName + fileExt;
                        pgnum = pgc.GetPDFPageCountByDll(fulldir);
                    }
                    else if (fileExt == ".doc" || fileExt == ".docx")
                    {
                        string fulldir = tempdir + "\\" + newFileName + fileExt;
                        pgnum = pgc.GetWordPageCount(fulldir);
                    }

                    //保存信息在文档中
                    recoadetxt(tempdir1, fileName,pgnum);
                    //返回标识符,储存全路径,页数,文件原名,文件修改后名字
                    return Json("ok:" + fullDir + ":" + pgnum + ":" + fileName + ":" + newFileName + fileExt,JsonRequestBehavior.AllowGet);
                }  
                else
                {
                    return Json("no:上传文件格式错误:-1", JsonRequestBehavior.AllowGet);
                }
            }
        }

        /*删除临时文件*/
        public int deletetempfile()
        {
            string filename = Request["name"];
            //找寻路径
            string dir = "/FileUploadFile/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/" + DateTime.Now.Day + "/temp/";
            //不包括文件名全路径
            string tempdir = Path.GetDirectoryName(Request.MapPath(dir));
            //判断文件是否存在
            string route = tempdir + "\\" + filename; //文件全路径，直接放入找不到。。
            if (System.IO.File.Exists(route))
            {
                System.IO.File.Delete(tempdir + "\\" + filename);//执行IO文件删除,需引入命名空间System.IO; 
                return 1; //删除成功
            }
            else
            {
                return -1;
            }
        }
        /// <summary>
        /// 保存信息在文档中
        /// </summary>
        /// <param name="dir">文件路径</param>
        /// <param name="filename">文件名称</param>
        /// <param name="num">文件页数</param>
        protected void recoadetxt(string dir, string filename,int num)
        {
            //判断文件是否存在
            if (!System.IO.File.Exists(dir+"\\recordfile.txt"))
            {
                FileStream fs1 = new FileStream(dir + "\\recordfile.txt", FileMode.Create, FileAccess.Write);//创建写入文件 
                fs1.Close();
            }
            /*文件写入*/
            FileStream fs = new FileStream(dir + "\\recordfile.txt", FileMode.Append, FileAccess.Write);
            StreamWriter sw = new StreamWriter(fs, Encoding.Default);
            sw.WriteLine(DateTime.Now.ToString() + "----" + filename + "----"+ num + "----" + dir + "\\" + filename);
            sw.Close();
        }

        public int recordorderpool()
        {
            printorders po = new printorders();

            /*生成订单编号*/
            DateTime time = DateTime.Now;
            po.or_id = produceOrderId(time);
            /*接收其他信息*/
            po.or_upTime = time.ToString();
            po.or_money = float.Parse(Request["money"]) ;
            po.or_payway = "支付宝支付";
            Session["store_id"] = "6666";//临时
            Session["store_name"] = "阿宝打印";//临时
            po.s_id = Session["store_id"].ToString();
            po.s_name = Session["store_name"].ToString();

            /*+"!"防止在转换为excel文件时自动识别为时间格式*/
            po.or_location = Request["domitory"]+"!";
            string order_files = Request["files"];//所有文件名
            po.user_tel = Request["tel"];
            po.or_remark = Request["remark"];
            po.or_filenum =Convert.ToInt32(Request["filenum"]);
            po.or_neccesery = 0;//不急需，临时
            /*订单信息记录*/
            int num = manp.recordorderpool(po);

            string filerepeat = Request["filerepeat"];
            string filenarrow = Request["filenarrow"];
            string fileside = Request["fileside"];
            string pages = Request["pages"];
            string realfilename = Request["realfilename"];
            recordsinglefile(po.or_id, order_files, filerepeat, filenarrow, fileside,pages, realfilename);
            /*已付款文件转移位置*/
            changelocation(realfilename);
            return num;
        }

        /// <summary>
        /// 记录单个文件打印信息
        /// </summary>
        /// <param name="id">订单号</param>
        /// <param name="filename">文件名称列</param>
        /// <param name="filerepeat">文件重复打印次数</param>
        /// <param name="filenarrow">缩印</param>
        /// <param name="fileside">双面还是单面</param>
        /// <param name="pages">单个文件页数</param>
        protected void recordsinglefile(string id,string filename,string filerepeat, string filenarrow, string fileside,string pages,string realfilename)
        {
            string[] FileName = Regex.Split(filename, "!!");
            string[] FileRepeat = Regex.Split(filerepeat, "!!");
            string[] FileNarrow = Regex.Split(filenarrow, "!!");
            string[] FileSide = Regex.Split(fileside, "!!");
            string[] Pages = Regex.Split(pages, "p!!");
            string[] RealFileName = Regex.Split(realfilename, "!!");
            manp.recordsinglefile(id,FileName,FileRepeat,FileNarrow,FileSide,Pages, RealFileName);
        }
        /// <summary>
        /// 已付款文件转移位置
        /// </summary>
        /// <param name="filename">文件重命名后的名字</param>
        protected void changelocation(string filename)
        {
            //找寻路径
            string dir = "/FileUploadFile/" + DateTime.Now.Year + "/" + DateTime.Now.Month + "/" + DateTime.Now.Day + "/";
            //不包括文件名全路径
            string tempdir = Path.GetDirectoryName(Request.MapPath(dir));
            string[] FileName = Regex.Split(filename, "!!");
            for (int i = 0; i < FileName.Length - 1; i++)
            {
                string OrignFile = tempdir + "/temp/" + FileName[i];
                string NewFile = tempdir + "/" + FileName[i];
                System.IO.File.Move(OrignFile, NewFile);
            }
        }


        /// <summary>
        /// 通过使用时间与随机数 生成订单号
        /// </summary>
        /// <returns></returns>
        protected string produceOrderId(DateTime time)
        {
            string year = time.Year.ToString();
            string month = time.Month.ToString();
            string day = time.Day.ToString();
            string hour = time.Hour.ToString();
            string minute = time.Minute.ToString();
            string seconde = time.Second.ToString();
            if (time.Month < 10) { month = "0" + month; }
            if (time.Day < 10) { day = "0" + month; }
            if (time.Hour < 10) { hour = "0" + month; }
            if (time.Minute < 10) { minute = "0" + month; }
            if (time.Second < 10) { seconde = "0" + month; }

            string order_id = year + month + day + hour + minute + seconde;
            Random ran = new Random(); int a = ran.Next(100, 999);
            /*+"*"是为了防止在转换为excel文件时自动识别为时间格式*/
            order_id = order_id + "0" + a.ToString() + "*";
            return order_id;
        }
    }
}

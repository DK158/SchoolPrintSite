using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeModel;

namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManStoreMessageController : Controller
    {
        //
        // GET: /Manager/ManStoreMessage/
        KeepMeBll.BllManStoreMessage bs = new KeepMeBll.BllManStoreMessage();
        //
        protected static string scul_extent = "";//头像图片扩展名
        protected static string spho_extent = "";//店铺实拍扩展名

        public ActionResult StoreMessage()
        {
            return View();
        }

        /// <summary>
        /// 展示打印店详细信息
        /// </summary>
        /// <returns></returns>
        public string showshopdetail()
        {
            string s_id = Request["s_id"];
            string dataJson = bs.showshopdetail(s_id);
            var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            return dataJson;
        }

        /// <summary>
        /// 编辑打印店信息,打印店名称不能修改且唯一
        /// </summary>
        /// <returns></returns>
        public int SaveChange()
        {
            store store = new store();
            store.s_id = Request["s_id"];
            store.sk_tel = Request["sk_tel"].ToString();
            store.s_name = Request["s_name"].ToString();
            store.s_school = Request["s_school"].ToString();
            store.s_location = Request["s_location"].ToString();
            store.s_machine = Convert.ToInt16(Request["s_machine"].ToString());
            store.s_computer = Convert.ToInt16(Request["s_computer"].ToString());
            store.s_worker = Convert.ToInt16(Request["s_worker"].ToString());
            store.s_worktime = Request["s_worktime"].ToString();
            store.s_runstate = Convert.ToInt16(Request["s_runstate"].ToString());
            store.s_breifinfo = Request["s_breifinfo"].ToString();
            store.s_carry = Convert.ToBoolean(Request["s_carry"]);
            store.s_carryterm = Convert.ToInt32(Request["s_carryterm"]);
            store.s_carryadd = Convert.ToInt32(Request["s_carryadd"]);
            if (scul_extent != "") { store.s_sculpture = scul_extent; } //图片头像,的扩展
            if(spho_extent != ""){ store.s_photo = spho_extent; }//图片实拍,的扩展
            changelocation(store.s_id);//改变图片位置
            return bs.editshop(store);
        }


        /// <summary>
        /// 店铺头像图片上传store_photo
        /// </summary>
        public ActionResult store_sculpture()
        {
            //接收文件
            HttpPostedFileBase file = Request.Files[0];
            //进行判断
            if (file == null)
            {
                return Json("{\"code\":0,\"msg\":\"\",\"data\":" + 0 + "}");
            }
            else
            {
                //获取文件名
                string fileName = Path.GetFileName(file.FileName);
                string fileName1 = Path.GetFileNameWithoutExtension(file.FileName);
                //获取文件扩展名(全部转换为大写)
                scul_extent = Path.GetExtension(fileName);
                //判断扩展名
                try
                {
                    //创建文件夹
                    string dir = "/Content/images/headicon/store/temp/";//确认添加或者修改之前。临时文件夹

                    string dir1 = "/Content/images/headicon/store/"; //确认添加或者修改之前后
                    //不包括文件名全路径
                    string tempdir = Path.GetDirectoryName(Request.MapPath(dir));

                    string tempdir1 = Path.GetDirectoryName(Request.MapPath(dir1));
                    //创建文件夹
                    Directory.CreateDirectory(tempdir);
                    //更新文件名称,全局唯一名称
                    string newFileName = "0000";//临时图片统一名称
                    //全路径
                    string fullDir = dir + newFileName + scul_extent;
                    //保存图片
                    file.SaveAs(Request.MapPath(fullDir));

                    return Json("{\"code\":1,\"msg\":\"\",\"data\":" + 1 + "}");
                }
                catch (Exception ex)
                {
                    return Json("{\"code\":0,\"msg\":\"\",\"data\":" + 0 + "}");
                }
            }
        }
        /// <summary>
        /// 店铺实拍图片上传
        /// </summary>
        public ActionResult store_photo()
        {
            //接收文件
            HttpPostedFileBase file = Request.Files[0];
            //进行判断
            if (file == null)
            {
                return Json("{\"code\":0,\"msg\":\"\",\"data\":" + 0 + "}");
            }
            else
            {
                //获取文件名
                string fileName = Path.GetFileName(file.FileName);
                string fileName1 = Path.GetFileNameWithoutExtension(file.FileName);
                //获取文件扩展名(全部转换为大写)
                spho_extent = Path.GetExtension(fileName);
                //判断扩展名
                try
                {
                    //创建文件夹
                    string dir = "/Content/images/storephoto/temp/";//确认添加或者修改之前。临时文件夹

                    string dir1 = "/Content/images/storephoto/"; //确认添加或者修改之前后
                    //不包括文件名全路径
                    string tempdir = Path.GetDirectoryName(Request.MapPath(dir));

                    string tempdir1 = Path.GetDirectoryName(Request.MapPath(dir1));
                    //创建文件夹
                    Directory.CreateDirectory(tempdir);
                    //更新文件名称,全局唯一名称
                    string newFileName = "0000";//临时图片统一名称
                    //全路径
                    string fullDir = dir + newFileName + spho_extent;
                    //保存图片
                    file.SaveAs(Request.MapPath(fullDir));

                    return Json("{\"code\":1,\"msg\":\"\",\"data\":" + 1 + "}");
                }
                catch (Exception ex)
                {
                    return Json("{\"code\":0,\"msg\":\"\",\"data\":" + 0 + "}");
                }
            }
        }

        /// <summary>
        /// 已确认的图片 转移位置并重命名
        /// </summary>
        /// <param name="storeid">店铺编号</param>
        protected void changelocation(string storeid)
        {
            if (scul_extent != "")//如果修改了头像图片
            {
                //找寻路径,改变头像路径
                string dir = "/Content/images/headicon/store/";
                //不包括文件名全路径
                string tempdir = Path.GetDirectoryName(Request.MapPath(dir));
                string OrignFile = tempdir + "/temp/0000" + scul_extent;
                string NewFile = tempdir + "/" + storeid + scul_extent;
                if (System.IO.File.Exists(NewFile)) { System.IO.File.Delete(NewFile); }//若已存在同名则删除
                System.IO.File.Move(OrignFile, NewFile);
            }

            if (spho_extent != "")//如果修改了实拍图片
            {
                //找寻路径,改变实拍路径
                string dir1 = "/Content/images/storephoto/";
                //不包括文件名全路径
                string tempdir1 = Path.GetDirectoryName(Request.MapPath(dir1));
                string OrignFile1 = tempdir1 + "/temp/0000" + spho_extent;
                string NewFile1 = tempdir1 + "/" + storeid + spho_extent;
                if (System.IO.File.Exists(NewFile1)) { System.IO.File.Delete(NewFile1); }//若已存在同名则删除
                System.IO.File.Move(OrignFile1, NewFile1);
            }
        }

    }
}

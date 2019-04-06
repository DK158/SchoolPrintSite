using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using KeepMeModel;

namespace KeeepMe.Areas.system.Controllers
{
    public class ManStoreKeeperController : Controller
    {
        //
        // GET: /system/ManStoreKeeper/

        KeepMeBll.BllManStoreKeeper bsk = new KeepMeBll.BllManStoreKeeper();

        public ActionResult ManStoreKeeper()
        {
            return View();
        }

        /// <summary>
        /// 获取全部店主简要信息
        /// </summary>
        /// <returns></returns>
        public string showAllStoreKeeper(int page,int limit)
        {
            return bsk.showAllStoreKeeper(page-1,limit);
        }

        /// <summary>
        /// 增加店主
        /// </summary>
        /// <returns></returns>
        public int addStoreKeeper()
        {
            storekepper skeeper = new storekepper();
            skeeper.sk_tel = Request["sk_tel"];
            skeeper.sk_idcard = Request["sk_idcard"].ToString();
            skeeper.sk_name = Request["sk_name"].ToString();
            skeeper.sk_pwd = DataHelper.GetSha1("123456");//默认值设置为123456
            skeeper.sk_general = Request["sk_general"].ToString();
            skeeper.sk_birthloacation = Request["sk_birthloacation"].ToString();
            skeeper.sk_birthday = Request["sk_birthday"].ToString();
            skeeper.sk_breifinfo = Request["sk_breifinfo"].ToString();
            skeeper.sk_sculpture = "~/Content/images/headicon/sweet.jpg";//默认图片头像
            return bsk.addStoreKeeper(skeeper);
        }

        /// <summary>
        /// 展示店主详细信息
        /// </summary>
        /// <returns></returns>
        public string showkeeperdetail()
        {
            string sk_tel = Request["sk_tel"];
            string dataJson = bsk.showkeeperdetail(sk_tel);
            var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            return dataJson;
        }

        /// <summary>
        /// 删除店主信息
        /// </summary>
        /// <returns></returns>
        public int deletekeeper()
        {
            string sk_tel = Request["sk_tel"];
            return bsk.deletekeeper(sk_tel);
        }

        /// <summary>
        /// 编辑店主信息
        /// </summary>
        /// <returns></returns>
        public int editkeeper()
        {
            storekepper skeeper = new storekepper();
            skeeper.sk_tel = Request["sk_tel"]; //店主电话作为主键，不可修改
            skeeper.sk_idcard = Request["sk_idcard"].ToString();
            skeeper.sk_name = Request["sk_name"].ToString();
            skeeper.sk_pwd = DataHelper.GetSha1("123456");//默认值设置为123456,每次修改后密码自动重置为123456
            skeeper.sk_general = Request["sk_general"].ToString();
            skeeper.sk_birthloacation = Request["sk_birthloacation"].ToString();
            skeeper.sk_birthday = Request["sk_birthday"].ToString();
            skeeper.sk_breifinfo = Request["sk_breifinfo"].ToString();
            return bsk.editkeeper(skeeper);
        }
    }
}

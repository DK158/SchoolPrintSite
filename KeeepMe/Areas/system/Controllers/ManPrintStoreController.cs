using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using KeepMeModel;

namespace KeeepMe.Areas.system.Controllers
{
    public class ManPrintStoreController : Controller
    {
        //
        // GET: /system/ManPrintStore/

        KeepMeBll.BllManPrintStore bs = new KeepMeBll.BllManPrintStore();

        public ActionResult ManPrintStore()
        {
            return View();
        }

        /// <summary>
        /// 获取全部打印店简要信息
        /// </summary>
        /// <returns></returns>
        public string showAllPrintStore(int page, int limit)
        {
            return bs.showAllPrintStore(page - 1, limit);
        }

        /// <summary>
        /// 增加打印店
        /// </summary>
        /// <returns></returns>
        public int addPrintStore()
        {
            store store = new store();
            store.s_id = Request["s_id"];
            store.sk_tel = Request["sk_tel"].ToString();
            store.s_name = Request["s_name"].ToString();
            store.s_school = Request["s_school"].ToString();
            store.s_location = Request["s_location"].ToString();
            store.s_machine =Convert.ToInt16( Request["s_machine"].ToString());
            store.s_computer = Convert.ToInt16( Request["s_computer"].ToString());
            store.s_worker = Convert.ToInt16( Request["s_worker"].ToString());
            store.s_worktime = Request["s_worktime"].ToString();
            store.s_runstate = Convert.ToInt16(Request["s_runstate"].ToString());
            store.s_breifinfo = Request["s_breifinfo"].ToString();
            store.s_sculpture = "~/Content/images/headicon/store/store.jpg";//默认图片头像
            return bs.addPrintStore(store);
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
        /// 删除打印店信息
        /// </summary>
        /// <returns></returns>
        public int deleteshop()
        {
            string s_id = Request["s_id"];
            return bs.deleteshop(s_id);
        }

        /// <summary>
        /// 编辑打印店信息,打印店名称不能修改且唯一
        /// </summary>
        /// <returns></returns>
        public int editshop()
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
            return bs.editshop(store);
        }

    }
}

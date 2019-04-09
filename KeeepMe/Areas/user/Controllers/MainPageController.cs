using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;

namespace KeeepMe.Areas.user.Controllers
{
    public class MainPageController : Controller
    {
        KeepMeBll.BllUserMainPage bump = new KeepMeBll.BllUserMainPage();
        //
        // GET: /user/MainPage/

        
        public ActionResult MainPage()
        {
            return View();
        }

        public string GetStores()
        {
            //int page = Convert.ToInt16(Request["s_machine"].ToString());
            //int limits = Convert.ToInt16(Request["s_computer"].ToString());
            return bump.GetStores(0, 5);
        }

        public ActionResult toStorePage()
        {
            if (Request["store_id"] == "" || Request["store_id"] == null)
            {
                return null;
            }
            string str =Request["store_id"].ToString();
            Session["now_the_store_id"] = Request["store_id"].ToString();
            Session["now_the_store_name"] = Request["store_name"].ToString();
            //return RedirectToRoute(new { controller = "UsertoStore", action = "UsertoStore" });
            return RedirectToAction("UsertoStore", "UsertoStore", new { area = "user" });
        }
    }
}

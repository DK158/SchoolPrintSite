using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using KeepMeclass;

namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManUsersController : Controller
    {
        //
        // GET: /Manager/ManUsers/

        KeepMeBll.Manuser ma = new KeepMeBll.Manuser();
        public ActionResult Showuser()
        {
            return View();
        }
        public string Showusers()
        {
            string ulist = ma.Showusers();
            //var json = Json(ulist, JsonRequestBehavior.AllowGet); //json格式

            return ulist;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="page">这两个数，不知道是怎么获取到的</param>
        /// <param name="limit"></param>
        /// <returns></returns>
        public string Showusers1(int page , int limit)
        {
            string ulist = ma.Showusers(page-1,limit);
            //var json = Json(ulist, JsonRequestBehavior.AllowGet); //json格式

            return ulist;
        }


        public ActionResult Showtable()
        {
            return View();
        }
        public object Showtable1()
        {
            Page page = new Page();
            page.setStart(Convert.ToInt32(Request["start"]));
            page.setLimit(Convert.ToInt32(Request["limit"]));
            string selectValue = Request["selectValue"];
            return page;
        }
    }
}

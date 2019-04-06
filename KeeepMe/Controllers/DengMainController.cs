using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KeeepMe.Controllers
{
    public class DengMainController : Controller
    {
        //
        // GET: /DengMain/

        public ActionResult DengMain()
        {
            return View();
        }

        public ActionResult demoguoguan()
        {
            return View();
        }
        public ActionResult demosnake()
        {
            return View();
        }
        public ActionResult demodelesqure()
        {
            return View();
        }

        public ActionResult redericMainPage()
        {
            return RedirectToAction("MainPage", "MainPage", new { area = "user" });
        }
    }
}

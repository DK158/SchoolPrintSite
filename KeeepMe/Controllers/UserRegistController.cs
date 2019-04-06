using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KeeepMe.Controllers
{
    public class UserRegistController : Controller
    {
        //
        // GET: /UserRegist/


        KeepMeBll.Login lg = new KeepMeBll.Login();
        public ActionResult UserRegistView()
        {
            return View();
        }

        public int registe()
        {
            string name = Request["name"];
            string tel = Request["tel"];
            string pwd = Request["password"];
            return lg.UserRegiste(name, tel, pwd);
        }
    }
}

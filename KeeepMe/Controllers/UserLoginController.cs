using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using System.Data;

namespace KeeepMe.Controllers
{
    public class UserLoginController : Controller
    {
        //
        // GET: /UserLogin/
        KeepMeBll.Login lg = new KeepMeBll.Login();
        string temp = "1";
        public ActionResult UserLoginview()
        {
            Session["wrong"] = "1";
            ViewBag.Title = temp; //判定是否是登录失败
            return View();
        }

        public ActionResult CheckLogin()
        {
            var name = Request["username"];
            var pwd = Request["password"];
            if(lg.ManagerLogin(name, pwd) != null)
            {
                DataTable dt = lg.ManagerLogin(name, pwd);
                int num = dt.Rows.Count;
                if (num > 0)
                {
                    //将用户信息存在Session中,
                    if (dt.Columns.Count == 5) { Session["role"] = 3; } //系统管理员
                    else if (dt.Columns.Count == 10) { Session["role"] = 2; }//店主
                    else if (dt.Columns.Count == 8) { Session["role"] = 1; }//店员
                    Session["wrong"] = null;
                    Session["user_id"] = name;
                    return RedirectToAction("Mainpage", "Main", new { area = "Manager" });
                }
                else
                {
                    Session["wrong"] = "2";
                    return View("UserLoginview");
                }
            }
            else
            {
                Session["wrong"] = "2";
                return View("UserLoginview");
            }

            //return num;
        }

    }
}

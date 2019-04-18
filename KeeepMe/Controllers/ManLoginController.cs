using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using System.Data;

namespace KeeepMe.Controllers
{
    public class ManLoginController : Controller
    {
        //
        // GET: /UserLogin/
        KeepMeBll.Login lg = new KeepMeBll.Login();
        string temp = "1";
        public ActionResult ManLoginview()
        {
            Session["wrong"] = "1";
            ViewBag.Title = temp; //判定是否是登录失败
            return View();
        }

        public ActionResult CheckLogin()
        {
            var name = Request["username"];
            var pwd1 = Request["password"];
            string pwd = DataHelper.GetSha1(pwd1.ToString());
            if(lg.ManagerLogin(name, pwd) != null)
            {
                DataTable dt = lg.ManagerLogin(name, pwd);
                int num = dt.Rows.Count;
                if (num > 0)
                {
                    //将用户信息存在Session中,
                    Session["ma_ifassitant"] = dt.Rows[0]["ma_ifassitant"];  //系统管理员
                    Session["ma_ifstorekeeper"] = dt.Rows[0]["ma_ifstorekeeper"]; //店主
                    Session["ma_ifsystem"] = dt.Rows[0]["ma_ifsystem"]; //店员
                    Session["ma_store"] = dt.Rows[0]["ms_storeid"];//管理店铺
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

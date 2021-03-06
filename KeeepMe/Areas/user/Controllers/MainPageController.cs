﻿using System;
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
        //获取店铺数量，用于分页
        public int GetStoreNum()
        {
            return bump.GetStoreNum();
        }
        //获取店铺信息
        public string GetStores()
        {
            int page = Convert.ToInt16(Request["page"].ToString());
            int limit = Convert.ToInt16(Request["limit"].ToString());
            return bump.GetStores(page-1, limit);
            //return bump.GetStores(0, 5);
        }

        //跳转到店铺页面
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

        //通过手机号查询订单，并确认收货
        public string SearchHistory(int page, int limit)
        {
            string user_tel=Request["user_tel"].ToString();
            return bump.SearchHistory(user_tel,page,limit);
        }

        //确认收货
        public int ChangeStatetoSure()
        {
            string or_id = Request["or_id"].ToString();
            return bump.ChangeStatetoSure(or_id);
        }
    }
}

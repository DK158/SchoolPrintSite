using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using System.Data;

namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManShowRunStateController : Controller
    {
        //
        // GET: /Manager/ManShowRunState/
        KeepMeBll.BllManStoreState bss = new KeepMeBll.BllManStoreState();

        public ActionResult ShowRunState()
        {
            return View();
        }
        
        public string GetDateAndMoney()
        {
            string s_id = "6666";// Session["the_store_id"]
            DataTable dt = bss.GetDateAndMoney(s_id);
            string time = tabletostring(dt, "or_upTime");
            string money = tabletostring(dt, "or_money");
            return time + "#" + money;//中间添加用于分割
        }

        public string GetFourWeekMoney()
        {
            DateTime time = DateTime.Now;
            string[] day = new string[5];
            day[0] = Getthedaystring(time);
            day[1] = Getthedaystring(time.AddDays(-7));
            day[2] = Getthedaystring(time.AddDays(-14));
            day[3] = Getthedaystring(time.AddDays(-21));
            day[4] = Getthedaystring(time.AddDays(-28));
            string s_id = "6666";//Session["the_store_id"]
            string money= bss.GetFourWeekMoney(day,s_id);
            //return "[" + money + "]";
            return money;
        }
        /// 通过使用时间与随机数 生成订单号
        protected string Getthedaystring(DateTime time)
        {
            string year = time.Year.ToString();
            string month = time.Month.ToString();
            string day = time.Day.ToString();
            string hour = time.Hour.ToString();
            string minute = time.Minute.ToString();
            string seconde = time.Second.ToString();
            if (time.Month < 10) { month = "0" + month; }
            if (time.Day < 10) { day = "0" + day; }
            if (time.Hour < 10) { hour = "0" + hour; }
            if (time.Minute < 10) { minute = "0" + minute; }
            if (time.Second < 10) { seconde = "0" + seconde; }

            string date = year + month + day + hour + minute + seconde;
            return date;
        }

        public string GetDifferntMoney()
        {
            DateTime time = DateTime.Now;
            string[] day = new string[5];
            day[0] = Getthedaystring(time);
            day[1] = Getthedaystring(time.AddDays(-28));
            string s_id = "6666";//Session["the_store_id"]
            string money = bss.GetDifferntMoney(day, s_id);
            return money;
        }
        /// <summary>
        /// 表格中的数据转化为string
        /// </summary>
        /// <param name="dt">数据表格</param>
        /// <param name="colname">数据表中想要转化的列的名称</param>
        /// <returns></returns>
        protected string tabletostring(DataTable dt,string colname)
        {
            string check = "";
            if (colname == "or_money")
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    //check = check + "\"" + dt.Rows[i][colname].ToString() + "\"" + ",";
                    check = check + dt.Rows[i][colname].ToString() + ",";
                }
            }
            else
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    check = check + "\'" + dt.Rows[i][colname].ToString() + "\'" + ",";
                    //check = check + dt.Rows[i][colname].ToString() + ",";
                }
            }
            check = check.Substring(0, check.Length - 1);
            return check;
        }

    }
}

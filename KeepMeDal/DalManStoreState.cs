using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace KeepMeDal
{
    public class DalManStoreState
    {
        public DataTable GetDateAndMoney(string s_id)
        {
            string sql = "select or_upTime,or_money from printorders where s_id='" + s_id + "'";
            return mysqlDBhelper.doselectsqlT(sql);
        }
        
        public string  GetFourWeekMoney(string[] days,string s_id)
        {
            string money = "";
            for(int i = 0; i < days.Length - 1; i++)
            {
                string sql = "SELECT SUM(or_money) FROM printorders WHERE or_id <'" + days[i] + "' AND or_id>'" + days[i + 1] + "' and s_id='"+s_id+"'";
                if (mysqlDBhelper.doselectsqlT(sql).Rows[0][0] == null || mysqlDBhelper.doselectsqlT(sql).Rows[0][0].ToString()=="")
                {
                    money = money + "0.0"+",";
                }
                else
                {
                    string num = mysqlDBhelper.doselectsqlT(sql).Rows[0][0].ToString();
                    money = money + float.Parse(num.ToString()) + ",";
                }
            }
            return money.Substring(0, money.Length - 1);
        }

        public string GetDifferntMoney(string[] days, string s_id)
        {
            string money = "";
            string sql = "SELECT SUM(or_money),or_ifcarry FROM printorders WHERE or_id <'"+days[0]+"' AND or_id>'"+days[1]+"' GROUP BY or_ifcarry  ORDER BY or_ifcarry ASC";
            DataTable dt = mysqlDBhelper.doselectsqlT(sql);
            if (dt.Rows[0][0] == null || dt.Rows[0][0].ToString() == "")
            {
                money =  "0.0" + ",";
            }
            else
            {
                money = dt.Rows[0][0].ToString()+",";
            }
            if (dt.Rows[1][0] == null || dt.Rows[1][0].ToString() == "")
            {
                money = money + "0.0" ;
            }
            else
            {
                money = money+ dt.Rows[1][0].ToString() ;
            }
            return money;
        }
    }
}

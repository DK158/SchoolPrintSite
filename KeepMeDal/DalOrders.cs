using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace KeepMeDal
{
    public class DalOrders
    {
        public string Showorderlist(int page, int limit)  //List<User>
        {
            int startcount = page * limit;
            string sql = "select * from printorders order by or_state asc,or_id desc limit " + startcount + "," + limit + "";
            DataTable dt = mysqlDBhelper.doselectsqlT(sql);
            int num = mysqlDBhelper.doselectsqlReturnNum("select * from printorders");
            string urlist = mysqlDBhelper.DataTableToJsonWithJavaScriptSerializer(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}";
            return urlist;
        }
        
        public string GetOrderFiles(string or_id)  //List<User>
        {
            string sql = "SELECT pf_changename,pf_page,pf_repeatenum,pf_color,pf_side,pf_narrow,pf_ifprint FROM printfile WHERE or_id='"+or_id+"'";
            DataTable dt = mysqlDBhelper.doselectsqlT(sql);
            //int num = mysqlDBhelper.doselectsqlReturnNum("select * from printorders");
            string urlist = mysqlDBhelper.DataTableToJsonWithJavaScriptSerializer(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + dt.Rows.Count + ",\"data\":" + urlist + "}";
            return urlist;
        }
        
        public DataTable  GetOrderFilesChangename(string or_id)  
        {
            string sql = "SELECT pf_changename FROM printfile WHERE or_id='" + or_id + "'";
            DataTable dt = mysqlDBhelper.doselectsqlT(sql);
            return dt;
        }
        
        public int UpdateOrderPtintTime(string or_id,DateTime printTime)
        {
            string sql = "UPDATE printorders SET or_printTime='" + printTime.ToString() + "',or_state=2 WHERE or_id='" + or_id + "'";
            string sql2 = "UPDATE printfile SET pf_ifprint=FALSE WHERE or_id='" + or_id + "'";
            int num1 = mysqlDBhelper.dochangesql(sql);
            int num2 = mysqlDBhelper.dochangesql(sql2);
            return num1 < num2 ? num1 : num2;
        }
    }
}

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
            string sql = "select or_id,user_tel,or_upTime,or_money,or_location from printorders order by or_id desc limit " + startcount + "," + limit + "";
            DataTable dt = mysqlDBhelper.doselectsqlT(sql);
            int num = mysqlDBhelper.doselectsqlReturnNum("select * from printorders");
            string urlist = mysqlDBhelper.DataTableToJsonWithJavaScriptSerializer(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}";
            return urlist;
        }
    }
}

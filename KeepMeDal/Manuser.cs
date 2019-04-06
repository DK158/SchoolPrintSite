using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace KeepMeDal
{
    public class Manuser
    {
        public string GetAllUsers()  //List<User>
        {
            string sql = "select st_tel,st_email,st_nick,st_school,st_dormitory,st_sex from student";
            DataTable dt = mysqlDBhelper.doselectsqlT(sql);
            int num = mysqlDBhelper.doselectsqlReturnNum(sql);
            string urlist = mysqlDBhelper.DataTableToJsonWithJavaScriptSerializer(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}";
            return urlist;
        }
        public string GetAllUsers(int page, int limit)  //List<User>
        {
            int startcount = page * limit;
            string sql = "select st_tel,st_email,st_nick,st_school,st_dormitory,st_sex from student limit " + startcount + ","+limit+"";
            DataTable dt = mysqlDBhelper.doselectsqlT(sql);
            int num = mysqlDBhelper.doselectsqlReturnNum("select * from student");
            string urlist = mysqlDBhelper.DataTableToJsonWithJavaScriptSerializer(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}";
            return urlist;
        }
    }
}

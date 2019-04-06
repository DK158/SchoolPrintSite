using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeepMeDal
{
    public class DalPrint
    {
        public  int recordorderpool(string vor_id,string vor_time,string vor_money,string vor_paway,string vor_receive,string vor_school,string vor_domitory,string vor_files)
        {
            string msql = "insert into viprintorder values('" + vor_id + "','" + vor_time + "','" + vor_money + "','" + vor_paway + "','" + vor_receive + "','" + vor_school + "','" + vor_domitory + "','" + vor_files + "')";
            return mysqlDBhelper.dochangesql(msql);
        }
    }
}

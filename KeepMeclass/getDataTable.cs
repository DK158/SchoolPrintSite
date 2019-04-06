using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;


namespace KeepMeclass
{
    public class getDataTable
    {
        public DataTable getTodayOrderInfoexcel()
        {
            string today=DateTime.Now.Year.ToString()+DateTime.Now.Month.ToString()+DateTime.Now.Day.ToString();
            string sql = "select vor_id,f_name,f_num,f_side,f_page,f_narrow,vor_tel,vor_username,vor_domitory,vor_time from viprintorder v join fileprintdetail f on v.vor_id=f.or_id where vor_id like'" + today + "%'";
            return mySqlDbHelper.doselectsqlT(sql);
        }
    }
}

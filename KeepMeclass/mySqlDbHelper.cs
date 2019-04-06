using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using MySql.Data.MySqlClient;

namespace KeepMeclass
{
    public class mySqlDbHelper
    {
        public static MySqlConnection lianjie()
        {
            string Constr = "server=localhost;database=schoolprint;Uid=root;Pwd=root";
            MySqlConnection conn = new MySqlConnection(Constr);
            conn.Open();
            return conn;
        }
        //取出查询结果
        public static DataSet datasaveset(MySqlCommand com)
        {
            DataSet ds = new DataSet();
            MySqlDataAdapter ad = new MySqlDataAdapter();
            ad.SelectCommand = com;
            ad.Fill(ds);
            return ds;
        }
        //执行(修改)sql语句
        public static int dochangesql(string sql)
        {
            MySqlConnection conn = lianjie();
            MySqlCommand com = new MySqlCommand(sql, conn);
            int a = com.ExecuteNonQuery();
            conn.Close();
            conn.Dispose();
            return a;
        }

        //执行（查询）sql语句
        public static DataSet doselectsql(string sql)
        {
            MySqlConnection conn = lianjie();
            MySqlCommand com = new MySqlCommand(sql, conn);
            DataSet ds = new DataSet();
            MySqlDataAdapter ad = new MySqlDataAdapter();
            ad.SelectCommand = com;
            ad.Fill(ds);
            conn.Close();
            conn.Dispose();
            return ds;
        }
        public static DataTable doselectsqlT(string sql)
        {
            MySqlConnection conn = lianjie();
            MySqlCommand com = new MySqlCommand(sql, conn);
            DataSet ds = new DataSet();
            MySqlDataAdapter ad = new MySqlDataAdapter();
            ad.SelectCommand = com;
            ad.Fill(ds);
            conn.Close();
            return ds.Tables[0];
        }
        public static int doselectsqlReturnNum(string sql)
        {
            DataTable dt = doselectsqlT(sql);
            return dt.Rows.Count;
        }

        /// <summary>
        /// 将表格数据json化
        /// </summary>
        /// <param name="table"></param>
        /// <returns></returns>
        public static string DataTableToJsonWithJavaScriptSerializer(DataTable table)
        {
            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();
            List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
            Dictionary<string, object> childRow;
            foreach (DataRow row in table.Rows)
            {
                childRow = new Dictionary<string, object>();
                foreach (DataColumn col in table.Columns)
                {
                    childRow.Add(col.ColumnName, row[col]);
                }
                parentRow.Add(childRow);
            }
            ///Console.Write(jsSerializer.Serialize(parentRow));
            return jsSerializer.Serialize(parentRow);
        }

        //判断是否有该功能
        public static bool check_functions(string position_id, int num)
        {
            string sql = "select function_id from rolelimits where position_id='" + position_id + "'";
            DataTable ds = mySqlDbHelper.doselectsqlT(sql);
            bool exit = false;
            foreach (DataRow dr in ds.Rows)
            {
                if (Convert.ToInt32(dr[0].ToString().Trim()) == num)
                {
                    exit = true;
                }
            }
            return exit;
        }


        //检查登录
        public static int loginOrNot()
        {
            if (System.Web.HttpContext.Current.Session["user_id"] == null)
            {
                return 1;
            }
            else
            {
                return 0;
            }
        }
    }
}

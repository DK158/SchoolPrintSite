﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using MySql.Data.MySqlClient;
using System.Security.Cryptography;

namespace KeepMeDal
{
    public class mysqlDBhelper
    {
        public static MySqlConnection lianjie()
        {
            string Constr = "server=localhost;database=printsite;Uid=root;Pwd=dk123456";
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
        //查询数据库，返回数据表
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
            DataTable ds = mysqlDBhelper.doselectsqlT(sql);
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


        /// <summary>
        /// 签名算法
        /// </summary>
        /// <param name="str"></param>
        /// <returns></returns>
        public static string GetSha1(string str)
        {
            if (string.IsNullOrEmpty(str))
            {
                throw new ArgumentNullException(str);
            }
            try
            {
                //建立SHA1对象
                SHA1 sha = new SHA1CryptoServiceProvider();
                //将mystr转换成byte[] 
                var enc = new ASCIIEncoding();
                var dataToHash = enc.GetBytes(str);
                //Hash运算
                var dataHashed = sha.ComputeHash(dataToHash);
                //将运算结果转换成string
                var hash = BitConverter.ToString(dataHashed).Replace("-", "");
                return hash;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }

        }
    }
}

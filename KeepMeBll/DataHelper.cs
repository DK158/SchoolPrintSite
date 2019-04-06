using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using System.Web.Script.Serialization;
using System.Web.SessionState;
using System.Security.Cryptography;

namespace KeepMeBll
{
    public static class DataHelper
    {
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

        /// <summary>
        /// 返回表格行数
        /// </summary>
        /// <param name="table"></param>
        /// <returns></returns>
        public static int DataTableRows(DataTable table)
        {
            return table.Rows.Count;
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

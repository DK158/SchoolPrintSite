using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace KeepMeDal
{
    public class DalPosWithFun
    {
        
        public DataTable PosWithFun()
        {
            string sql = "SELECT fun_id AS id,fun_name AS name,parent_fun_id AS pid FROM FUNCTION ORDER BY pid ASC";
            return mysqlDBhelper.doselectsqlT(sql);
        }
        public DataTable PosWithFun1()
        {
            string sql = "SELECT fun_id AS id, fun_name AS name, fun_id AS alias, parent_fun_id AS palias FROM FUNCTION ORDER BY palias ASC";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        
        public DataTable GetFunctionTreeByPostion(string pos_id)
        {
            string sql = "SELECT fun_id AS checkedId FROM positionfunction WHERE pos_id='"+pos_id+"'";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        public int SaveFunctionTreeOnPostion(string pos_id,string[] fun_id)
        {
            string sql1 = "delete from positionfunction where pos_id='" + pos_id + "'";
            mysqlDBhelper.dochangesql(sql1);
            string sql = "";
            for (int i=0;i<fun_id.Length;i++)
            {
                sql = sql + "insert into positionfunction(pos_id,fun_id) values('" + pos_id + "'," + Convert.ToInt32(fun_id[i]) + ");";
            }
            return mysqlDBhelper.dochangesql(sql);
        }

        public DataTable GetPositions()
        {
            string sql = "select pos_id,pos_name from position";
            return mysqlDBhelper.doselectsqlT(sql);
        }
    }
}

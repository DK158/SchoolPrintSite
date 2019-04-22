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
    }
}

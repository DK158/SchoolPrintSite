using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace KeepMeDal
{
    public class DalPosition
    {
        public DataTable showAllPosition(int page, int limit)
        {
            int startrow = page * limit;
            string sql = "select pos_id,pos_name,pos_breifinfo from `position` limit " + startrow + " , " + limit + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }
        public int GetNum()
        {
            string sql = "select pos_id  from `position`";
            return mysqlDBhelper.doselectsqlT(sql).Rows.Count;
        }
        
        public int addPosition(string pos_id, string pos_name, string pos_breifinfo)
        {
            string sql = "insert into `position`(pos_id,pos_name,pos_breifinfo) values('" + pos_id + "','" + pos_name + "','" + pos_breifinfo + "')";
            return mysqlDBhelper.dochangesql(sql);
        }
        public string showPositiondetail(string pos_id)
        {
            string sql = "select * from `position` where pos_id='" + pos_id + "'";
            DataTable dt= mysqlDBhelper.doselectsqlT(sql);
            return mysqlDBhelper.DataTableToJsonWithJavaScriptSerializer(dt);
        }
        public int editPosition(string pos_id, string pos_name, string pos_breifinfo)
        {
            string sql = "update `position` set pos_name='" + pos_name + "',pos_breifinfo='" + pos_breifinfo + "' where pos_id= '" + pos_id + "'";
            return mysqlDBhelper.dochangesql(sql);
        }
        public int deletePostion(string pos_id)
        {
            string sql = "delete from `position` where pos_id= '" + pos_id + "'";
            return mysqlDBhelper.dochangesql(sql);
        }
    }
}

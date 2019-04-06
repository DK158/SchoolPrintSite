using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeModel;

namespace KeepMeDal
{
    public class DalManAssistant
    {
        public DataTable getAllassistant(int page, int limit)
        {
            int startrow = page * limit;
            string sql = "select sa_tel,sa_name,sa_general from assistant limit " + startrow + " , " + limit + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        /// <summary>
        /// 添加店主，先检测是否存在，再在店主表和，所有用户记录表中添加
        /// </summary>
        /// <param name="ast"></param>
        /// <returns></returns>
        public int addAssistant(assistant ast)
        {
            string sql0 = "select * from assistant where sa_tel='" + ast.sa_tel + "' ";//查询店主表中是否有该用户
            if (mysqlDBhelper.doselectsqlReturnNum(sql0) == 0)
            {
                DataTable dt = mysqlDBhelper.doselectsqlT("select * from managers where ma_tel='" + ast.sa_tel + "'");//查询管理员表中是否有该用户
                string sql1 = "";
                if (dt.Rows.Count == 0)
                {
                    sql1 = "insert into managers(ma_tel,ma_role) values('" + ast.sa_tel + "','1')";
                }
                else
                {
                    string role = dt.Rows[0][2].ToString() + "-1";
                    sql1 = "update  managers set ma_role='" + role + "' where ma_tel='" + ast.sa_tel + "'";
                }
                mysqlDBhelper.dochangesql(sql1);
                //插入行细信息
                string sql = "insert into assistant(sa_tel,s_id,sa_name,sa_pwd,sa_general,sa_nick,sa_birthday,sa_breifinfo,sa_sculpture)" +
               "values('" + ast.sa_tel + "','" + ast.s_id + "','" + ast.sa_name + "','" + ast.sa_pwd + "','" + ast.sa_general + "'," +
               "'" + ast.sa_nick + "','" + ast.sa_birthday + "','" + ast.sa_breifinfo + "','" + ast.sa_sculpture + "')";
                return mysqlDBhelper.dochangesql(sql);
            }
            else
            {
                return -1;
            }
        }

        public DataTable showAssistantdetail(string sa_tel)
        {
            string sql = "select sa_tel,s_id,sa_name,sa_general,sa_nick,sa_birthday,sa_breifinfo from  assistant where sa_tel='" + sa_tel + "'";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        public int deleteAssistant(string sa_tel)
        {
            string sql = "delete from assistant where sa_tel='" + sa_tel + "'";
            sql = sql + ";delete from managers where ma_tel='" + sa_tel + "'";
            return mysqlDBhelper.dochangesql(sql);
        }


        public int editAssistant(assistant ast)
        {
            string sql = "update  assistant set s_id='" + ast.s_id + "',sa_name='" + ast.sa_name + "',sa_pwd='" + ast.sa_pwd + "',sa_general='" + ast.sa_general + "'," +
                "sa_nick='" + ast.sa_nick + "',sa_birthday='" + ast.sa_birthday + "',sa_breifinfo='" + ast.sa_breifinfo + "' where sa_tel='" + ast.sa_tel + "' ";
            return mysqlDBhelper.dochangesql(sql);
        }

    }
}

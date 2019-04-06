using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeModel;

namespace KeepMeDal
{
    public class DalManStoreKeeper
    {
        public DataTable getAllStoreKeeper(int page ,int limit)
        {
            int startrow = page * limit;
            string sql = "select sk_tel,sk_name,sk_general from storekeeper limit "+startrow+" , "+limit+"";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        /// <summary>
        /// 添加店主，先检测是否存在，再在店主表和，所有用户记录表中添加
        /// </summary>
        /// <param name="skeeper"></param>
        /// <returns></returns>
        public int addStoreKeeper(storekepper skeeper)
        {
            string sql0 = "select * from storekeeper where sk_tel='" + skeeper.sk_tel + "' or sk_idcard='" + skeeper.sk_idcard + "'";//查询店主表中是否有该用户
            if (mysqlDBhelper.doselectsqlReturnNum(sql0) == 0)
            {
                DataTable dt = mysqlDBhelper.doselectsqlT("select * from managers where ma_tel='" + skeeper.sk_tel + "'");//查询管理员表中是否有该用户
                string sql1 = "";
                if (dt.Rows.Count==0)
                {
                     sql1 = "insert into managers(ma_tel,ma_role) values('" + skeeper.sk_tel + "','3')";
                }
                else
                {
                    string role = dt.Rows[0][2].ToString() + "-3";
                     sql1 = "update  managers) set ma_role='" + role + "' where ma_tel='" + skeeper.sk_tel + "'";
                }
                 mysqlDBhelper.dochangesql(sql1);
                //插入行细信息
                string sql = "insert into storekeeper(sk_tel,sk_idcard,sk_name,sk_pwd,sk_general,sk_birthloacation,sk_birthday,sk_breifinfo,sk_sculpture)" +
               "values('" + skeeper.sk_tel + "','" + skeeper.sk_idcard + "','" + skeeper.sk_name + "','" + skeeper.sk_pwd + "','" + skeeper.sk_general + "'," +
               "'" + skeeper.sk_birthloacation + "','" + skeeper.sk_birthday + "','" + skeeper.sk_breifinfo + "','" + skeeper.sk_sculpture + "')";
                return mysqlDBhelper.dochangesql(sql);
            }
            else
            {
                return -1;
            }
        }

        public DataTable showkeeperdetail(string sk_tel)
        {
            string sql = "select sk_tel,sk_idcard,sk_name,sk_general,sk_birthloacation,sk_birthday,sk_breifinfo from  storekeeper where sk_tel='"+sk_tel+"'";
            return mysqlDBhelper.doselectsqlT(sql);
        }
        
        public int deletekeeper(string sk_tel)
        {
            string sql = "delete from storekeeper where sk_tel='" + sk_tel + "'";
            sql = sql + ";delete from managers where ma_tel='" + sk_tel + "'";
            return mysqlDBhelper.dochangesql(sql);
        }


        public int editkeeper(storekepper skeeper)
        {
            string sql = "update  storekeeper set sk_idcard='" + skeeper.sk_idcard + "',sk_name='" + skeeper.sk_name + "',sk_pwd='" + skeeper.sk_pwd + "',sk_general='" + skeeper.sk_general + "'," +
                "sk_birthloacation='" + skeeper.sk_birthloacation + "',sk_birthday='" + skeeper.sk_birthday + "',sk_breifinfo='" + skeeper.sk_breifinfo + "' where sk_tel='" + skeeper.sk_tel + "' ";
            return mysqlDBhelper.dochangesql(sql);
        }

    }
}

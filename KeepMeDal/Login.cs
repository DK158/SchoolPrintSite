using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Web.SessionState; //这是在.ashx 中引用session 的必备条件之一

namespace KeepMeDal
{
    public class Login
    {
        /// <summary>
        /// 管理员登录，首先在管理员表中查询是否有该管理员，再在对应表中查询对比密码
        /// </summary>
        /// <param name="tel"></param>
        /// <param name="pwd"></param>
        /// <returns></returns>
        public DataTable ManagerLogin(string tel, string pwd)
        {
            string sql = "select * from managers where ma_tel='" + tel + "'";
            DataTable dt=mysqlDBhelper.doselectsqlT(sql);
            if (dt.Rows.Count == 0)
            {
                return null;
            }
            int role = Convert.ToInt32(dt.Rows[0][2]);
            string sql1 = "";
            if (role == 1)
            {
                sql1 = "select * from assistant where sa_tel='" + tel + "' and sa_pwd='" + pwd + "'";
            }
            else if (role == 2)
            {
                sql1 = "select * from storekepper where sk_tel='" + tel + "' and sk_pwd='" + pwd + "'";
            }
            else if (role == 3)
            {
                sql1 = "select * from systemmanager where sm_tel='" + tel + "' and sm_pwd='" + pwd + "'";
            } 
            return mysqlDBhelper.doselectsqlT(sql1);
        }

        //管理源修改密码
        public int updatemanagepwd(string email, string pwd)
        {
            string sql = "update manager set ma_pwd='" + pwd + "'where ma_email='" + email + "'";
            return mysqlDBhelper.dochangesql(sql);
        }





        public int UserLogin(string tel, string pwd)
        {
            string sql = "select * from student where st_tel='" + tel + "' and st_pwd='" + pwd + "'";
            return mysqlDBhelper.doselectsqlReturnNum(sql);
        }

        public int UserRegisteCheck(string sql)
        {
            return mysqlDBhelper.doselectsqlReturnNum(sql);
        }
        public int UserRegiste(string name, string tel, string pwd)
        {
            string sql = "insert student(st_tel,st_pwd,st_nick) values('" + tel + "','" + pwd +"','" + name + "')";
            return mysqlDBhelper.dochangesql(sql);
        }
    }
}

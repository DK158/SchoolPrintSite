using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;
using System.Data;

namespace KeepMeBll
{
    public class Login
    {
        KeepMeDal.Login lg = new KeepMeDal.Login();
        //管理员登录
        public DataTable ManagerLogin(string tel, string pwd)
        {
            return lg.ManagerLogin(tel, pwd);
        }
        public int updatemanagepwd(string mail, string pwd)
        {
            return lg.updatemanagepwd(mail, pwd);
        }




        public int UserLogin(string tel, string pwd)
        {
            return lg.UserLogin(tel, pwd);
        }
        public int UserRegiste(string name, string tel, string pwd)
        {
            string sql = "select * from student where st_tel='" + tel + "'";
            if (lg.UserRegisteCheck(sql) > 0)
            {
                return -1;
            }
            return lg.UserRegiste(name, tel, pwd);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeModel;

namespace KeepMeDal
{
    public  class DalManPrintStore
    {
        public DataTable getAllPrintStore(int page, int limit)
        {
            int startrow = page * limit;
            string sql = "select s_id,s_name,s_school,sk_tel from store limit " + startrow + " , " + limit + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        /// <summary>
        /// 添加打印店，先检测是否存在，再在打印店表和，所有用户记录表中添加
        /// </summary>
        /// <param name="shop"></param>
        /// <returns></returns>
        public int addPrintStore(store shop)
        {
            string sql0 = "select s_id from store where s_name='" + shop.s_name + "'";//查询打印店表中是否有 相同打印店名称
            if (mysqlDBhelper.doselectsqlReturnNum(sql0) == 0)
            {
                string s_id = "";
                int check = 0;
                do
                {
                    s_id = productId();
                    string sql1 = "select s_name from store where s_id='" + s_id + "'";
                    check = mysqlDBhelper.doselectsqlReturnNum(sql1);
                } while (check != 0);
                //插入行细信息
                string sql = "insert into store(s_id,sk_tel,s_name,s_worker,s_school,s_location,s_machine,s_breifinfo,s_sculpture,s_computer,s_worktime,s_runstate)" +
               "values('"+s_id+"','" + shop.sk_tel + "','" + shop.s_name + "','" + shop.s_worker + "','" + shop.s_school + "'," +
               "'" + shop.s_location + "','" + shop.s_machine + "','" + shop.s_breifinfo + "','" + shop.s_sculpture + "'" +
               ",'" + shop.s_computer + "','" + shop.s_worktime + "','" + shop.s_runstate + "')";
                return mysqlDBhelper.dochangesql(sql);
            }
            else
            {
                return -1;
            }
        }

        public DataTable showshopdetail(string s_id)
        {
            string sql = "select s_id,sk_tel,s_name,s_worker,s_school,s_location,s_machine,s_breifinfo,s_computer,s_worktime,s_runstate from  store where s_id='" + s_id + "'";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        public int deleteshop(string s_id)
        {
            string sql = "delete from store where s_id='" + s_id + "'";
            return mysqlDBhelper.dochangesql(sql);
        }


        public int editshop(store shop)
        {
            string sql = "update  store set sk_tel='" + shop.sk_tel + "',s_worker='" + shop.s_worker + "',s_school='" + shop.s_school + "'," +
                "s_location='" + shop.s_location + "',s_machine='" + shop.s_machine + "',s_breifinfo='" + shop.s_breifinfo + "'" +
                ",s_computer='" + shop.s_computer + "',s_worktime='" + shop.s_worktime + "',s_runstate='" + shop.s_runstate + "' where s_id='" + shop.s_id + "' ";
            return mysqlDBhelper.dochangesql(sql);
        }

        public string productId()
        {
            Random rd = new Random();
            string s2=rd.Next(1, 1000).ToString();//(生成1~1000之间的随机数，不包括10)
            string s1 = rd.Next(1, 10).ToString();
            return s1 + s2;
        }
    }
}

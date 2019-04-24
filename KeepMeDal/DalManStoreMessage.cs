using KeepMeModel;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace KeepMeDal
{
    public class DalManStoreMessage
    {
        public DataTable showshopdetail(string s_id)
        {
            string sql = "select * from  store where s_id='" + s_id + "'";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        public int deleteshop(string s_id)
        {
            string sql = "delete from store where s_id='" + s_id + "'";
            sql = sql + ";delete from managertostore where ms_storeid='" + s_id + "'";
            return mysqlDBhelper.dochangesql(sql);
        }

        public int editshop(store shop)
        {
            string sql = "";
            if (shop.s_sculpture != null && shop.s_photo != null)
            {
                sql = "update  store set sk_tel='" + shop.sk_tel + "',s_worker='" + shop.s_worker + "',s_school='" + shop.s_school + "'," +
                "s_location='" + shop.s_location + "',s_machine='" + shop.s_machine + "',s_breifinfo='" + shop.s_breifinfo + "'" +
                ",s_computer='" + shop.s_computer + "',s_worktime='" + shop.s_worktime + "',s_runstate='" + shop.s_runstate + "' ," +
                "s_carry=" + shop.s_carry + ",s_carryterm=" + shop.s_carryterm + ",s_carryadd=" + shop.s_carryadd + ",s_sculpture='"+shop.s_id+shop.s_sculpture + "',s_photo='" + shop.s_id + shop.s_photo + "' where s_id='" + shop.s_id + "' ";
            }
            else if (shop.s_sculpture == null && shop.s_photo != null)
            {
                sql = "update  store set sk_tel='" + shop.sk_tel + "',s_worker='" + shop.s_worker + "',s_school='" + shop.s_school + "'," +
                "s_location='" + shop.s_location + "',s_machine='" + shop.s_machine + "',s_breifinfo='" + shop.s_breifinfo + "'" +
                ",s_computer='" + shop.s_computer + "',s_worktime='" + shop.s_worktime + "',s_runstate='" + shop.s_runstate + "' ," +
                "s_carry=" + shop.s_carry + ",s_carryterm=" + shop.s_carryterm + ",s_carryadd=" + shop.s_carryadd + ",s_photo='" + shop.s_id + shop.s_photo + "' where s_id='" + shop.s_id + "' ";
            }
            else if (shop.s_sculpture != null && shop.s_photo == null)
            {
                sql = "update  store set sk_tel='" + shop.sk_tel + "',s_worker='" + shop.s_worker + "',s_school='" + shop.s_school + "'," +
                "s_location='" + shop.s_location + "',s_machine='" + shop.s_machine + "',s_breifinfo='" + shop.s_breifinfo + "'" +
                ",s_computer='" + shop.s_computer + "',s_worktime='" + shop.s_worktime + "',s_runstate='" + shop.s_runstate + "' ," +
                "s_carry=" + shop.s_carry + ",s_carryterm=" + shop.s_carryterm + ",s_carryadd=" + shop.s_carryadd + ",s_sculpture='" + shop.s_id + shop.s_sculpture + "' where s_id='" + shop.s_id + "' ";
            }
            else
            {
                sql = "update  store set sk_tel='" + shop.sk_tel + "',s_worker='" + shop.s_worker + "',s_school='" + shop.s_school + "'," +
                "s_location='" + shop.s_location + "',s_machine='" + shop.s_machine + "',s_breifinfo='" + shop.s_breifinfo + "'" +
                ",s_computer='" + shop.s_computer + "',s_worktime='" + shop.s_worktime + "',s_runstate='" + shop.s_runstate + "' ," +
                "s_carry=" + shop.s_carry + ",s_carryterm=" + shop.s_carryterm + ",s_carryadd=" + shop.s_carryadd + " where s_id='" + shop.s_id + "' ";
            }

            return mysqlDBhelper.dochangesql(sql);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeModel;

namespace KeepMeDal
{
    public class DalManPrice
    {

        public DataTable getStoreAllPriceItem(string s_id)
        {
            string sql = "select * from printitemprice join storeprintprice on printitemprice.printceItem_id=storeprintprice.printceItem_id where storeprintprice.s_id=" + s_id + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        public DataTable getAllPriceItem()
        {
            string sql = "select * from printitemprice";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        public int addStorePriceItem(storeprintprice spp)
        {
            string sql = "insert into storeprintprice(printceItem_id,s_id,sItem_price) values(" + spp.printceItem_id + ",'" + spp.s_id + "'," + spp.sItem_price + ")";
            return mysqlDBhelper.dochangesql(sql);
        }

        public int editPrice(int sItem_priceId, float sItem_price)
        {
            string sql = "update storeprintprice set sItem_price="+sItem_price+ " where sItem_priceId="+ sItem_priceId + "";
            return mysqlDBhelper.dochangesql(sql);
        }

        public int deletePriceItem(int sItem_priceId)
        {
            string sql = "delete from storeprintprice where sItem_priceId=" + sItem_priceId + "";
            return mysqlDBhelper.dochangesql(sql);
        }

        public DataTable showPriceItemDetail(int sItem_priceId)
        {
            DataTable dt = mysqlDBhelper.doselectsqlT("select * from storeprintprice where sItem_priceId=" + sItem_priceId + "");
            int biaozhi = Convert.ToInt16(dt.Rows[0]["printceItem_id"]);
            string sql = "select * from storeprintprice  join printitemprice on printitemprice.printceItem_id=storeprintprice.printceItem_id where storeprintprice.sItem_priceId=" + sItem_priceId + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }
    }
}

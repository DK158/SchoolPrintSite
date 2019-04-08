using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeepMeDal
{
   public class DalUertoStore
    {
        public DataTable TheStore(string store_id)
        {
            string sql = "SELECT * FROM store WHERE s_id='" + store_id + "'";
            return mysqlDBhelper.doselectsqlT(sql);
        }

        public DataTable StorePriceItem(string store_id)
        {
            string sql = "SELECT * FROM storeprintprice s JOIN printitemprice p ON s.priceItem_id=p.priceItem_id WHERE s.s_id='"+store_id+"'";
            return mysqlDBhelper.doselectsqlT(sql);
        }
    }
}

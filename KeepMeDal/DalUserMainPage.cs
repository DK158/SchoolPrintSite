using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;

namespace KeepMeDal
{
    public class DalUserMainPage
    {
        public DataTable GetStores(int page,int limits)
        {
            int startrow = page * limits;
            string sql = "SELECT * FROM store JOIN " +
                "(SELECT s_id,GROUP_CONCAT(storeprintprice.sItem_price) AS price FROM storeprintprice WHERE priceItem_id IN(1,2) GROUP BY s_id) p ON " +
                "store.s_id=p.s_id ORDER BY s_runstate DESC " +
                "limit " + startrow + " , " + limits + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }  

    }
}

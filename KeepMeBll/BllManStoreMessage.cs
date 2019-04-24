using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeModel;

namespace KeepMeBll
{
    public class BllManStoreMessage
    {
        KeepMeDal.DalManStoreMessage ds = new KeepMeDal.DalManStoreMessage();

        public string showshopdetail(string s_id)
        {
            DataTable dt = ds.showshopdetail(s_id);
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            return urlist;
        }

        public int deleteshop(string s_id)
        {
            return ds.deleteshop(s_id);
        }

        public int editshop(store shop)
        {
            return ds.editshop(shop);
        }
    }
}

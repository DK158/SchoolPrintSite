using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeDal;
using KeepMeModel;

namespace KeepMeBll
{
    public class BllManPrice
    {
        KeepMeDal.DalManPrice dp = new KeepMeDal.DalManPrice();

        public DataTable getStoreAllPriceItem(string s_id)
        {
            return dp.getStoreAllPriceItem(s_id);
        }

        public DataTable getAllPriceItem()
        {
            return dp.getAllPriceItem();
        }
        
        public int addStorePriceItem(storeprintprice spp)
        {
            return dp.addStorePriceItem(spp);
        }

        public int editPrice(int sItem_priceId, float sItem_price)
        {
            return dp.editPrice(sItem_priceId, sItem_price);
        }

        public int deletePriceItem(int sItem_priceId)
        {
            return dp.deletePriceItem(sItem_priceId);
        }

        public DataTable showPriceItemDetail(int sItem_priceId)
        {
            return dp.showPriceItemDetail(sItem_priceId);
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;
using System.Data;
using KeepMeModel;

namespace KeepMeBll
{
   public class BllManPrintStore
    {
        KeepMeDal.DalManPrintStore ds = new KeepMeDal.DalManPrintStore();

        public string showAllPrintStore(int page, int limit)
        {
            DataTable dt = ds.getAllPrintStore(page, limit);//获取表格
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            int num = DataHelper.DataTableRows(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}"; //组成layui接收格式
            return urlist;
        }

        public int addPrintStore(store shop)
        {
            return ds.addPrintStore(shop);
        }

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

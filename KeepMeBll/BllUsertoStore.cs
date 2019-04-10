using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeepMeBll
{
   public class BllUsertoStore
    {
        KeepMeDal.DalUertoStore dus = new KeepMeDal.DalUertoStore();

        public string TheStore(string store_id)
        {
            DataTable dt = dus.TheStore(store_id);//获取表格
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            int num = DataHelper.DataTableRows(dt);
            //urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}"; //组成layui接收格式 -> 不用，这样只是在调用表格时使用
            return urlist;
        }

        public string StorePriceItem(string store_id)
        {
            DataTable dt = dus.StorePriceItem(store_id);//获取表格
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            int num = DataHelper.DataTableRows(dt);
            //urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}"; //组成layui接收格式 -> 不用，这样只是在调用表格时使用
            return urlist;
        }

        public int getStoretodayordernum(DateTime now)
        {
            return dus.getStoretodayordernum(now);
        }
    }
}

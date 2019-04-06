using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeDal;

namespace KeepMeBll
{
   public class BllUserMainPage
    {
        KeepMeDal.DalUserMainPage dump = new KeepMeDal.DalUserMainPage();

        public string GetStores(int page,int limits)
        {
            DataTable dt = dump.GetStores(page, limits);//获取表格
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            int num = DataHelper.DataTableRows(dt);
            //urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}"; //组成layui接收格式 -> 不用，这样只是在调用表格时使用
            return urlist;
        }
    }
}

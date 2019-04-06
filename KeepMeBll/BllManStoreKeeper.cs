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
    public  class BllManStoreKeeper
    {
        KeepMeDal.DalManStoreKeeper dsk = new  KeepMeDal.DalManStoreKeeper();

        public string showAllStoreKeeper(int page,int limit)
        {
            DataTable dt = dsk.getAllStoreKeeper(page,limit);//获取表格
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            int num = DataHelper.DataTableRows(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}"; //组成layui接收格式
            return urlist;
        }

        public int addStoreKeeper(storekepper skeeper)
        {
            return dsk.addStoreKeeper(skeeper);
        }

        #region 使用List赋值用于显示一个人的信息过于大材小用
        /*
        public List<storekepper> showkeeperdetail(string sk_tel)
        {
            DataTable dt = dsk.showkeeperdetail(sk_tel);
            List<storekepper> tlist = null;
            if (dt.Rows.Count > 0)
            {
                tlist = new List<storekepper>();
                foreach (DataRow dr in dt.Rows)
                {
                    storekepper skeeper = new storekepper();
                    valuetoEntity(dr, skeeper);
                    tlist.Add(skeeper);
                }
            }
            return tlist;
        }
        //交易对象赋值
        public void valuetoEntity(DataRow item, storekepper trade)
        {
            trade.Ta_Id = Convert.ToInt32(item["Ta_Id"]);
            trade.Ta_Time = item["Ta_Time"].ToString();
            trade.Ta_OutId = item["Ta_OutId"] != DBNull.Value ? item["Ta_OutId"].ToString() : string.Empty;
            trade.Ta_InId = item["Ta_InId"] != DBNull.Value ? item["Ta_InId"].ToString() : string.Empty;
            trade.Ta_Money = Convert.ToDecimal(item["Ta_Money"] != DBNull.Value ? item["Ta_Money"].ToString() : string.Empty);
        }
        */
        #endregion

        public string showkeeperdetail(string sk_tel)
        {
            DataTable dt = dsk.showkeeperdetail(sk_tel);
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            return urlist;
        }
        
        public int deletekeeper(string sk_tel)
        {
            return dsk.deletekeeper(sk_tel);
        }

        public int editkeeper(storekepper skeeper)
        {
            return dsk.editkeeper(skeeper);
        }
    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeclass;
using System.Data;

namespace KeepMeDal
{
    public class DalUserMainPage
    {
        public  int GetStoreNum()
        {
            //有人访问的时候触发计时器,用于12小时跟新一次打印店点定数目
            KeepMeclass.Timer tt = new KeepMeclass.Timer();
            tt.timer();

            string sql = "SELECT s_name FROM store s JOIN storeprintprice t ON s.s_id=t.s_id GROUP BY s.s_id";
            return mysqlDBhelper.doselectsqlT(sql).Rows.Count;
        }
        public DataTable GetStores(int page,int limits)
        {
            int startrow = page * limits;
            string sql = "SELECT * FROM store JOIN " +
                "(SELECT s_id,GROUP_CONCAT(storeprintprice.sItem_price) AS price FROM storeprintprice WHERE priceItem_id IN(1,2) GROUP BY s_id) p ON " +
                "store.s_id=p.s_id ORDER BY s_runstate DESC " +
                "limit " + startrow + " , " + limits + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }  
        //分页获取历史
        public DataTable SearchHistory(string tel, int page, int limit)
        {
            int startnum = (page - 1) * limit;
            string sql = "SELECT * FROM printorders WHERE user_tel='" + tel + "' ORDER BY or_state ASC limit " + startnum + "," + limit + "";
            return mysqlDBhelper.doselectsqlT(sql);
        }
        //获取记录条数
        public int SearchHistorynum(string tel)
        {
            string sql = "SELECT * FROM printorders WHERE user_tel='" + tel + "' ";
            return mysqlDBhelper.doselectsqlT(sql).Rows.Count;
        }

        public int ChangeStatetoSure(string or_id)
        {
            string sql = "UPDATE printorders SET or_state=3 WHERE or_id='" + or_id + "'";
            return mysqlDBhelper.dochangesql(sql);
        }

    }
}

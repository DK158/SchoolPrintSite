using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;
using System.Data;

namespace KeepMeBll
{
    public class BllManPosition
    {
        KeepMeDal.DalPosition dp = new KeepMeDal.DalPosition();

        public string showAllPosition(int page, int limit)
        {
            DataTable dt = dp.showAllPosition(page, limit);//获取表格
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            int num = dp.GetNum();
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}"; //组成layui接收格式
            return urlist;
        }
        
        public int addPosition(string pos_id,string pos_name,string pos_breifinfo)
        {
            return dp.addPosition(pos_id, pos_name, pos_breifinfo);
        }

        public string showPositiondetail(string pos_id)
        {
            return dp.showPositiondetail(pos_id);
        }
        public int editPosition(string pos_id, string pos_name, string pos_breifinfo)
        {
            return dp.editPosition(pos_id, pos_name, pos_breifinfo);
        }
        public int deletePostion(string pos_id)
        {
            return dp.deletePostion(pos_id);
        }
    }
}

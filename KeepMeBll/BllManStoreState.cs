using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;
using System.Data;

namespace KeepMeBll
{
    public class BllManStoreState
    {
        KeepMeDal.DalManStoreState dss = new KeepMeDal.DalManStoreState();

        public DataTable GetDateAndMoney(string s_id)
        {
            return dss.GetDateAndMoney(s_id);
        }
        
        public string GetFourWeekMoney(string[] days,string s_id)
        {
            return dss.GetFourWeekMoney(days,s_id);
        }
        public string GetDifferntMoney(string[] days,string s_id)
        {
            return dss.GetDifferntMoney(days,s_id);
        }
    }
}

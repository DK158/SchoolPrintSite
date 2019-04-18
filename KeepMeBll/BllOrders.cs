using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;
using System.Data;

namespace KeepMeBll
{
    public class BllOrders
    {
        KeepMeDal.DalOrders mo = new KeepMeDal.DalOrders();
        public string Showorderlist(int page, int limit) //List<User>
        {
            string ulist = mo.Showorderlist(page, limit);
            return ulist;
        }

        public string GetOrderFiles(string or_id)
        {
            return mo.GetOrderFiles(or_id);
        }
        
        public DataTable GetOrderFilesChangename(string or_id)
        {
            return mo.GetOrderFilesChangename(or_id);
        }
        

        public int UpdateOrderPtintTime(string or_id,DateTime printTime)
        {
            return mo.UpdateOrderPtintTime(or_id, printTime);
        }
        
        public DataTable GetTheDayOrderFile(string thedate)
        {
            return mo.GetTheDayOrderFile(thedate);
        }

        public int CheckHavePrint(string filename)
        {
            return mo.CheckHavePrint(filename);
        }
    }
}

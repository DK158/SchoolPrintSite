using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;

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
    }
}

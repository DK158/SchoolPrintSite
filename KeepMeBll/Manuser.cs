using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;
using KeepMeclass;
namespace KeepMeBll
{
    public class Manuser
    {
        KeepMeDal.Manuser ma = new KeepMeDal.Manuser();
        public string Showusers() //List<User>
        {
            string ulist = ma.GetAllUsers();
            return ulist;
        }
        public string Showusers( int page,int  limit) //List<User>
        {
            string ulist = ma.GetAllUsers(page,limit);
            return ulist;
        }
    }
}

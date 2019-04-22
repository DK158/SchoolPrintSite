using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeDal;

namespace KeepMeBll
{
    public class BllPosWithFun
    {
        KeepMeDal.DalPosWithFun dpf = new KeepMeDal.DalPosWithFun();

        public DataTable GetFunctionTree()
        {
            return dpf.PosWithFun();
        }
        public DataTable GetFunctionTree1()
        {
            return dpf.PosWithFun1();
        }
    }
}

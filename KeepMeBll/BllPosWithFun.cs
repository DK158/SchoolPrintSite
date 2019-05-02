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
        
        public DataTable GetFunctionTreeByPostion(string pos_id)
        {
            return dpf.GetFunctionTreeByPostion(pos_id);
        }

        public int SaveFunctionTreeOnPostion(string pos_id,string[] fun_id)
        {
            return dpf.SaveFunctionTreeOnPostion(pos_id,fun_id);
        }
        public string GetPositions()
        {
            DataTable dt= dpf.GetPositions();
            return DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KeepMeDal;
using KeepMeModel;

namespace KeepMeBll
{
    public class BllPrint
    {
        KeepMeDal.DalPrinorder manp = new KeepMeDal.DalPrinorder();

        public int recordorderpool(printorders po)
        {
            return manp.recordorderpool(po);        
        }

        public int recordsinglefile(string id,string[] FileName, string[] FileRepeat, string[] FileNarrow, string[] FileSide,string[] pages,string[] RealFileName)
        {
           return manp.recordsinglefile(id,FileName,FileRepeat,FileNarrow,FileSide,pages, RealFileName);
        }
    }
}

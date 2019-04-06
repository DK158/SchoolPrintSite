using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeModel;

namespace KeepMeBll
{
   public class BllManAssistant
    {
        KeepMeDal.DalManAssistant das = new KeepMeDal.DalManAssistant();

        public DataTable showAllAssistant(int page, int limit)
        {
            return das.getAllassistant(page, limit);
        }

        public int addAssistant(assistant ast)
        {
            return das.addAssistant(ast);
        }

        public string showAssistantdetail(string sa_tel)
        {
            DataTable dt = das.showAssistantdetail(sa_tel);
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            return urlist;
        }

        public int deleteAssistant(string sa_tel)
        {
            return das.deleteAssistant(sa_tel);
        }

        public int editAssistant(assistant ast)
        {
            return das.editAssistant(ast);
        }
    }
}

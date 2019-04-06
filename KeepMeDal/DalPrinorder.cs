using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using KeepMeModel;

namespace KeepMeDal
{
    public class DalPrinorder
    {
        public int recordorderpool(printorders po)
        {
            string msql = "insert into printorders(or_id,user_tel,s_id,s_name,or_payway,or_money,or_neccesery,or_state,or_filenum,or_pagenum,or_upTime,or_location,or_remark) " +
                "values('" + po.or_id + "','" + po.user_tel + "','" + po.s_id + "','" + po.s_name + "','" + po.or_payway + "'," + po.or_money + "," + po.or_neccesery + ",1," +
                "'" + po.or_filenum + "','" + po.or_pagenum + "','" + po.or_upTime + "','" + po.or_location + "','" + po.or_remark + "')";
            return mysqlDBhelper.dochangesql(msql);
        }
        public int recordsinglefile(string id,string[] FileName, string[] FileRepeat, string[] FileNarrow, string[] FileSide, string[] pages,string[] RealFileName)
        {
            int num = 0;
            for (int i = 0; i < FileName.Length - 1; i++)
            {
                int repeat=Convert.ToInt16(FileRepeat[i].ToString());
                int page=Convert.ToInt16(pages[i].ToString());
                string sql = "insert into printfile(or_id,pf_name,pf_repaeatnum,pf_color,pf_side,pf_page,pf_narrow,pf_changename) " +
                    "values('" + id + "','" + FileName[i].ToString() + "','" + repeat + "',0,'" + FileSide[i].ToString() + "','" + page + "','" + FileNarrow[i].ToString() + "','" + RealFileName[i].ToString() + "')";
                num+=mysqlDBhelper.dochangesql(sql);
            }
            return num;
        }
    }
}

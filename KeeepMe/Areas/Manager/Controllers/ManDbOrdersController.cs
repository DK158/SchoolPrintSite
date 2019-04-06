using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using System.Data;
using KeepMeclass;
using System.Text;
//using Microsoft.Office.Interop.Excel;

namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManDbOrdersController : Controller
    {
        //
        // GET: /Manager/ManDbOrders/
        KeepMeBll.BllOrders mo = new KeepMeBll.BllOrders();
        KeepMeclass.getDataTable kct = new KeepMeclass.getDataTable();
        public ActionResult Showorderlistview()
        {
            return View();
        }
        public string Showorderslist(int page, int limit)
        {
            string ulist = mo.Showorderlist(page - 1, limit);
            //var json = Json(ulist, JsonRequestBehavior.AllowGet); //json格式

            return ulist;
        }

        public void getTodayExcel()
        {
            DataTable dt = kct.getTodayOrderInfoexcel();
            CreateExcel(dt, "application/ms-excel", "今日订单");
        }
  


        /// <summary>
        /// DataTable中的数据导出到Excel并下载
        /// </summary>
        /// <param name="dt">要导出的DataTable</param>
        /// <param name="FileType">类型</param>
        /// <param name="FileName">Excel的文件名</param>
        public void CreateExcel(DataTable dt, string FileType, string FileName)
        {
            Response.Clear();
            Response.Charset = "UTF-8";
            Response.Buffer = true;
            Response.ContentEncoding = System.Text.Encoding.GetEncoding("GB2312");
           // dt.Rows[1][2].Attributes.Add("style", "vnd.ms-excel.numberformat:@");  
            Response.AppendHeader("Content-Disposition", "attachment;filename=\"" + System.Web.HttpUtility.UrlEncode(FileName, System.Text.Encoding.UTF8) + ".xls\"");
            Response.ContentType = FileType;
            string colHeaders = string.Empty;
            for (int j = 0; j < dt.Columns.Count; j++)
            {
                colHeaders = colHeaders + dt.Columns[j].Caption.ToString()+"\t";      //写列标题  
            }
            Response.Output.Write(colHeaders+"\n");
            string ls_item = string.Empty;
            DataRow[] myRow = dt.Select();
            int i = 0;
            int cl = dt.Columns.Count;
            foreach (DataRow  row in dt.Rows)
            {
                for (i = 0; i < cl; i++)
                {
                    if (i == (cl - 1))
                    {
                        ls_item += row[i].ToString() + "\n";
                    }
                    else
                    {
                        ls_item += row[i].ToString() + "\t";
                    }
                }
                Response.Output.Write(ls_item);
                ls_item = string.Empty;
            }
            Response.Output.Flush();
            Response.End();
        }


    }
}

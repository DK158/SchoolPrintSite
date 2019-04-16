using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using System.Data;
using KeepMeclass;
using System.Text;
using System.IO;
using Ionic.Zip;
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
        //显示订单所有文件信息
        public string GetOrderFiles()
        {
            string or_id = Request["or_id"].ToString();
            return mo.GetOrderFiles(or_id);
        }

        public void DownloadOrderFiles()
        {
            string or_id = Request["or_id"].ToString();
            string path_head = "E:\\visualstudio_workspace\\KeeepMe\\KeeepMe\\FileUploadFile\\";
            string year = or_id.Substring(0, 4);
            string month = Convert.ToInt32(or_id.Substring(4, 2)).ToString();
            string day = or_id.Substring(6, 2);
            DataTable dt= mo.GetOrderFilesChangename(or_id); //只包含该订单的文件名称表
            try
            {
                Response.Clear();
                Response.ContentType = "application/zip";
                Response.AddHeader("content-disposition", "filename=" + or_id + ".zip");
                using (ZipFile zip = new ZipFile(System.Text.Encoding.Default))//解决中文乱码问题  
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        string fileName = dt.Rows[i][0].ToString(); //客户端保存的文件名  
                        string filePath = path_head + year + "\\" + month + "\\" + day + "\\" + fileName;//路径
                        zip.AddFile(filePath, "");
                    }
                    zip.Save(Response.OutputStream);
                }
                Response.End();
            }
            catch (Exception ex) { }
            DateTime printTime = DateTime.Now;
            mo.UpdateOrderPtintTime(or_id,printTime);


            //for (int i = 0; i < 1; i++)//只能下载单个文件，循环不行
            //{
            //    try
            //    {
            //        string fileName = dt.Rows[i][0].ToString(); //客户端保存的文件名  
            //        string filePath = path_head + year + "\\" + month + "\\" + day + "\\" + fileName;//路径  
            //        Response.ContentType = "application/x-doc-compressed";
            //        Response.AddHeader("Content-Disposition", "attachment;filename='" + fileName + "'");
            //        string filename = filePath;
            //        //指定编码 防止中文文件名乱码  
            //        Response.HeaderEncoding = System.Text.Encoding.GetEncoding("gb2312");
            //        Response.TransmitFile(filename);
            //        // return File(iStream, "application/octet-stream");
            //    }
            //    catch (Exception ex)
            //    {
            //        //做处理
            //    }
            //}
            }
        
       



    }
}

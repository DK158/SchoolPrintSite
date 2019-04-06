using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using Microsoft.Office.Interop.Word;
//using System.Windows.Forms;
using iTextSharp.text;
using iTextSharp.text.pdf;
//using NPOI;
//using NPOI.OpenXmlFormats;
//using NPOI.OpenXml4Net;
//using ICSharpCode.SharpZipLib;
//using NPOI.XWPF.UserModel;


namespace KeepMeclass
{
    /// <summary>
    /// 获得文件页数
    /// </summary>
    public  class PageCount
    {

        public static Microsoft.Office.Interop.Word.Application myWordApp = new Microsoft.Office.Interop.Word.ApplicationClass();
        public static object oMissing = System.Reflection.Missing.Value;

        #region --获取pdf文件的页数--
        public int GetPDFPageCountByDll(string path)
        {
            // 创建一个PdfReader对象
            PdfReader reader = new PdfReader(path);
            // 获得文档页数
            int pagecount = reader.NumberOfPages;
            reader.Close();
            return pagecount;
        }
        /// <summary>
        /// 获取pdf文件的页数
        /// </summary>
        ///
        public int GetPDFPageCount(string path)
        {
            byte[] buffer = File.ReadAllBytes(path);
            int length = buffer.Length;
            if (buffer == null)
                return -1;
            if (buffer.Length <= 0)
                return -1;
            try
            {
                int i = 0;
                int nPos = BytesLastIndexOf(buffer, length, "/Type/Pages");
                if (nPos == -1)
                    return -1;
                string pageCount = null;
                for (i = nPos; i < length - 10; i++)
                {
                    if (buffer[i] == '/' && buffer[i + 1] == 'C' && buffer[i + 2] == 'o' && buffer[i + 3] == 'u' && buffer[i + 4] == 'n' && buffer[i + 5] == 't')
                    {
                        int j = i + 3;
                        while (buffer[j] != '/' && buffer[j] != '>')
                            j++;
                        pageCount = Encoding.Default.GetString(buffer, i, j - i);
                        break;
                    }
                }
                if (pageCount == null)
                    return -1;
                int n = pageCount.IndexOf("Count");
                if (n > 0)
                {
                    pageCount = pageCount.Substring(n + 5).Trim();
                    for (i = pageCount.Length - 1; i >= 0; i--)
                    {
                        if (pageCount[i] >= '0' && pageCount[i] <= '9')
                        {
                            return int.Parse(pageCount.Substring(0, i + 1));
                        }
                    }
                }
                return -1;
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
        private int BytesLastIndexOf(Byte[] buffer, int length, string Search)
        {
            if (buffer == null)
                return -1;
            if (buffer.Length <= 0)
                return -1;
            byte[] SearchBytes = Encoding.Default.GetBytes(Search.ToUpper());
            for (int i = length - SearchBytes.Length; i >= 0; i--)
            {
                bool bFound = true;
                for (int j = 0; j < SearchBytes.Length; j++)
                {
                    if (ByteUpper(buffer[i + j]) != SearchBytes[j])
                    {
                        bFound = false;
                        break;
                    }
                }
                if (bFound)
                    return i;
            }
            return -1;
        }
        private byte ByteUpper(byte byteValue)
        {
            char charValue = Convert.ToChar(byteValue);
            if (charValue < 'a' || charValue > 'z')
                return byteValue;
            else
                return Convert.ToByte(byteValue - 32);
        }
        #endregion


        //public static int GetWordPageCount1(string path)
        //{

        //    XWPFDocument m_Docx = new XWPFDocument();
        //    m_Docx.
        //    System.IO.File doc = File("/Users/oushuuryuu/Desktop", "rirekisyo_jis.doc");
        //    Stream inStream = new FileStream(doc);
        //    m_Docx.Document.GetHashCode();
        //    //File doc = new System.IO.File("/Users/oushuuryuu/Desktop", "rirekisyo_jis.doc");
        //    var document = DocX.Load(path);
        //    Stream stream = new FileStream();
        //    MemoryStream stream2 = new MemoryStream();
        //    PostCreation(ref Package.Open(stream2, FileMode.Create, FileAccess.ReadWrite));
        //    Docx cx= Load(stream2);
        //    cx.stream = stream;
        //}

        #region --获取word文件的页数--
        /// <summary>
        /// 获得word文档页数
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public int GetWordPageCount(string path)
        {
            //try
            //{
                 Microsoft.Office.Interop.Word.Application myWord = new Microsoft.Office.Interop.Word.ApplicationClass();
                 object oMiss = System.Reflection.Missing.Value;

                 myWord.Visible = false;
                object filePath = path; //这里是Word文件的路径
                //打开文件
                Microsoft.Office.Interop.Word.Document myWordDoc = myWordApp.Documents.Open(
                    ref filePath, ref oMiss, ref oMiss, ref oMiss,
                    ref oMiss, ref oMiss, ref oMiss, ref oMiss,
                    ref oMiss, ref oMiss, ref oMiss, ref oMiss,
                    ref oMiss, ref oMiss, ref oMiss, ref oMiss);
                //下面是取得打开文件的页数
                int pages = myWordDoc.ComputeStatistics(WdStatistic.wdStatisticPages,ref oMiss);
                myWordDoc.Close(ref oMiss, ref oMiss, ref oMiss);
                return pages;
            //}
            //catch (Exception ex)
            //{
            //    return 0;
            //}
        }
        /// <summary>
        /// 关闭Word.ApplicationClass对象
        /// </summary>
        public void QuitWordApp()
        {
            if (myWordApp != null)
            {
                //关闭文件
                myWordApp.Quit(ref oMissing, ref oMissing, ref oMissing);
            }
        }

        #endregion
    }
}

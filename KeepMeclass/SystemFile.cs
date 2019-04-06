using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Web;

namespace KeepMeclass
{
    public class SystemFile
    {
        private static string strRootFolder;

        static SystemFile()
        {
            /*设置默认路径*/
            strRootFolder = HttpContext.Current.Request.PhysicalApplicationPath;
            strRootFolder = strRootFolder.Substring(0, strRootFolder.LastIndexOf(@"\"));
        }

        /// <summary>
        /// 读根目录
        /// </summary>
        /// <returns></returns>
        public static string GetRootPath()
        {
            return strRootFolder;
        }

        /// <summary>
        /// 写根目录
        /// </summary>
        /// <param name="path"></param>
        public static void SetRootPath(string path)
        {
            strRootFolder = path;
        }

        /// <summary>
        /// 读取列表
        /// </summary>
        /// <returns></returns>
        public static List<FileSystemItem> GetItems()
        {
            return GetItems(strRootFolder);
        }

        /// <summary>
        /// 读取列表
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static List<FileSystemItem> GetItems(string path)
        {
            string[] folders = Directory.GetDirectories(path);
            string[] files = Directory.GetFiles(path);
            List<FileSystemItem> list = new List<FileSystemItem>();
            foreach (string s in folders)
            {
                FileSystemItem item = new FileSystemItem();
                DirectoryInfo di = new DirectoryInfo(s);
                item.Name = di.Name;
                item.FullName = di.FullName;
                item.CreationDate = Convert.ToString(di.CreationTime);
                item.IsFolder = true;
                list.Add(item);
            }
            foreach (string s in files)
            {
                FileSystemItem item = new FileSystemItem();
                FileInfo fi = new FileInfo(s);
                item.Name = fi.Name;
                item.FullName = fi.FullName;
                item.CreationDate = Convert.ToString(fi.CreationTime);
                item.IsFolder = false;
                item.Size = fi.Length/1024+1;
                list.Add(item);
            }

            /*判断是否为默认目录，否则加上“上一级”，“根目录”*/
            //if (path.ToLower() != strRootFolder.ToLower())
            //{
            //    FileSystemItem topitem = new FileSystemItem();
            //    DirectoryInfo topdi = new DirectoryInfo(path).Parent;
            //    topitem.Name = "[上一级]";
            //    topitem.FullName = topdi.FullName;
            //    list.Insert(0, topitem);

            //    FileSystemItem rootitem = new FileSystemItem();
            //    DirectoryInfo rootdi = new DirectoryInfo(strRootFolder);
            //    rootitem.Name = "[根目录]";
            //    rootitem.FullName = rootdi.FullName;
            //    list.Insert(0, rootitem);

            //}
            return list;
        }


        /// <summary>
        /// 读取文件信息
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static FileSystemItem GetItemInfo(string path)
        {
            FileSystemItem item = new FileSystemItem();
            if (Directory.Exists(path))
            {
                DirectoryInfo di = new DirectoryInfo(path);
                item.Name = di.Name;
                item.FullName = di.FullName;
                item.CreationDate = Convert.ToString(di.CreationTime);
                item.IsFolder = true;
                item.LastAccessDate = Convert.ToString(di.LastAccessTime);
                item.LastWriteDate = Convert.ToString(di.LastWriteTime);
                item.FileCount = di.GetFiles().Length;
                item.SubFolderCount = di.GetDirectories().Length;
            }
            else
            {
                FileInfo fi = new FileInfo(path);
                item.Name = fi.Name;
                item.FullName = fi.FullName;
                item.CreationDate = Convert.ToString(fi.CreationTime);
                item.LastAccessDate = Convert.ToString(fi.LastAccessTime);
                item.LastWriteDate = Convert.ToString(fi.LastWriteTime);
                item.IsFolder = false;
                item.Size = fi.Length;
            }
            return item;
        }
    }
}

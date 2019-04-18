using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeepMeclass
{
    
    public  class FileSystemItem
    {
        private string _Name;
        private string _FullName;

        private string _CreationDate;
        private string _LastAccessDate;
        private string _LastWriteDate;

        private bool _IsFolder;

        private long _Size;
        private long _FileCount;
        private long _SubFolderCount;

        private string _Version;

        //添加
        private Int16 _ifprint;//之前是用的 bool 类型，但是无法区分 0 1 文件夹 三种情况

        /// <summary>
        /// 名称
        /// </summary>
        public string Name
        {
            get
            {
                return _Name;
            }
            set
            {
                _Name = value;
            }
        }

        /// <summary>
        /// 完整目录
        /// </summary>
        public string FullName
        {
            get
            {
                return _FullName;
            }
            set
            {
                _FullName = value;
            }
        }

        /// <summary>
        /// 创建时间
        /// </summary>
        public string CreationDate
        {
            get
            {
                return _CreationDate;
            }
            set
            {
                _CreationDate = value;
            }
        }

        /// <summary>
        /// 是否是文件夹
        /// </summary>
        public bool IsFolder
        {
            get
            {
                return _IsFolder;
            }
            set
            {
                _IsFolder = value;
            }
        }

        /// <summary>
        /// 大小
        /// </summary>
        public long Size
        {
            get
            {
                return _Size;
            }
            set
            {
                _Size = value;
            }
        }

        /// <summary>
        /// 访问时间
        /// </summary>
        public string LastAccessDate
        {
            get
            {
                return _LastAccessDate;
            }
            set
            {
                _LastAccessDate = value;
            }
        }

        /// <summary>
        /// 修改时间
        /// </summary>
        public string LastWriteDate
        {
            get
            {
                return _LastWriteDate;
            }
            set
            {
                _LastWriteDate = value;
            }
        }

        /// <summary>
        /// 文件数
        /// </summary>
        public long FileCount
        {
            get
            {
                return _FileCount;
            }
            set
            {
                _FileCount = value;
            }
        }

        /// <summary>
        /// 文件夹数
        /// </summary>
        public long SubFolderCount
        {
            get
            {
                return _SubFolderCount;
            }
            set
            {
                _SubFolderCount = value;
            }
        }

        /// <summary>
        /// 版本
        /// </summary>
        /// <returns></returns>
        public string Version()
        {
            if (_Version == null)
                _Version = GetType().Assembly.GetName().Version.ToString();

            return _Version;
        }

        /// <summary>
        /// 是否已经打印
        /// </summary>
        public Int16 ifprint
        {
            get
            {
                return _ifprint;
            }
            set
            {
                _ifprint = value;
            }
        }

    }
}

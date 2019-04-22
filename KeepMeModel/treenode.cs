using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeepMeModel
{
   public class treenode
    {

        private string _name;
        private string _value;
        private string _pid;
        private List<treenode> _list;
        /// <summary>
		/// 
		/// </summary>
		public string name
        {
            set { _name = value; }
            get { return _name; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string value
        {
            set { _value = value; }
            get { return _value; }
        }
        /// <summary>
        /// 
        /// </summary>
        public string pid
        {
            set { _pid = value; }
            get { return _pid; }
        }
        /// <summary>
        /// 
        /// </summary>
        public List<treenode> list
        {
            set { _list = value; }
            get { return _list; }
        }
        
    }
}

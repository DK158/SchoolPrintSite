using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeepMeModel
{
    public class LayuiTable
    {
        /// <summary>
        /// layui表格默认Json格式参数code，默认值为0
        /// </summary>
        public int code { get; set; }
        /// <summary>
        /// layui表格默认Json格式参数msg，默认值为""
        /// </summary>
        public string msg { get; set; }
        /// <summary>
        /// layui表格默认Json格式参数count，记录总数
        /// </summary>
        public int count { get; set; }
        /// <summary>
        /// 客户
        /// </summary>
        //public List<Customer> customer { get; set; }
    }
}

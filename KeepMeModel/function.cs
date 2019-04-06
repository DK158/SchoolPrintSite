using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// function:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class function
	{
		public function()
		{}
		#region Model
		private int _fun_id;
		private int? _parent_fun_id;
		private string _fun_name;
		private string _fun_href;
		private string _fun_icon;
		private int? _fun_state;
		private string _fun_breifinfo;
		/// <summary>
		/// 
		/// </summary>
		public int fun_id
		{
			set{ _fun_id=value;}
			get{return _fun_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? parent_fun_id
		{
			set{ _parent_fun_id=value;}
			get{return _parent_fun_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string fun_name
		{
			set{ _fun_name=value;}
			get{return _fun_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string fun_href
		{
			set{ _fun_href=value;}
			get{return _fun_href;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string fun_icon
		{
			set{ _fun_icon=value;}
			get{return _fun_icon;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? fun_state
		{
			set{ _fun_state=value;}
			get{return _fun_state;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string fun_breifinfo
		{
			set{ _fun_breifinfo=value;}
			get{return _fun_breifinfo;}
		}
		#endregion Model

	}
}


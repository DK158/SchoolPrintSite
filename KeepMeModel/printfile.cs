using System;
namespace KeepMeModel
{
	/// <summary>
	/// printfile:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class printfile
	{
		public printfile()
		{}
		#region Model
		private int _pf_id;
		private string _or_id;
		private string _pf_name;
		private int? _pf_page;
		private int? _pf_repaeatnum;
		private int? _pf_color;
		private string _fp_side;
		private string _pf_narrow;
		private string _pf_elseinfo;
		/// <summary>
		/// 
		/// </summary>
		public int pf_id
		{
			set{ _pf_id=value;}
			get{return _pf_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string or_id
		{
			set{ _or_id=value;}
			get{return _or_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string pf_name
		{
			set{ _pf_name=value;}
			get{return _pf_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? pf_page
		{
			set{ _pf_page=value;}
			get{return _pf_page;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? pf_repaeatnum
		{
			set{ _pf_repaeatnum=value;}
			get{return _pf_repaeatnum;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? pf_color
		{
			set{ _pf_color=value;}
			get{return _pf_color;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string fp_side
		{
			set{ _fp_side=value;}
			get{return _fp_side;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string pf_narrow
		{
			set{ _pf_narrow=value;}
			get{return _pf_narrow;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string pf_elseinfo
		{
			set{ _pf_elseinfo=value;}
			get{return _pf_elseinfo;}
		}
		#endregion Model

	}
}


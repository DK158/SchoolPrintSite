using System;
namespace KeepMeModel
{
	/// <summary>
	/// store:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class store
	{
		public store()
		{}
		#region Model
		private string _s_id;
		private string _sk_tel;
		private string _s_name;
		private string _s_school;
		private string _s_location;
		private int? _s_machine;
		private int? _s_computer;
		private int? _s_worker;
		private string _s_worktime;
		private string _s_breifinfo;
		private string _s_sculpture;
		private int? _s_runstate;
		/// <summary>
		/// 
		/// </summary>
		public string s_id
		{
			set{ _s_id=value;}
			get{return _s_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_tel
		{
			set{ _sk_tel=value;}
			get{return _sk_tel;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string s_name
		{
			set{ _s_name=value;}
			get{return _s_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string s_school
		{
			set{ _s_school=value;}
			get{return _s_school;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string s_location
		{
			set{ _s_location=value;}
			get{return _s_location;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? s_machine
		{
			set{ _s_machine=value;}
			get{return _s_machine;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? s_computer
		{
			set{ _s_computer=value;}
			get{return _s_computer;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? s_worker
		{
			set{ _s_worker=value;}
			get{return _s_worker;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string s_worktime
		{
			set{ _s_worktime=value;}
			get{return _s_worktime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string s_breifinfo
		{
			set{ _s_breifinfo=value;}
			get{return _s_breifinfo;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string s_sculpture
		{
			set{ _s_sculpture=value;}
			get{return _s_sculpture;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? s_runstate
		{
			set{ _s_runstate=value;}
			get{return _s_runstate;}
		}
		#endregion Model

	}
}


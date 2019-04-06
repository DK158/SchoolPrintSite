using System;
namespace KeepMeModel
{
	/// <summary>
	/// printorders:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class printorders
	{
		public printorders()
		{}
		#region Model
		private string _or_id;
		private string _s_id;
		private string _s_name;
		private string _user_tel;
		private string _or_payway;
		private float? _or_money;
		private int? _or_neccesery;
		private int? _or_state;
		private int? _or_filenum;
		private int? _or_pagenum;
		private string _or_uptime;
		private string _or_printtime;
		private string _or_suretime;
		private string _or_location;
		private string _or_remark;
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
		public string s_id
		{
			set{ _s_id=value;}
			get{return _s_id;}
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
		public string user_tel
		{
			set{ _user_tel=value;}
			get{return _user_tel;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string or_payway
		{
			set{ _or_payway=value;}
			get{return _or_payway;}
		}
		/// <summary>
		/// 
		/// </summary>
		public float? or_money
		{
			set{ _or_money=value;}
			get{return _or_money;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? or_neccesery
		{
			set{ _or_neccesery=value;}
			get{return _or_neccesery;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? or_state
		{
			set{ _or_state=value;}
			get{return _or_state;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? or_filenum
		{
			set{ _or_filenum=value;}
			get{return _or_filenum;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? or_pagenum
		{
			set{ _or_pagenum=value;}
			get{return _or_pagenum;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string or_upTime
		{
			set{ _or_uptime=value;}
			get{return _or_uptime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string or_printTime
		{
			set{ _or_printtime=value;}
			get{return _or_printtime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string or_sureTime
		{
			set{ _or_suretime=value;}
			get{return _or_suretime;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string or_location
		{
			set{ _or_location=value;}
			get{return _or_location;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string or_remark
		{
			set{ _or_remark=value;}
			get{return _or_remark;}
		}
		#endregion Model

	}
}


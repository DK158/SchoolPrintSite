using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// systemmanager:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class systemmanager
	{
		public systemmanager()
		{}
		#region Model
		private string _sm_tel;
		private string _sm_idcard;
		private string _sm_name;
		private string _sm_pwd;
		private string _sm_sculpture;
		/// <summary>
		/// 
		/// </summary>
		public string sm_tel
		{
			set{ _sm_tel=value;}
			get{return _sm_tel;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sm_idcard
		{
			set{ _sm_idcard=value;}
			get{return _sm_idcard;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sm_name
		{
			set{ _sm_name=value;}
			get{return _sm_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sm_pwd
		{
			set{ _sm_pwd=value;}
			get{return _sm_pwd;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sm_sculpture
		{
			set{ _sm_sculpture=value;}
			get{return _sm_sculpture;}
		}
		#endregion Model

	}
}


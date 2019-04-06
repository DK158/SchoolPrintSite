using System;
namespace KeepMeModel
{
    /// <summary>
    /// storekepper:实体类(属性说明自动提取数据库字段的描述信息)
    /// </summary>

    //[Serializable]
	public partial class storekepper
	{
		public storekepper()
		{}
		#region Model
		private string _sk_tel;
		private string _sk_idcard;
		private string _sk_name;
		private string _sk_pwd;
		private string _sk_general;
		private string _sk_birthloacation;
		private string _sk_birthday;
		private string _sk_breifinfo;
		private string _sk_sculpture;
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
		public string sk_idcard
		{
			set{ _sk_idcard=value;}
			get{return _sk_idcard;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_name
		{
			set{ _sk_name=value;}
			get{return _sk_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_pwd
		{
			set{ _sk_pwd=value;}
			get{return _sk_pwd;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_general
		{
			set{ _sk_general=value;}
			get{return _sk_general;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_birthloacation
		{
			set{ _sk_birthloacation=value;}
			get{return _sk_birthloacation;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_birthday
		{
			set{ _sk_birthday=value;}
			get{return _sk_birthday;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_breifinfo
		{
			set{ _sk_breifinfo=value;}
			get{return _sk_breifinfo;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sk_sculpture
		{
			set{ _sk_sculpture=value;}
			get{return _sk_sculpture;}
		}
		#endregion Model

	}
}


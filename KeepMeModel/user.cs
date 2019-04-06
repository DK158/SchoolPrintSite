using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// user:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class user
	{
		public user()
		{}
		#region Model
		private string _user_id;
		private string _user_tel;
		private string _user_name;
		private string _user_nickname;
		private string _user_password;
		private string _user_location;
		private string _user_sculpture;
		/// <summary>
		/// 
		/// </summary>
		public string user_id
		{
			set{ _user_id=value;}
			get{return _user_id;}
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
		public string user_name
		{
			set{ _user_name=value;}
			get{return _user_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string user_nickname
		{
			set{ _user_nickname=value;}
			get{return _user_nickname;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string user_password
		{
			set{ _user_password=value;}
			get{return _user_password;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string user_location
		{
			set{ _user_location=value;}
			get{return _user_location;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string user_sculpture
		{
			set{ _user_sculpture=value;}
			get{return _user_sculpture;}
		}
		#endregion Model

	}
}


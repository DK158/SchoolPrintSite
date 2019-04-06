using System;
namespace KeepMeModel
{
	/// <summary>
	/// assistant:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class assistant
	{
		public assistant()
		{}
		#region Model
		private string _sa_tel;
		private string _s_id;
		private string _sa_pwd;
		private string _sa_name;
		private string _sa_nick;
		private string  _sa_general;
		private string _sa_breifinfo;
		private string _sa_sculpture;
		private string _sa_birthday;
		/// <summary>
		/// 
		/// </summary>
		public string sa_tel
		{
			set{ _sa_tel=value;}
			get{return _sa_tel;}
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
		public string sa_pwd
		{
			set{ _sa_pwd=value;}
			get{return _sa_pwd;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sa_name
		{
			set{ _sa_name=value;}
			get{return _sa_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sa_nick
		{
			set{ _sa_nick=value;}
			get{return _sa_nick;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sa_general
		{
			set{ _sa_general=value;}
			get{return _sa_general;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sa_breifinfo
		{
			set{ _sa_breifinfo=value;}
			get{return _sa_breifinfo;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string sa_sculpture
		{
			set{ _sa_sculpture=value;}
			get{return _sa_sculpture;}
		}

        public string sa_birthday
        {
            set { _sa_birthday = value; }
            get { return _sa_birthday; }
        }
        #endregion Model

    }
}


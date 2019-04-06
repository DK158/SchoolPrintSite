using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// department:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class department
	{
		public department()
		{}
		#region Model
		private int _dep_id;
		private int? _parent_dep_id;
		private string _dep_name;
		private string _dep_breifinfo;
		/// <summary>
		/// 
		/// </summary>
		public int dep_id
		{
			set{ _dep_id=value;}
			get{return _dep_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? parent_dep_id
		{
			set{ _parent_dep_id=value;}
			get{return _parent_dep_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string dep_name
		{
			set{ _dep_name=value;}
			get{return _dep_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string dep_breifinfo
		{
			set{ _dep_breifinfo=value;}
			get{return _dep_breifinfo;}
		}
		#endregion Model

	}
}


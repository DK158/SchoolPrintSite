using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// position:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class position
	{
		public position()
		{}
		#region Model
		private int _pos_id;
		private int? _parent_pos_id;
		private string _pos_name;
		private string _pos_breifinfo;
		/// <summary>
		/// 
		/// </summary>
		public int pos_id
		{
			set{ _pos_id=value;}
			get{return _pos_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? parent_pos_id
		{
			set{ _parent_pos_id=value;}
			get{return _parent_pos_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string pos_name
		{
			set{ _pos_name=value;}
			get{return _pos_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string pos_breifinfo
		{
			set{ _pos_breifinfo=value;}
			get{return _pos_breifinfo;}
		}
		#endregion Model

	}
}


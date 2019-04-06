using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// departmentfunction:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class departmentfunction
	{
		public departmentfunction()
		{}
		#region Model
		private int? _dep_id;
		private int? _pos_id;
		/// <summary>
		/// 
		/// </summary>
		public int? dep_id
		{
			set{ _dep_id=value;}
			get{return _dep_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? pos_id
		{
			set{ _pos_id=value;}
			get{return _pos_id;}
		}
		#endregion Model

	}
}


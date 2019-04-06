using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// positionfunction:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class positionfunction
	{
		public positionfunction()
		{}
		#region Model
		private int _posfun_id;
		private int? _pos_id;
		private int? _fun_id;
		/// <summary>
		/// 
		/// </summary>
		public int posfun_id
		{
			set{ _posfun_id=value;}
			get{return _posfun_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? pos_id
		{
			set{ _pos_id=value;}
			get{return _pos_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? fun_id
		{
			set{ _fun_id=value;}
			get{return _fun_id;}
		}
		#endregion Model

	}
}


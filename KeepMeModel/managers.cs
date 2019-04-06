using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// managers:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class managers
	{
		public managers()
		{}
		#region Model
		private int _ma_number;
		private string _ma_tel;
		private string _ma_role;
		/// <summary>
		/// 
		/// </summary>
		public int ma_number
		{
			set{ _ma_number=value;}
			get{return _ma_number;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ma_tel
		{
			set{ _ma_tel=value;}
			get{return _ma_tel;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string ma_role
		{
			set{ _ma_role=value;}
			get{return _ma_role;}
		}
		#endregion Model

	}
}


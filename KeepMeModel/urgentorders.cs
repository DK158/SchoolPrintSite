using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// urgentorders:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class urgentorders
	{
		public urgentorders()
		{}
		#region Model
		private string _or_id;
		private string _or_takenumber;
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
		public string or_takenumber
		{
			set{ _or_takenumber=value;}
			get{return _or_takenumber;}
		}
		#endregion Model

	}
}


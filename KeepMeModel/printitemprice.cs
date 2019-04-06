using System;
namespace Maticsoft.Model
{
	/// <summary>
	/// printitemprice:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class printitemprice
	{
		public printitemprice()
		{}
		#region Model
		private int _printceitem_id;
		private string _priceitem_name;
		private int? _priceitem_role;
		private string _priceitem_storeid;
		/// <summary>
		/// 
		/// </summary>
		public int printceItem_id
		{
			set{ _printceitem_id=value;}
			get{return _printceitem_id;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string priceItem_name
		{
			set{ _priceitem_name=value;}
			get{return _priceitem_name;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? priceItem_role
		{
			set{ _priceitem_role=value;}
			get{return _priceitem_role;}
		}
		/// <summary>
		/// 
		/// </summary>
		public string priceItem_storeId
		{
			set{ _priceitem_storeid=value;}
			get{return _priceitem_storeid;}
		}
		#endregion Model

	}
}


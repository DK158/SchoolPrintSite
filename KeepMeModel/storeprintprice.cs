using System;
namespace KeepMeModel
{
	/// <summary>
	/// storeprintprice:实体类(属性说明自动提取数据库字段的描述信息)
	/// </summary>
	[Serializable]
	public partial class storeprintprice
	{
		public storeprintprice()
		{}
		#region Model
		private int _sitem_priceid;
		private int? _printceitem_id;
		private string _s_id;
		private float? _sitem_price;
		/// <summary>
		/// 
		/// </summary>
		public int sItem_priceId
		{
			set{ _sitem_priceid=value;}
			get{return _sitem_priceid;}
		}
		/// <summary>
		/// 
		/// </summary>
		public int? printceItem_id
		{
			set{ _printceitem_id=value;}
			get{return _printceitem_id;}
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
		public float? sItem_price
		{
			set{ _sitem_price=value;}
			get{return _sitem_price;}
		}
		#endregion Model

	}
}


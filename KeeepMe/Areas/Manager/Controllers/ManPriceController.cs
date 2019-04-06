using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using System.Data;
using KeepMeclass;
using KeepMeModel;
namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManPriceController : Controller
    {
        //
        // GET: /Manager/ManPrice/ 打印店打印价格管理

        KeepMeBll.BllManPrice bp = new KeepMeBll.BllManPrice();

        public ActionResult ManPrice()
        {
            return View();
        }

        public string getStoreAllPriceItem()
        {
            Session["store_id"] = "6666";//临时
            string s_id = Session["store_id"].ToString();
            DataTable dt = bp.getStoreAllPriceItem(s_id);
            string itemList= DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            itemList = "{\"code\":0,\"msg\":\"\",\"data\":" + itemList + "}"; //组成layui接收格式
            return itemList;
        }

        public string getAllPriceItem()
        {
            DataTable dt= bp.getAllPriceItem();
            return DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
        }

        public int addStorePriceItem()
        {
            storeprintprice spp = new storeprintprice();
            spp.printceItem_id = Convert.ToInt16(Request["printceItem_id"]);
            spp.sItem_price = float.Parse(Request["sItem_price"]) ;
            Session["store_id"] = "6666";//临时
            spp.s_id = Session["store_id"].ToString();
            return bp.addStorePriceItem(spp);
        }

        public int editPrice()
        {
            int sItem_priceId = Convert.ToInt16(Request["sItem_priceId"].ToString());
            float sItem_price =float.Parse(Request["sItem_price"].ToString());
            return bp.editPrice(sItem_priceId, sItem_price);
        }

        public int deletePriceItem()
        {
            int sItem_priceId = Convert.ToInt16(Request["sItem_priceId"].ToString());
            return bp.deletePriceItem(sItem_priceId);
        }

        public string showPriceItemDetail()
        {
            int sItem_priceId = Convert.ToInt32(Request["sItem_priceId"].ToString());
            DataTable dt= bp.showPriceItemDetail(sItem_priceId);
            return DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
        }
        

    }
}

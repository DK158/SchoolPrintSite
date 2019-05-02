using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;

namespace KeeepMe.Areas.system.Controllers
{
    public class ManPositionController : Controller
    {
        //
        // GET: /system/ManPosition/
        KeepMeBll.BllManPosition bp = new KeepMeBll.BllManPosition();

        public ActionResult ManPosition()
        {
            return View();
        }
        public string showAllPosition(int page, int limit)
        {
            return bp.showAllPosition(page-1,limit);
        }

        public int addPosition()
        {
            string pos_id = Request["pos_id"].ToString();
            string pos_name = Request["pos_name"].ToString();
            string pos_breifinfo = Request["pos_breifinfo"].ToString();
            return bp.addPosition(pos_id, pos_name, pos_breifinfo);
        }

        public string showPositiondetail()
        {
            string pos_id = Request["pos_id"].ToString();
            return bp.showPositiondetail(pos_id);
        }
        
        public int editPosition()
        {
            string pos_id = Request["pos_id"].ToString();
            string pos_name = Request["pos_name"].ToString();
            string pos_breifinfo = Request["pos_breifinfo"].ToString();
            return bp.editPosition(pos_id, pos_name, pos_breifinfo);
        }
        public int deletePostion()
        {
            string pos_id = Request["pos_id"].ToString();
            return bp.deletePostion(pos_id);
        }
    }
}

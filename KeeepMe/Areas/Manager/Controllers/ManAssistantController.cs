using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using KeepMeBll;
using KeepMeModel;
using System.Data;

namespace KeeepMe.Areas.Manager.Controllers
{
    public class ManAssistantController : Controller
    {
        //
        // GET: /Manager/ManAssistant/店员管理

        KeepMeBll.BllManAssistant bas = new KeepMeBll.BllManAssistant();

        public ActionResult ManAssistant()
        {
            return View();
        }

        /// <summary>
        /// 获取全部店主简要信息
        /// </summary>
        /// <returns></returns>
        public string showAllAssistant(int page, int limit)
        {
            DataTable dt = bas.showAllAssistant(page - 1, limit); //获取表格
            string urlist = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            int num = DataHelper.DataTableRows(dt);
            urlist = "{\"code\":0,\"msg\":\"\",\"count\":" + num + ",\"data\":" + urlist + "}"; //组成layui接收格式
            return urlist;
        }

        /// <summary>
        /// 增加店主
        /// </summary>
        /// <returns></returns>
        public int addAssistant()
        {
            assistant ast = new assistant();
            ast.sa_tel = Request["sa_tel"];
            Session["store_id"] = "6666";//临时
            ast.s_id = Session["store_id"].ToString();
            ast.sa_name = Request["sa_name"].ToString();
            ast.sa_pwd = DataHelper.GetSha1("123456");//默认值设置为123456
            ast.sa_general = Request["sa_general"].ToString();
            ast.sa_nick = Request["sa_nick"].ToString();
            ast.sa_birthday = Request["sa_birthday"].ToString();
            ast.sa_breifinfo = Request["sa_breifinfo"].ToString();
            ast.sa_sculpture = "~/Content/images/headicon/dianyuan.jpg";//默认图片头像
            return bas.addAssistant(ast);
        }

        /// <summary>
        /// 展示店主详细信息
        /// </summary>
        /// <returns></returns>
        public string showAssistantdetail()
        {
            string sa_tel = Request["sa_tel"];
            string dataJson = bas.showAssistantdetail(sa_tel);
            var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            return dataJson;
        }

        /// <summary>
        /// 删除店主信息
        /// </summary>
        /// <returns></returns>
        public int deleteAssistant()
        {
            string sa_tel = Request["sa_tel"];
            return bas.deleteAssistant(sa_tel);
        }

        /// <summary>
        /// 编辑店主信息
        /// </summary>
        /// <returns></returns>
        public int editAssistant()
        {
            assistant ast = new assistant();
            ast.sa_tel = Request["sa_tel"]; //店主电话作为主键，不可修改
            ast.s_id = Request["s_id"].ToString();
            ast.sa_name = Request["sa_name"].ToString();
            ast.sa_pwd = DataHelper.GetSha1("123456");//默认值设置为123456,每次修改后密码自动重置为123456
            ast.sa_general = Request["sa_general"].ToString();
            ast.sa_nick = Request["sa_nick"].ToString();
            ast.sa_birthday = Request["sa_birthday"].ToString();
            ast.sa_breifinfo = Request["sa_breifinfo"].ToString();
            return bas.editAssistant(ast);
        }
    }
}

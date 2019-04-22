﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Data;
using KeepMeModel;
using KeepMeBll;
using System.Runtime.Serialization.Json;
using System.IO;
using System.Text;

namespace KeeepMe.Areas.system.Controllers
{
    public class ManPosWithFunController : Controller
    {
        //
        // GET: /system/ManPosWithFun/
        KeepMeBll.BllPosWithFun bpf = new KeepMeBll.BllPosWithFun();

        public ActionResult PositionWithFunction()
        {
            return View();
        }

        public string GetFunctionTree()
        {
            DataTable dt = bpf.GetFunctionTree();
            string itemList = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            itemList = "{\"code\":0,\"msg\":\"获取成功\",\"data\":{\"list\":" + itemList + "}}"; //组成layui接收格式
            return itemList;
            //DataTable dt = bpf.GetFunctionTree();
            //List<treenode> list = tabletolist(dt);
            //var num = list.Count;
            //var dataJson = new { code = 0, msg = "", count = num, data = list };
            //var json = Json(dataJson, JsonRequestBehavior.AllowGet);
            //return json;
        }
        // 从一个对象信息生成Json串
        protected string ObjectToJson(object obj)
        {
            DataContractJsonSerializer serializer = new DataContractJsonSerializer(obj.GetType());
            MemoryStream stream = new MemoryStream();
            serializer.WriteObject(stream, obj);
            byte[] dataBytes = new byte[stream.Length];
            stream.Position = 0;
            stream.Read(dataBytes, 0, (int)stream.Length);
            return Encoding.UTF8.GetString(dataBytes);
        }

        public string GetFunctionTree1()
        {
            DataTable dt = bpf.GetFunctionTree1();
            string itemList = DataHelper.DataTableToJsonWithJavaScriptSerializer(dt);
            itemList = "{\"code\":0,\"msg\":\"获取成功\",\"data\":{\"list\":" + itemList + "}}"; //组成layui接收格式
            return itemList;
        }

        protected List<treenode> tabletolist(DataTable dt)
        {
            List<treenode> list = new List<treenode>();
            DataSet ds = new DataSet();
            ds.Tables.Add(dt.Copy());
            ds.Relations.Add("TreeRelation", ds.Tables[0].Columns["value"], ds.Tables[0].Columns["pid"],false);

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                if (Convert.ToInt16(dr["pid"])==0)
                {
                    treenode node = new treenode();
                    node.name = dr["name"].ToString();
                    node.value = dr["value"].ToString();
                    node.pid = dr["pid"].ToString();
                    list.Add(node);

                    ResolveSubTree(dr, node);
                }
            }
            return list;
        }
        private void ResolveSubTree(DataRow dr, treenode treeNode)
        {
            DataRow[] rows = dr.GetChildRows("TreeRelation");
            if (rows.Length > 0)
            {
                //treeNode.Expanded = true;
                foreach (DataRow row in rows)
                {
                    treenode node = new treenode();
                    node.name = dr["name"].ToString();
                    node.value = dr["value"].ToString();
                    node.pid = dr["pid"].ToString();
                    treeNode.list.Add(node);

                    ResolveSubTree(row, node);
                }
            }

        }
    }
}

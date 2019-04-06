using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using System.Net.Mail;
using System.Text;

namespace KeeepMe.Controllers
{
    public class ForgetPwdController : Controller
    {
        //
        // GET: /ForgetPwd/
        KeepMeBll.Login lg = new KeepMeBll.Login();
        public ActionResult forgotpwd()
        {
            return View();
        }

        //更改密码
        public int updatepwd()
        {
            string thecode = Request["thecode"].ToString();
            string mail = Request["mail"];
            string pwd = Request["pwd"];
            string code = Session["thecomcode"].ToString();
            if (thecode != code)
            {
                return -1;
            }
            else
            {
                return lg.updatemanagepwd(mail, pwd);
            }
        }
        //发送邮件
        public bool SendEmail()
        {
            MailMessage msg = new MailMessage();
            string email = Request["mail"];
            msg.To.Add(email);//收件人地址 
            msg.CC.Add("3162795401@qq.com");//抄送人地址 

            msg.From = new MailAddress("3162795401@qq.com", "天煞打印店");//发件人邮箱，名称 

            msg.Subject = "天煞打印店验证码";//邮件标题 
            msg.SubjectEncoding = Encoding.UTF8;//标题格式为UTF8 
            Random rd = new Random();  //产生随机验证码
            string code = rd.Next(11, 99).ToString();
            code = code + code;
            Session["thecomcode"] = code;
            msg.Body = "你的重置密码验证码为：  '" + code + "'  请勿给他人使用 \r\n"
            + " --------------------------------------\r\n"
            +"  感谢您对天煞打印店的支持^_^ ……";//邮件内容 
            msg.BodyEncoding = Encoding.UTF8;//内容格式为UTF8 

            SmtpClient client = new SmtpClient();

            client.Host = "smtp.qq.com";//SMTP服务器地址 
            client.Port = 587;//SMTP端口，QQ邮箱填写587 

            client.EnableSsl = true;//启用SSL加密 
            //发件人邮箱账号，授权码(注意此处，是授权码你需要到qq邮箱里点设置开启Smtp服务，然后会提示你第三方登录时密码处填写授权码)
            client.Credentials = new System.Net.NetworkCredential("3162795401@qq.com", "zicrwefzumzmdgfh");

            try
            {
                client.Send(msg);//发送邮件
            }
            catch (Exception)
            {
                return false;
            }
            return true;
        }
    }
}

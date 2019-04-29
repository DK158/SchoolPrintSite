using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KeepMeclass
{
    public class Timer
    {
        //计时器
        public void timer()
        {
            System.Timers.Timer timer = new System.Timers.Timer();
            timer.Enabled = true;
            timer.Interval = 1000*60*60*12;//执行间隔时间,单位为毫秒,十二小时触发一次
            timer.Start();
            timer.Elapsed += new System.Timers.ElapsedEventHandler(ChangeStoreOrderNum);
            timer.AutoReset = true; //保证每12h都执行一次。
        }

        //更新所有打印店的总订单数目 
        //在网站挂到iis上，如果有用户登录了，触发了定时器，及时用户关掉网页退出了。这个定时器依然还在运作。只有在iis关掉网站，或者重新启动一下网站才可以中断定时器
        private void ChangeStoreOrderNum(object sender, System.Timers.ElapsedEventArgs e)
        {
            string sql = "UPDATE store s,(SELECT s_id,COUNT(*) AS num FROM printorders GROUP BY s_id) t SET s.s_totalorder=t.num WHERE s.s_id=t.s_id";
            mySqlDbHelper.dochangesql(sql);
        }


    }
}

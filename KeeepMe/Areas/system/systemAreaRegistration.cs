using System.Web.Mvc;

namespace KeeepMe.Areas.system
{
    public class systemAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "system";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "system_default",
                "system/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}

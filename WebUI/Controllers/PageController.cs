using Microsoft.AspNetCore.Mvc;

namespace WebUI.Controllers
{
    public class PageController : Controller
    {
        public IActionResult Index(string slug)
        {
            // 1. Gelen "slug" ile veritabanını sorgula.
            // var page = _pageService.GetBySlug(slug);

            // 2. Eğer sayfa bulunamazsa, 404 hatası döndür.
            // if (page == null)
            // {
            //     return NotFound();
            // }

            // 3. Sayfa bulunduysa, modeli View'a gönder.
            // Şimdilik, slug'ı doğrudan View'a göndererek test ediyoruz.
            ViewData["Title"] = slug;
            return View("Index", slug);
        }
    }
}

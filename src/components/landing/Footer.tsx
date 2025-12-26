import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#features", label: "المميزات" },
    { href: "#pricing", label: "الأسعار" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">م</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">منصة مادي</h3>
                <p className="text-sm text-background/60">لحلول التجارة الإلكترونية</p>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              نظام ERP متكامل للتجارة الإلكترونية والدفع عند الاستلام في ليبيا. 
              نساعدك على تنظيم طلباتك وتتبع أرباحك وإدارة مخزونك بسهولة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">تابعنا</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-background/60">تواصل معنا</p>
              <p className="text-background/70">info@madi-platform.ly</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} منصة مادي لحلول التجارة الإلكترونية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
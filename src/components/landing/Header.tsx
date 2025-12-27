import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

// Logo imported so Vite bundles it
const logo = new URL("../../../images/logo.png", import.meta.url).href;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#features", label: "المميزات" },
    { href: "#how-it-works", label: "كيف يعمل" },
    { href: "#pricing", label: "الأسعار" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="منصة مادي" className="w-10 h-10 object-cover rounded-lg" />
            <span className="font-bold text-lg md:text-xl text-foreground hidden sm:block">
              منصة مادي
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
              ابدأ تجربتك المجانية
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity mt-4">
                ابدأ تجربتك المجانية
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
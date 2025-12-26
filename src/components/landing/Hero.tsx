import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              تجربة مجانية لمدة 7 أيام
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-foreground">نظم تجارتك الإلكترونية</span>
              <br />
              <span className="gradient-text">بذكاء وسهولة</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              اربط جدول Google Sheets الخاص بك وحوّل بياناتك إلى نظام متكامل لإدارة الطلبات، 
              تتبع الأرباح، وتحليل المخزون. مصمم خصيصاً للتجارة الإلكترونية بنظام الدفع عند الاستلام في ليبيا.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                ابدأ 7 أيام مجاناً
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2"
              >
                <Play className="w-5 h-5 ml-2" />
                شاهد الفيديو التوضيحي
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">+500</p>
                <p className="text-sm text-muted-foreground">تاجر نشط</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">+50,000</p>
                <p className="text-sm text-muted-foreground">طلب تمت معالجته</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">رضا العملاء</p>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden p-4">
              {/* Desktop screenshot (visible on lg+) */}
              <div className="hidden lg:block">
                <img src="/images/pc-screenshot-header.png" alt="لقطة شاشة سطح المكتب" className="w-full h-auto object-cover" />
              </div>

              {/* Mobile screenshot (visible on small screens) */}
              <div className="block lg:hidden flex items-center justify-center">
                <div className="w-48 md:w-64 rounded-[2rem] overflow-hidden bg-transparent">
                  <img src="/images/IMG_4141.PNG" alt="لقطة شاشة الموبايل" className="w-full h-auto object-cover bg-transparent" />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
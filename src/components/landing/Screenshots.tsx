import { Smartphone, Monitor } from "lucide-react";

const Screenshots = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">واجهة المستخدم</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            تصميم بسيط وسهل الاستخدام
          </h2>
          <p className="text-lg text-muted-foreground">
            واجهة عربية بالكامل مصممة لتجربة مستخدم سلسة على الويب والموبايل
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Desktop Screenshot */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-2xl border border-border/50 overflow-hidden">
              {/* Browser-like header */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                    madi-platform.ly
                  </div>
                </div>
              </div>
              <div className="aspect-[16/10] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <img src="/images/pc-screenshot.png" alt="لقطة شاشة لوحة التحكم" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>

          {/* Mobile Screenshots */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {/* Phone 1 */}
            <div className="relative animate-float" style={{ animationDelay: "0s" }}>
              <div className="w-48 md:w-56 rounded-[2rem] overflow-hidden bg-transparent">
                  <div className="aspect-[9/19]">
                    <img src="/images/IMG_4142.PNG" alt="لقطة موبايل 1" className="w-full h-full object-cover bg-transparent" />
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="relative animate-float mt-8" style={{ animationDelay: "0.5s" }}>
              <div className="w-48 md:w-56 rounded-[2rem] overflow-hidden bg-transparent">
                  <div className="aspect-[9/19]">
                    <img src="/images/IMG_4143.PNG" alt="لقطة موبايل 2" className="w-full h-full object-cover bg-transparent" />
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
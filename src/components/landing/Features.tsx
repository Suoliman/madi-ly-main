import { 
  Table2, 
  Package, 
  TrendingUp, 
  ClipboardList, 
  FileText, 
  MessageCircle 
} from "lucide-react";

const features = [
  {
    icon: Table2,
    title: "ربط Google Sheets",
    description: "اربط جدولك مباشرة واستورد بياناتك بضغطة زر. تحديث تلقائي ومزامنة مستمرة.",
  },
  {
    icon: Package,
    title: "إدارة الطلبات",
    description: "تتبع طلباتك عبر 3 مراحل: غير مؤكد، قيد التسليم، تم التسليم. تنظيم ذكي وسهل.",
  },
  {
    icon: TrendingUp,
    title: "تحليل الأرباح والتوصيل",
    description: "تقارير مفصلة عن أرباحك ونسب التوصيل الناجح. اتخذ قرارات مبنية على البيانات.",
  },
  {
    icon: ClipboardList,
    title: "تحليل المخزون",
    description: "تابع مخزونك في الوقت الفعلي. تنبيهات ذكية عند انخفاض الكميات.",
  },
  {
    icon: FileText,
    title: "فواتير آلية",
    description: "إنشاء فواتير احترافية تلقائياً لكل عميل. وفر وقتك وجهدك.",
  },
  {
    icon: MessageCircle,
    title: "تواصل سريع",
    description: "أزرار اتصال وواتساب مدمجة للتواصل الفوري مع عملائك.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">المميزات</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            كل ما تحتاجه لإدارة تجارتك
          </h2>
          <p className="text-lg text-muted-foreground">
            أدوات متكاملة مصممة خصيصاً لتجار التجارة الإلكترونية في ليبيا
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
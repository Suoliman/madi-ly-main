import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "أساسي",
    price: "49",
    period: "شهرياً",
    description: "مثالي للتجار المبتدئين",
    features: [
      "ربط جدول Google Sheets واحد",
      "إدارة حتى 500 طلب شهرياً",
      "تقارير أساسية",
      "دعم عبر البريد الإلكتروني",
    ],
    popular: false,
  },
  {
    name: "احترافي",
    price: "99",
    period: "شهرياً",
    description: "الأكثر شعبية للتجار النشطين",
    features: [
      "ربط عدة جداول Google Sheets",
      "طلبات غير محدودة",
      "تحليلات متقدمة للأرباح والمخزون",
      "فواتير تلقائية",
      "تواصل سريع (اتصال + واتساب)",
      "دعم أولوية",
    ],
    popular: true,
  },
  {
    name: "متقدم",
    price: "199",
    period: "شهرياً",
    description: "للشركات والفرق الكبيرة",
    features: [
      "كل مميزات الباقة الاحترافية",
      "عدة مستخدمين",
      "تقارير مخصصة",
      "API للتكامل",
      "مدير حساب مخصص",
      "دعم على مدار الساعة",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">الأسعار</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            باقات تناسب احتياجاتك
          </h2>
          <p className="text-lg text-muted-foreground">
            جميع الباقات تشمل تجربة مجانية لمدة 7 أيام. بدون بطاقة ائتمان.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 md:p-8 border ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-105"
                  : "border-border/50"
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2">
                  <span className="gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    الأكثر شعبية
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">د.ل / {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdWD7VP6qe3se1Vpnt7OgrTc_JjKup3BGnnEVb7Zi1l0C6LvA/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "gradient-primary text-primary-foreground hover:opacity-90"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  ابدأ تجربتك المجانية
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
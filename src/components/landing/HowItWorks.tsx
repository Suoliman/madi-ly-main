import { Link2, Layers, Rocket } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "اربط جدولك",
    description: "اربط جدول Google Sheets الخاص بك بضغطة واحدة. استيراد سريع وآمن لجميع بياناتك.",
  },
  {
    icon: Layers,
    number: "02",
    title: "تنظيم تلقائي",
    description: "يتم تنظيم طلباتك تلقائياً إلى 3 مراحل: غير مؤكد، قيد التسليم، تم التسليم.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "تابع ونمو",
    description: "تابع أداء تجارتك بتقارير مفصلة واتخذ قرارات ذكية لتنمية أعمالك.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">كيف يعمل</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            3 خطوات بسيطة للبدء
          </h2>
          <p className="text-lg text-muted-foreground">
            ابدأ في دقائق معدودة واحصل على نظام متكامل لإدارة تجارتك
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-l from-primary/30 to-transparent -translate-x-1/2" />
              )}
              
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="inline-block text-primary font-bold text-sm mb-2">{step.number}</span>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default HowItWorks;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "كيف يمكنني ربط جدول Google Sheets؟",
    answer:
      "العملية بسيطة جداً! بعد إنشاء حسابك، اضغط على 'ربط جدول' وسيتم توجيهك لتسجيل الدخول بحساب Google الخاص بك. اختر الجدول الذي تريد ربطه وسيتم استيراد البيانات تلقائياً.",
  },
  {
    question: "هل هناك فترة تجريبية مجانية؟",
    answer:
      "نعم! نقدم تجربة مجانية لمدة 7 أيام كاملة لجميع الباقات. يمكنك استخدام جميع المميزات بدون قيود خلال فترة التجربة، ولا تحتاج لإدخال بطاقة ائتمان.",
  },
  {
    question: "ما هي مراحل الطلبات الثلاث؟",
    answer:
      "الطلبات تُنظم في 3 مراحل: 'غير مؤكد' للطلبات الجديدة التي لم يتم تأكيدها بعد، 'قيد التسليم' للطلبات التي تم تأكيدها وجاري توصيلها، و'تم التسليم' للطلبات المكتملة بنجاح.",
  },
  {
    question: "هل يمكنني إلغاء اشتراكي في أي وقت؟",
    answer:
      "نعم، يمكنك إلغاء اشتراكك في أي وقت بدون أي رسوم إضافية. ستستمر في الوصول للخدمة حتى نهاية فترة الاشتراك الحالية.",
  },
  {
    question: "هل بياناتي آمنة؟",
    answer:
      "بالتأكيد! نستخدم أعلى معايير الأمان لحماية بياناتك. جميع الاتصالات مشفرة، ولا نشارك بياناتك مع أي طرف ثالث. بياناتك ملك لك وحدك.",
  },
  {
    question: "كيف يمكنني التواصل مع الدعم الفني؟",
    answer:
      "يمكنك التواصل معنا عبر البريد الإلكتروني، الواتساب، أو من خلال نموذج التواصل في الموقع. فريق الدعم متاح للرد على استفساراتك ومساعدتك.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">الأسئلة الشائعة</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            أسئلة يتكرر طرحها
          </h2>
          <p className="text-lg text-muted-foreground">
            إجابات على أكثر الأسئلة شيوعاً. لم تجد إجابتك؟ تواصل معنا!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-right hover:no-underline py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            نحن هنا لمساعدتك
          </h2>
          <p className="text-lg text-muted-foreground">
            هل لديك أي استفسار؟ تواصل معنا عبر النموذج أو من خلال الواتساب
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Contact Info & WhatsApp */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">تواصل عبر واتساب</h3>
                  <p className="text-muted-foreground">رد سريع ومباشر</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                تواصل معنا مباشرة عبر الواتساب للحصول على رد فوري على استفساراتك
              </p>
              <Button
                size="lg"
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open("https://wa.me/218920546132", "_blank")}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                ابدأ محادثة واتساب
              </Button>
            </div>

            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
              <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">البريد الإلكتروني</p>
                    <p className="font-medium">info@madi-platform.ly</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">رقم الهاتف</p>
                    <p className="font-medium" dir="ltr">+218 920 546 132</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
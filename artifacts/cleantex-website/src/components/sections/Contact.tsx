import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you with a quote shortly.",
    });
    
    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4">Get In Touch</h3>
          <p className="text-lg text-muted-foreground">
            Request a free quote or ask us any questions about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 bg-white rounded-[2.5rem] shadow-xl border border-border p-4 sm:p-8">
          
          {/* Form Side */}
          <div className="lg:col-span-3 p-4 sm:p-6">
            <h4 className="text-2xl font-bold text-foreground mb-6">Send us a message</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all"
                    placeholder="+234 800 000 0000"
                  />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                  <select
                    {...register("service")}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="carpet">Carpet & Upholstery</option>
                    <option value="deep-clean">Deep Cleaning</option>
                    <option value="fumigation">Fumigation & Pest Control</option>
                    <option value="post-construction">Post-Construction</option>
                    <option value="laundry">Laundry Services</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && <p className="text-destructive text-xs mt-1">{errors.service.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                  placeholder="Tell us about your cleaning or pest control needs..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-2 bg-secondary text-secondary-foreground rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
            {/* Decorative circles */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-8 text-white">Contact Information</h4>
              
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-foreground/70 mb-1">Call Us</p>
                    <a href="tel:08064551684" className="font-semibold text-white text-lg hover:text-accent transition-colors">08064551684</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-foreground/70 mb-1">WhatsApp (24hrs)</p>
                    <a href="https://wa.me/2348064551684" target="_blank" rel="noopener noreferrer" className="font-semibold text-white text-lg hover:text-accent transition-colors">08064551684</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-foreground/70 mb-1">Email Us</p>
                    <a href="mailto:Cleantexnigeria@gmail.com" className="font-semibold text-white text-lg hover:text-accent transition-colors">Cleantexnigeria@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-foreground/70 mb-1">Address</p>
                    <p className="font-semibold text-white text-lg">No. 28 Liverpool Close, Suncity Estate, Abuja</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-foreground/70 mb-1">Office Hours</p>
                    <p className="font-semibold text-white">Mon–Fri: 8:30am – 4:30pm</p>
                    <p className="text-white/70 text-sm mt-1">WhatsApp available 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Phone, CheckCircle2, PlusCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LucideIcon } from "lucide-react";

export interface ServicePageProps {
  title: string;
  subtitle: string;
  heroSubtext: string;
  whyItMatters: string[];
  whatWeOffer: string[];
  whatYouGet: string[];
  howItWorks: string[];
  faqs: { q: string; a: string }[];
  closingHeadline: string;
  waMessage: string;
  icon: LucideIcon;
  addOns?: string[];
  gallery?: { src: string; alt: string }[];
}

const WA_BASE = "https://wa.me/2348064551684?text=";
const CALL_LINK = "tel:+2348064551684";

export function ServicePageTemplate({
  title,
  subtitle,
  heroSubtext,
  whyItMatters,
  whatWeOffer,
  whatYouGet,
  howItWorks,
  faqs,
  closingHeadline,
  waMessage,
  icon: Icon,
  addOns,
  gallery,
}: ServicePageProps) {
  const waLink = WA_BASE + encodeURIComponent(waMessage);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>

        {/* Hero */}
        <section className="relative bg-primary text-primary-foreground pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-widest uppercase mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight size={14} />
                <Link href="/#services" className="hover:underline">Services</Link>
                <ChevronRight size={14} />
                <span>{title}</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <Icon size={32} className="text-white" strokeWidth={2} />
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight">{title}</h1>
              </div>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mb-10">{heroSubtext}</p>
              <div className="flex flex-wrap gap-4">
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg">
                  <MessageCircle size={20} />
                  Get a Quote on WhatsApp
                </a>
                <a href={CALL_LINK}
                  className="inline-flex items-center gap-2 bg-white/20 text-white font-bold px-7 py-4 rounded-full hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why It Matters */}
        {whyItMatters.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Why It Matters</h2>
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-6">{subtitle}</h3>
                <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                  {whyItMatters.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* What We Offer + What You Get */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {whatWeOffer.length > 0 && (
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h3 className="text-2xl font-display font-extrabold text-foreground mb-6">What We Offer</h3>
                  <ul className="space-y-3">
                    {whatWeOffer.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 size={20} className="text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {whatYouGet.length > 0 && (
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h3 className="text-2xl font-display font-extrabold text-foreground mb-6">What You Get</h3>
                  <ul className="space-y-3">
                    {whatYouGet.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle2 size={20} className="text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-8">See the Results</h3>
                <div className={`grid gap-4 ${gallery.length === 1 ? "grid-cols-1 max-w-2xl" : gallery.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {gallery.map((img, i) => (
                    <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3]">
                      <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Add-on Services */}
        {addOns && addOns.length > 0 && (
          <section className="py-16 bg-white border-t border-border">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Optional Extras</h2>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-2">Available Add-on Services</h3>
                <p className="text-muted-foreground mb-6">These services are available on request and priced separately. Just let us know when booking.</p>
                <ul className="flex flex-wrap gap-3">
                  {addOns.map((item) => (
                    <li key={item} className="flex items-center gap-2 bg-primary/5 border border-primary/20 text-foreground font-medium px-4 py-2.5 rounded-full">
                      <PlusCircle size={16} className="text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        )}

        {/* How It Works */}
        {howItWorks.length > 0 && (
          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">The Process</h2>
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">How It Works</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {howItWorks.map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-5 bg-muted/30 rounded-2xl p-6 border border-border">
                    <span className="text-3xl font-extrabold text-primary/20 leading-none">0{i + 1}</span>
                    <p className="text-foreground font-medium text-lg">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {faqs.length > 0 && (
          <section className="py-20 bg-muted/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">FAQs</h2>
                <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">Common Questions</h3>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                    <p className="font-bold text-foreground mb-2">{faq.q}</p>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold mb-4">{closingHeadline}</h3>
              <p className="text-primary-foreground/80 text-lg mb-8">Get in touch and we will take care of the rest.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={waLink} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-7 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg">
                  <MessageCircle size={20} />
                  Get a Quote on WhatsApp
                </a>
                <a href={CALL_LINK}
                  className="inline-flex items-center gap-2 bg-white/20 text-white font-bold px-7 py-4 rounded-full hover:bg-white/30 transition-colors">
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

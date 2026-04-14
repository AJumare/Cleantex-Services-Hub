import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const WA_LINK = "https://wa.me/2348064551684?text=" + encodeURIComponent("Hello Cleantex! I'd like a quote for Carpet & Upholstery cleaning. Please share more details.");
const CALL_LINK = "tel:+2348064551684";

const whatWeClean = [
  "Wall-to-wall carpets",
  "Rugs (all sizes)",
  "Sofas (fabric & some suede types)",
  "Dining chairs",
  "Office chairs",
  "Mattresses (optional add-on)",
];

const whatYouGet = [
  "Deep cleaning - not just surface washing",
  "Steam cleaning available as an add-on",
  "Stain treatment for tough spots",
  "Odour removal",
  "Allergen reduction",
  "Fast drying process",
  "Neat, professional handling of your space",
];

const howItWorks = [
  { step: "01", text: "Send us a message on WhatsApp" },
  { step: "02", text: "Share pictures or details of what needs cleaning" },
  { step: "03", text: "Receive a clear, no-obligation quote" },
  { step: "04", text: "We schedule and handle everything from there" },
];

const faqs = [
  {
    q: "How long does it take to dry?",
    a: "Our staff will leave the upholstery damp, not wet. It will be completely dry within 24 hours, plus or minus 8 hours, depending on the level of ventilation in the space.",
  },
  {
    q: "Will all stains come out?",
    a: "We treat all stains thoroughly, but results depend on how long they've been there and the fabric type. We'll always give you an honest assessment upfront.",
  },
  {
    q: "Do I need to move furniture beforehand?",
    a: "Our team can assist, but it's best to clear smaller items and breakables beforehand to help us work more efficiently.",
  },
  {
    q: "Is it safe for children and pets?",
    a: "Yes. We use eco-friendly, non-toxic cleaning agents that are safe for your family and pets once the fabric has dried.",
  },
];

const beforeAfterImages = [
  { src: "/images/carpet-before-after-1.jpg", alt: "Rug before and after deep cleaning" },
  { src: "/images/carpet-before-after-2.jpg", alt: "Chair upholstery before and after" },
  { src: "/images/carpet-before-after-3.jpg", alt: "Carpet before and after cleaning" },
  { src: "/images/carpet-chair-before-after.jpg", alt: "Dining chair before and after cleaning" },
];

export default function CarpetUpholsteryPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className="relative bg-primary text-primary-foreground pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center gap-2 text-accent text-sm font-bold tracking-widest uppercase mb-4">
                <Link href="/" className="hover:underline">Home</Link>
                <ChevronRight size={14} />
                <Link href="/#services" className="hover:underline">Services</Link>
                <ChevronRight size={14} />
                <span>Carpet & Upholstery</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6 leading-tight">
                Carpet & Upholstery<br className="hidden md:block" /> Cleaning
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-2xl mb-10">
                Deep cleaning for carpets, sofas, chairs and fabric surfaces. We remove stains, odours and hidden dirt - leaving your space fresh, clean and hygienic.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
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

        {/* ── Why This Matters ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Why It Matters</h2>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-6">
                Your fabrics are dirtier than they look
              </h3>
              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Your carpets and furniture trap dust, bacteria and odours over time - even when they look clean on the surface. In Abuja's climate, harmattan dust and humidity accelerate this build-up significantly.
                </p>
                <p>
                  At Cleantex, we go beyond surface cleaning. Our process penetrates deep into the fabric to remove what regular cleaning leaves behind - restoring hygiene, brightness and freshness to your space.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── What We Clean + What You Get ── */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h3 className="text-2xl font-display font-extrabold text-foreground mb-6">What We Clean</h3>
                <ul className="space-y-3">
                  {whatWeClean.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 size={20} className="text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <img src="/images/carpet-sofa-cleaning.jpg" alt="Cleantex technician cleaning a sofa" className="rounded-3xl w-full object-cover shadow-lg aspect-[4/3]" />
                </div>
              </motion.div>

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

                <div className="mt-10 bg-primary/5 border border-primary/10 rounded-3xl p-6">
                  <p className="text-sm font-bold tracking-widest uppercase text-primary mb-1">Before & After</p>
                  <p className="font-semibold text-foreground mb-1">The honest expectation</p>
                  <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                      <p className="font-bold text-red-700 mb-1">Before</p>
                      <p className="text-red-600">Stains, dull fabric, trapped odours and built-up grime</p>
                    </div>
                    <div className="bg-green-50 border border-green-100 rounded-xl p-3">
                      <p className="font-bold text-green-700 mb-1">After</p>
                      <p className="text-green-600">Cleaner, brighter fabric with a fresh smell and improved hygiene</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 italic">Results vary by fabric type and stain age. We'll always be upfront about what's achievable.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Before & After Gallery ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Work</h2>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">Real Results from Real Jobs</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {beforeAfterImages.map((img, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-md aspect-square">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">The Process</h2>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">How It Works</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {howItWorks.map((h, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-5 bg-muted/30 rounded-2xl p-6 border border-border">
                  <span className="text-3xl font-extrabold text-primary/20 leading-none">{h.step}</span>
                  <p className="text-foreground font-medium text-lg">{h.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
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

        {/* ── Closing CTA ── */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4">
                Ready to refresh your space?
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Get in touch today and we'll have your carpets and upholstery looking and smelling clean again.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-full hover:bg-primary/90 transition-colors shadow-lg">
                  <MessageCircle size={20} />
                  Get a Quote on WhatsApp
                </a>
                <a href={CALL_LINK}
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-7 py-4 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
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

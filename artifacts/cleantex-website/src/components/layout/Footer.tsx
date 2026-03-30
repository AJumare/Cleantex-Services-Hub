import { Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-flex mb-6 group">
              <img
                src="/images/cleantex-logo.png"
                alt="Cleantex Environmental Services Limited"
                className="h-20 w-auto object-contain brightness-0 invert group-hover:opacity-80 transition-opacity"
              />
            </a>
            <p className="text-white/60 mb-6 leading-relaxed">
              Delivering reliable, high-quality cleaning and pest control results for homes and businesses across Abuja, Nigeria.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/CleantexNigeria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/cleantexnigeria" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/2348064551684" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Carpet & Upholstery</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Fumigation & Pest Control</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Post-Construction</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Laundry Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>📍 No. 28 Liverpool Close, Suncity Estate, Abuja</li>
              <li><a href="tel:08064551684" className="hover:text-primary transition-colors">📞 08064551684</a></li>
              <li><a href="https://wa.me/2348064551684" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">💬 WhatsApp (24hrs): 08064551684</a></li>
              <li><a href="mailto:Cleantexnigeria@gmail.com" className="hover:text-primary transition-colors">✉️ Cleantexnigeria@gmail.com</a></li>
              <li>🕐 Mon–Fri: 8:30am – 4:30pm</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {currentYear} Cleantex Environmental Services Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

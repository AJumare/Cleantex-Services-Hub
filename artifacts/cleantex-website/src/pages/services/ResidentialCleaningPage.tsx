import { Home } from "lucide-react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function ResidentialCleaningPage() {
  return (
    <ServicePageTemplate
      title="Residential Cleaning"
      subtitle="A consistently clean home, on your schedule"
      heroSubtext="Regular cleaning for homes across Abuja. Daily, weekly or monthly schedules available. We keep your personal space consistently spotless so you do not have to."
      icon={Home}
      whyItMatters={[
        "A clean home is not just about appearances. Research consistently links a clean living environment to better health, reduced stress and improved sleep. In Abuja, where harmattan dust and humidity create year-round challenges, regular professional cleaning makes a real difference.",
        "Our residential cleaning service is designed to fit around your life. You set the schedule, and we deliver a consistently clean home every time.",
      ]}
      whatWeOffer={[
        "Living room cleaning and dusting",
        "Kitchen cleaning (surfaces, appliances and sink)",
        "Bathroom and toilet cleaning",
        "Bedroom tidying and dusting",
        "Floor sweeping, mopping and vacuuming",
        "Bin emptying",
        "Window wiping (interior)",
      ]}
      whatYouGet={[
        "Reliable, punctual service",
        "Trained and background-checked staff",
        "Consistent team for your home",
        "Flexible scheduling",
        "Eco-friendly cleaning products",
      ]}
      howItWorks={[
        "Contact us to discuss your home and cleaning needs",
        "We agree a schedule and frequency that works for you",
        "Our team arrives on time and cleans to our full standard",
        "You come home to a clean, fresh space every time",
      ]}
      faqs={[
        { q: "Can I request the same cleaner each visit?", a: "Yes. We aim to assign a consistent team to your home so they become familiar with your preferences and space." },
        { q: "What if I need to reschedule?", a: "We are flexible. Just let us know in advance and we will find an alternative time that works for you." },
        { q: "Do I need to supply cleaning products?", a: "No. Our team arrives fully equipped with all products and materials required." },
      ]}
      closingHeadline="Come home to a clean house every time"
      waMessage="Hello Cleantex! I'd like to enquire about your Residential Cleaning service. Please share more details."
    />
  );
}

import { Shirt } from "lucide-react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function LaundryPage() {
  return (
    <ServicePageTemplate
      title="Laundry Services"
      subtitle="Professional care for your clothes, curtains, duvets and linens"
      heroSubtext="Washing, drying, ironing and folding handled with premium care. We take on the items your home machine cannot - heavy curtains, thick duvets and large household linens included."
      icon={Shirt}
      whyItMatters={[
        "Heavy fabrics like curtains and duvets require industrial machines to wash and dry thoroughly. A domestic machine often leaves residual moisture and detergent trapped in the fabric, leading to musty smells and fabric damage over time.",
        "At Cleantex, we use large-capacity commercial washers and industrial dryers to handle all fabric types correctly - giving you a truly clean result with every wash.",
      ]}
      whatWeOffer={[
        "Everyday clothing (wash, dry and fold)",
        "Ironing and pressing",
        "Curtains and drapes",
        "Duvets and comforters",
        "Bedsheets and pillowcases",
        "Towels and bathroom linens",
        "Uniforms and workwear",
      ]}
      whatYouGet={[
        "Commercial-grade washing and drying",
        "Stain pre-treatment",
        "Care label checked for every item",
        "Neat folding or hanging",
        "Pick-up and drop-off available (select areas)",
      ]}
      howItWorks={[
        "Contact us on WhatsApp with details of what needs washing",
        "Arrange drop-off or pick-up",
        "We wash, dry, iron and fold",
        "Your items are returned clean and ready to use",
      ]}
      faqs={[
        { q: "Do you offer pick-up and delivery?", a: "Pick-up and delivery is available in select areas of Abuja. Contact us to confirm coverage for your location." },
        { q: "How long does it take?", a: "Standard turnaround is 24 to 48 hours depending on volume. Express options may be available - ask when you contact us." },
        { q: "Can you handle delicate fabrics?", a: "Yes. We check care labels on every item before washing and handle delicate fabrics with appropriate settings and products." },
      ]}
      closingHeadline="Hand it over. We will handle the rest."
      waMessage="Hello Cleantex! I'd like to enquire about your Laundry Services. Please share more details."
    />
  );
}

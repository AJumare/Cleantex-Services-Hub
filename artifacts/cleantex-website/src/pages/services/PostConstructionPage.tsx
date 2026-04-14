import { HardHat } from "lucide-react";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

export default function PostConstructionPage() {
  return (
    <ServicePageTemplate
      title="Post-Construction Cleaning"
      subtitle="Get your new space truly ready before you move in"
      heroSubtext="Specialist cleaning after construction or renovation. We remove dust, debris, paint splatter and construction residue so your space is ready for use."
      icon={HardHat}
      whyItMatters={[
        "Construction dust is far finer than ordinary household dust and can take weeks to fully settle. Paint splatters, cement residue, sawdust and debris are left on surfaces that look clean at a glance but are far from it.",
        "Professional post-construction cleaning ensures every surface - from ceiling fittings to floor grout - is properly prepared before you move in or hand over the property.",
      ]}
      whatWeOffer={[
        "Dust removal from all surfaces",
        "Paint and cement residue removal",
        "Window and glass cleaning",
        "Floor scrubbing",
        "Fixture and fitting cleaning",
        "Kitchen and bathroom preparation",
        "Waste and debris removal",
      ]}
      addOns={[
        "Floor polishing",
      ]}
      whatYouGet={[
        "Specialist equipment for construction dust",
        "Safe removal of chemical residues",
        "Move-in ready finish",
        "Trained, experienced team",
        "Full property coverage",
      ]}
      howItWorks={[
        "Contact us with details of your property and the scope of work",
        "We inspect or assess remotely and provide a quote",
        "Cleaning is scheduled once all trades have finished",
        "We deliver a move-in ready space",
      ]}
      faqs={[
        { q: "When should post-construction cleaning be done?", a: "Ideally after all trades (painters, tilers, electricians) have finished but before furniture is moved in. This allows full access to every surface." },
        { q: "Can you clean large commercial properties?", a: "Yes. We handle residential and commercial post-construction cleans of all sizes." },
        { q: "How long does it take?", a: "This depends on the size of the property and the extent of construction work. We will give a time estimate after assessing the space." },
      ]}
      closingHeadline="Your space, move-in ready"
      waMessage="Hello Cleantex! I'd like to enquire about your Post-Construction Cleaning service. Please share more details."
    />
  );
}

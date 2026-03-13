import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";
import { toast } from "sonner";

const categories = [
  "General Enquiry",
  "Volunteer Interest",
  "Event Participation",
  "Partnership / Sponsorship",
  "Media Enquiry",
  "Membership",
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been received. We'll be in touch soon.");
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container-editorial">
          <ScrollReveal>
            <SectionLabel english="Contact" tamil="தொடர்பு" />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight max-w-3xl">
              Let's Connect
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              Whether you have a question, a proposal, or simply want to say hello — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-body"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-body"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary font-body resize-none"
                    placeholder="Tell us more..."
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3 bg-primary text-primary-foreground font-body font-medium text-sm rounded-sm transition-all hover:opacity-90"
                >
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Email</p>
                        <p className="text-sm">info@singaporetamilsociety.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Phone</p>
                        <p className="text-sm">+65 6123 4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Address</p>
                        <p className="text-sm">Singapore</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="heritage-divider" />

                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">Office Hours</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p>Saturday: 10:00 AM – 2:00 PM</p>
                    <p>Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

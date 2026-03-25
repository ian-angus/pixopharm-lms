import { useState } from "react";
import { courses, catalogStats } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import CoursePlayer from "@/components/CoursePlayer";
import AuthModal from "@/components/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import "./App.css";

/* ─── Generated Images ─── */
import heroImg from "@/assets/generated/hero.png";
import aboutClassroomImg from "@/assets/generated/about-classroom.png";
import courseDispensingImg from "@/assets/generated/course-dispensing.png";
import courseAiImg from "@/assets/generated/course-ai.png";
import caribbeanAerialImg from "@/assets/generated/caribbean-aerial.png";
// logo-concept.png available at @/assets/generated/logo-concept.png

/* ─── SVG Logo ─── */
function PixopharmLogo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} className={className} fill="none">
      <rect width="40" height="40" rx="8" fill="hsl(174 62% 32%)" />
      <path d="M12 28 L12 14 L20 10 L28 14 L28 22 L20 26 L12 22" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M20 10 L20 26" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <path d="M12 14 L28 14" stroke="white" strokeWidth="1" opacity="0.4" />
      <circle cx="20" cy="18" r="3" fill="white" opacity="0.9" />
      <path d="M18.5 17 L19.5 19 L21.5 16.5" stroke="hsl(174 62% 32%)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 30 L16 28 L18 30" stroke="white" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Icon components (inline SVGs to avoid Lucide bundle) ─── */
function IconGradCap() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10l-10-5L2 10l10 5 10-5zM6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /><path d="M22 10v6" /></svg>;
}
function IconCalculator() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 14h2M14 14h2M8 18h2M14 18h2M8 10h8" /></svg>;
}
function IconPill() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.5 1.5l-8 8a4.95 4.95 0 007 7l8-8a4.95 4.95 0 00-7-7zM9 9l6 6" /></svg>;
}
function IconHeart() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 0112 6.006a5 5 0 017.5 6.566z" /><path d="M4.5 12h3l2 3 4-6 2 3h3" /></svg>;
}
function IconScale() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 7l3 9a5.002 5.002 0 006 0l3-9M15 7l3 9a5.002 5.002 0 006 0l3-9" /><path d="M12 3l9 4M12 3L3 7" /></svg>;
}
function IconBrain() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 00-4 4v1a3 3 0 00-3 3v1a3 3 0 003 3h1v3a3 3 0 006 0v-3h1a3 3 0 003-3v-1a3 3 0 00-3-3V6a4 4 0 00-4-4z" /><circle cx="10" cy="8" r="1" fill="currentColor" /><circle cx="14" cy="8" r="1" fill="currentColor" /></svg>;
}
function IconChat() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>;
}
function IconShield() {
  return <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>;
}

const courseIcons: Record<string, () => React.JSX.Element> = {
  GraduationCap: IconGradCap,
  Calculator: IconCalculator,
  Pill: IconPill,
  HeartPulse: IconHeart,
  Scale: IconScale,
  BrainCircuit: IconBrain,
  MessageCircleHeart: IconChat,
  ShieldCheck: IconShield,
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
};

/* ─── Course Image Mapping ─── */
const courseImages: Record<string, string> = {
  "foundations-pharmacy-practice": courseDispensingImg,
  "ai-in-pharmacy-practice": courseAiImg,
};

const iconBgMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  emerald: "bg-emerald-100 text-emerald-600",
  violet: "bg-violet-100 text-violet-600",
  rose: "bg-rose-100 text-rose-600",
  amber: "bg-amber-100 text-amber-600",
  cyan: "bg-cyan-100 text-cyan-600",
  teal: "bg-teal-100 text-teal-600",
  orange: "bg-orange-100 text-orange-600",
};

/* ─── Testimonial Data ─── */
const testimonials = [
  {
    name: "Keisha Williams",
    role: "Pharmacy Technician, Kingston",
    country: "Jamaica",
    quote: "PIXOPHARM gave me the confidence to pass my certification on the first try. The Caribbean-specific content on tropical disease medications was exactly what I needed.",
    avatar: "KW",
  },
  {
    name: "Rajesh Doobay",
    role: "Lead Technician, Queen's Park",
    country: "Trinidad & Tobago",
    quote: "The AI in Pharmacy course opened my eyes to how technology can improve our daily workflow. I've already implemented inventory forecasting at our pharmacy.",
    avatar: "RD",
  },
  {
    name: "Marie-Claire Desrosiers",
    role: "Community Pharmacist",
    country: "Haiti",
    quote: "The multilingual communication module was invaluable. I now counsel patients more effectively in Creole and French. Truly designed for the Caribbean.",
    avatar: "MD",
  },
  {
    name: "Dwayne Archer",
    role: "Hospital Pharmacy Supervisor",
    country: "Barbados",
    quote: "We enrolled our entire team in the Quality Assurance track. Medication errors dropped 40% in six months. The ROI speaks for itself.",
    avatar: "DA",
  },
];

/* ─── FAQ Data ─── */
const faqs = [
  {
    q: "Who are PIXOPHARM courses designed for?",
    a: "Our courses are designed for aspiring and practicing pharmacy technicians across the Caribbean. Whether you're just starting your career, upgrading your skills, or exploring AI applications in pharmacy, we have a track for you. All content is localized for CARICOM pharmaceutical standards and Caribbean healthcare systems.",
  },
  {
    q: "Are the certifications recognized across the Caribbean?",
    a: "PIXOPHARM certificates are aligned with CARICOM pharmaceutical standards and the Caribbean Regulatory System (CRS). Our curriculum maps to the competency frameworks used by national pharmacy boards in Jamaica, Trinidad & Tobago, Barbados, Bahamas, Guyana, and other Caribbean states. We're actively working with CAP (Caribbean Association of Pharmacists) for formal accreditation.",
  },
  {
    q: "How long does it take to complete the full program?",
    a: `The complete 8-course program spans ${catalogStats.totalWeeks} weeks of content. However, courses are self-paced, so you can take longer if needed. Most students complete individual courses within the listed timeframe when studying 8-10 hours per week. You can also take courses individually rather than completing the full program.`,
  },
  {
    q: "Can I access courses on my phone or tablet?",
    a: "Yes. The PIXOPHARM platform is fully responsive and works on smartphones, tablets, and desktop computers. This is especially important for learners in the Caribbean who may primarily access content via mobile devices. All video content can be downloaded for offline viewing.",
  },
  {
    q: "What makes PIXOPHARM different from US-based pharmacy training?",
    a: "Unlike US-focused programs, PIXOPHARM covers Caribbean drug laws, CARICOM regulations, tropical disease pharmacotherapy, Caribbean supply chain challenges, and multilingual patient communication (English, Spanish, French, Creole). Our case studies and scenarios reflect real Caribbean pharmacy settings.",
  },
  {
    q: "Do drug classifications really differ between Caribbean islands?",
    a: "Yes — significantly. Each Caribbean nation maintains its own pharmacy act and drug schedules independently. For example, codeine-containing compounds are available behind the counter in Trinidad & Tobago but are strictly prescription-only in Jamaica. Emergency contraception is OTC in Barbados but requires a prescription in the Bahamas. Even common medications like salbutamol inhalers have different classifications across islands. PIXOPHARM's Island Regulatory Navigator teaches these critical differences drug-by-drug.",
  },
  {
    q: "What if I plan to work on a different island than where I trained?",
    a: "This is exactly why PIXOPHARM exists. Our Caribbean Pharmaceutical Regulations course covers the regulatory frameworks of all major Caribbean states, highlighting the differences in drug scheduling, dispensing requirements, and controlled substance rules. You'll learn how to identify and adapt to the specific regulations of any island you practice on — whether that's Jamaica's Pharmacy Act, Trinidad's Pharmacy Board rules, or Barbados's Drug Service requirements.",
  },
  {
    q: "Do you offer group rates for pharmacy chains or hospitals?",
    a: "Yes. Our Enterprise plan includes volume licensing, custom branding, and dedicated support. Contact us for a tailored quote. We also offer special rates for Caribbean government health ministries and public hospital systems.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a 14-day money-back guarantee on all plans. If you're not satisfied with the quality of our content, contact support for a full refund. No questions asked.",
  },
];

/* ─── Pricing Data ─── */
const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individual learners beginning their pharmacy career",
    features: [
      "Access to 2 Foundation courses",
      "Self-paced learning",
      "Course completion certificates",
      "Mobile-friendly access",
      "Community forum access",
      "Email support",
    ],
    cta: "Start Learning",
    popular: false,
  },
  {
    name: "Professional",
    price: "$59",
    period: "/month",
    description: "Full access for serious pharmacy professionals",
    features: [
      "All 8 courses included",
      "Island Regulatory Navigator tool",
      "Drug scheduling comparison database",
      "AI in Pharmacy Practice module",
      "Practice exams & quizzes",
      "Certificate of completion",
      "Priority email & chat support",
      "Offline video downloads",
    ],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For pharmacy chains, hospitals & government health programs",
    features: [
      "Everything in Professional",
      "Volume licensing (10+ seats)",
      "Admin dashboard & reporting",
      "Custom course builder",
      "White-label branding",
      "Dedicated account manager",
      "API access & LMS integration",
      "On-site training workshops",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

/* ─── Navigation ─── */
function Navbar({ user, onSignInClick, onSignOut }: {
  user: { email?: string; user_metadata?: { full_name?: string } } | null;
  onSignInClick: () => void;
  onSignOut: () => void;
}) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Regulations", href: "#regulations" },
    { label: "Courses", href: "#courses" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <PixopharmLogo size={34} />
            <span className="text-lg tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              <span className="text-[hsl(213,50%,16%)]">PIXO</span>
              <span className="text-[hsl(174,62%,32%)]">PHARM</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-[hsl(174,62%,32%)] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="ml-3 flex gap-2">
              {user ? (
                <>
                  <span className="text-sm text-slate-600 flex items-center gap-1.5 px-2">
                    <span className="w-6 h-6 rounded-full bg-[hsl(174,62%,32%)] text-white flex items-center justify-center text-xs font-bold">
                      {(user.user_metadata?.full_name || user.email || "U")[0].toUpperCase()}
                    </span>
                    <span className="max-w-[120px] truncate">{user.user_metadata?.full_name || user.email}</span>
                  </span>
                  <Button variant="ghost" size="sm" className="text-sm" onClick={onSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" className="text-sm" onClick={onSignInClick}>
                    Sign In
                  </Button>
                  <Button size="sm" className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] text-sm" onClick={onSignInClick}>
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm text-slate-600 hover:text-[hsl(174,62%,32%)]">
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex gap-2 px-3">
              <Button variant="outline" size="sm" className="flex-1">Sign In</Button>
              <Button size="sm" className="flex-1 bg-[hsl(174,62%,32%)]">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center hero-gradient overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      {/* Floating shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-[hsl(174,60%,45%)] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-white rounded-full opacity-[0.04] blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-white/10 text-white/90 border-white/20 hover:bg-white/15 font-medium text-xs tracking-wide px-3 py-1">
              Caribbean's First Pharmacy Technician LMS
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.12] font-bold text-white mb-6 text-balance">
              Every Island.<br />
              <span className="text-[hsl(174,70%,70%)]">Every Regulation.</span><br />
              One Platform.
            </h1>
            <p className="text-lg text-white/75 mb-8 max-w-lg leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Pharmacy laws change at every border in the Caribbean. What's over-the-counter in Trinidad may require a prescription in Jamaica. {catalogStats.totalCourses} courses and {catalogStats.totalModules} modules built to navigate every island's unique regulatory landscape.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-[hsl(213,50%,16%)] hover:bg-white/90 font-semibold shadow-lg shadow-black/10 h-12 px-7">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 h-12 px-7">
                View Courses
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-white/60 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-[hsl(174,70%,70%)]"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                CARICOM Aligned
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-[hsl(174,70%,70%)]"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                Self-Paced
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 20 20" className="w-4 h-4 fill-[hsl(174,70%,70%)]"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                AI-Enhanced
              </span>
            </div>
          </div>
          {/* Hero visual — pharmacy image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[480px]">
              <img
                src={heroImg}
                alt="Caribbean pharmacy professionals"
                className="rounded-2xl shadow-2xl shadow-black/20 border border-white/10 w-full"
              />
              {/* Floating notification */}
              <div className="absolute -right-4 top-8 bg-white rounded-xl shadow-2xl px-4 py-3 flex items-center gap-3 animate-pulse">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 text-sm">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-800">Module Complete!</div>
                  <div className="text-[10px] text-slate-500">Pharmaceutical Calculations</div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -left-4 bottom-12 bg-white rounded-xl shadow-2xl px-4 py-3">
                <div className="text-[10px] text-slate-500 mb-1">Next Milestone</div>
                <div className="text-xs font-semibold text-slate-800">CARICOM Certification Ready</div>
                <div className="flex mt-2 -space-x-1">
                  {["bg-teal-400", "bg-blue-400", "bg-violet-400", "bg-rose-400"].map((c, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-white`} />
                  ))}
                  <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] text-slate-600">+5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const stats = [
    { value: "500+", label: "Graduates" },
    { value: "15", label: "Caribbean Nations" },
    { value: catalogStats.totalCourses.toString(), label: "Expert Courses" },
    { value: catalogStats.totalModules.toString(), label: "Learning Modules" },
    { value: "98%", label: "Pass Rate" },
  ];
  return (
    <section className="relative -mt-1 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[hsl(213,50%,16%)]">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4 text-[hsl(174,62%,32%)] border-[hsl(174,62%,32%)]/30 bg-[hsl(174,45%,96%)]">
              About PIXOPHARM
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,50%,16%)] mb-6 leading-tight">
              Built for the Caribbean.<br />
              By Caribbean Pharmacists.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <p>
                The Caribbean faces a critical shortage of trained pharmacy technicians — with up to 50% of skilled positions unfilled in some Eastern Caribbean states. But the challenge goes deeper than numbers: <strong className="text-slate-800">every island nation has its own pharmacy act, drug schedules, and dispensing rules.</strong>
              </p>
              <p>
                A codeine compound sold over-the-counter in Trinidad requires a prescription in Jamaica. Emergency contraception is freely available in Barbados but restricted in the Bahamas. Certain antibiotics dispensed without a script in Guyana are strictly prescription-only in St. Lucia. <strong className="text-slate-800">One wrong assumption can mean a compliance violation — or worse, patient harm.</strong>
              </p>
              <p>
                PIXOPHARM is the first training platform that teaches you the regulatory reality of <em>your</em> island while showing you how it differs from the rest of the region. From Jamaica's Pharmacy Act to Trinidad's Pharmacy Board regulations, we prepare you for practice wherever you work in the Caribbean.
              </p>
            </div>
            {/* Regulatory callout */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /></svg>
              <div className="text-sm text-amber-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <strong>Did you know?</strong> There is no single Caribbean-wide drug scheduling system. Each island classifies medications independently, meaning a pharmacy technician moving between islands must re-learn local regulations to remain compliant.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { icon: "⚖️", text: "Island-specific regulatory training" },
                { icon: "🏥", text: "Aligned with CARPHA & CRS standards" },
                { icon: "🌴", text: "Caribbean-specific case studies" },
                { icon: "🤖", text: "AI-ready pharmacy training" },
                { icon: "🌐", text: "Multilingual support" },
                { icon: "📋", text: "Drug scheduling comparison tools" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <span className="text-sm text-slate-700" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* About visual */}
          <div className="relative">
            <img
              src={aboutClassroomImg}
              alt="Caribbean pharmacy training classroom"
              className="rounded-2xl shadow-lg w-full mb-6"
            />
            <div className="bg-gradient-to-br from-[hsl(174,45%,92%)] to-[hsl(210,20%,96%)] rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-[hsl(174,62%,32%)]">15+</div>
                  <div className="text-xs text-slate-600 mt-1">Islands Served</div>
                  <div className="mt-2 flex justify-center gap-1">
                    {["🇯🇲", "🇹🇹", "🇧🇧", "🇧🇸", "🇬🇾"].map((f) => (
                      <span key={f} className="text-sm">{f}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-[hsl(213,50%,16%)]">{catalogStats.totalWeeks}</div>
                  <div className="text-xs text-slate-600 mt-1">Weeks of Content</div>
                  <Progress value={75} className="mt-2 h-2" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-bold text-[hsl(174,62%,32%)]">3</div>
                  <div className="text-xs text-slate-600 mt-1">Skill Levels</div>
                  <div className="flex justify-center gap-1 mt-2">
                    {["bg-emerald-500", "bg-blue-500", "bg-violet-500"].map((c) => (
                      <div key={c} className={`w-3 h-3 rounded-full ${c}`} />
                    ))}
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

/* ─── Island Regulatory Navigator ─── */
type DrugStatus = "OTC" | "Rx" | "Restricted" | "Controlled" | "Behind Counter";

interface DrugRule {
  drug: string;
  category: string;
  islands: Record<string, { status: DrugStatus; note?: string }>;
}

const drugRules: DrugRule[] = [
  {
    drug: "Codeine Compounds",
    category: "Analgesic",
    islands: {
      Jamaica: { status: "Rx", note: "Schedule 3 — prescription only since 2018 reclassification" },
      "Trinidad & Tobago": { status: "Behind Counter", note: "Low-dose combinations (8mg) available behind counter with pharmacist consultation" },
      Barbados: { status: "Rx", note: "All codeine products require valid prescription" },
      Bahamas: { status: "Rx", note: "Classified as prescription-only under Dangerous Drugs Act" },
      Guyana: { status: "Behind Counter", note: "Low-dose combinations available with pharmacist advice; records required" },
      "St. Lucia": { status: "Rx", note: "Prescription required under Pharmacy Act" },
    },
  },
  {
    drug: "Emergency Contraception",
    category: "Reproductive Health",
    islands: {
      Jamaica: { status: "Rx", note: "Requires prescription from registered medical practitioner" },
      "Trinidad & Tobago": { status: "OTC", note: "Available without prescription at pharmacies" },
      Barbados: { status: "OTC", note: "Freely available over-the-counter since 2015" },
      Bahamas: { status: "Rx", note: "Prescription required; limited availability on outer islands" },
      Guyana: { status: "Rx", note: "Prescription required" },
      "St. Lucia": { status: "OTC", note: "Available OTC at registered pharmacies" },
    },
  },
  {
    drug: "Amoxicillin",
    category: "Antibiotic",
    islands: {
      Jamaica: { status: "Rx", note: "Prescription-only under Pharmacy Act; strictly enforced" },
      "Trinidad & Tobago": { status: "Rx", note: "Prescription required; antimicrobial stewardship program active" },
      Barbados: { status: "Rx", note: "Prescription-only; part of national AMR strategy" },
      Bahamas: { status: "Rx", note: "Prescription required at all licensed pharmacies" },
      Guyana: { status: "Behind Counter", note: "Often dispensed with pharmacist consultation in rural areas; technically Rx" },
      "St. Lucia": { status: "Rx", note: "Prescription required" },
    },
  },
  {
    drug: "Salbutamol Inhaler",
    category: "Respiratory",
    islands: {
      Jamaica: { status: "OTC", note: "Available without prescription for known asthmatics" },
      "Trinidad & Tobago": { status: "OTC", note: "Freely available over-the-counter" },
      Barbados: { status: "Rx", note: "Reclassified to prescription-only in 2020" },
      Bahamas: { status: "OTC", note: "Available OTC with pharmacist guidance" },
      Guyana: { status: "OTC", note: "Available over-the-counter" },
      "St. Lucia": { status: "OTC", note: "Available without prescription" },
    },
  },
  {
    drug: "Pseudoephedrine Products",
    category: "Decongestant",
    islands: {
      Jamaica: { status: "Restricted", note: "Behind-counter with ID recording; precursor monitoring" },
      "Trinidad & Tobago": { status: "OTC", note: "Available over-the-counter; quantity limits may apply" },
      Barbados: { status: "Restricted", note: "Requires ID and pharmacist record; precursor control" },
      Bahamas: { status: "Restricted", note: "Behind-counter with purchase records maintained" },
      Guyana: { status: "OTC", note: "Available over-the-counter" },
      "St. Lucia": { status: "Restricted", note: "Behind-counter; monitored under precursor regulations" },
    },
  },
  {
    drug: "Oral Contraceptives",
    category: "Reproductive Health",
    islands: {
      Jamaica: { status: "Rx", note: "Prescription required from physician or nurse practitioner" },
      "Trinidad & Tobago": { status: "Rx", note: "Prescription-only; available at family planning clinics" },
      Barbados: { status: "OTC", note: "Available without prescription at registered pharmacies" },
      Bahamas: { status: "Rx", note: "Prescription required" },
      Guyana: { status: "OTC", note: "Available without prescription; part of reproductive health initiative" },
      "St. Lucia": { status: "Rx", note: "Prescription required from licensed practitioner" },
    },
  },
  {
    drug: "Hydrocortisone 1% Cream",
    category: "Dermatological",
    islands: {
      Jamaica: { status: "OTC", note: "Low-strength topical available without prescription" },
      "Trinidad & Tobago": { status: "OTC", note: "Available over-the-counter" },
      Barbados: { status: "OTC", note: "Available without prescription" },
      Bahamas: { status: "Rx", note: "All corticosteroids require prescription" },
      Guyana: { status: "OTC", note: "Available over-the-counter" },
      "St. Lucia": { status: "OTC", note: "Available without prescription for short-term use" },
    },
  },
];

const statusColors: Record<DrugStatus, { bg: string; text: string; label: string }> = {
  OTC: { bg: "bg-emerald-100", text: "text-emerald-800", label: "OTC" },
  Rx: { bg: "bg-blue-100", text: "text-blue-800", label: "Rx Only" },
  Restricted: { bg: "bg-amber-100", text: "text-amber-800", label: "Restricted" },
  Controlled: { bg: "bg-red-100", text: "text-red-800", label: "Controlled" },
  "Behind Counter": { bg: "bg-violet-100", text: "text-violet-800", label: "Behind Counter" },
};

const islandFlags: Record<string, string> = {
  Jamaica: "🇯🇲",
  "Trinidad & Tobago": "🇹🇹",
  Barbados: "🇧🇧",
  Bahamas: "🇧🇸",
  Guyana: "🇬🇾",
  "St. Lucia": "🇱🇨",
};

const islands = Object.keys(islandFlags);

function RegulatoryNavigator() {
  const [selectedDrug, setSelectedDrug] = useState(0);
  const [selectedIsland, setSelectedIsland] = useState<string | null>(null);
  const drug = drugRules[selectedDrug];

  return (
    <section id="regulations" className="py-20 lg:py-28 bg-[hsl(213,50%,16%)] relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
            Why This Matters
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            One Drug. Six Islands.<br />
            <span className="text-[hsl(174,70%,70%)]">Six Different Rules.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Each Caribbean nation maintains its own pharmacy act, drug schedules, and dispensing regulations. A medication freely sold over-the-counter on one island may be prescription-only, restricted, or even controlled on the next. PIXOPHARM teaches you to navigate every jurisdiction with confidence.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Drug selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {drugRules.map((d, i) => (
              <button
                key={d.drug}
                onClick={() => { setSelectedDrug(i); setSelectedIsland(null); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDrug === i
                    ? "bg-[hsl(174,62%,32%)] text-white shadow-lg"
                    : "bg-white/10 text-white/70 hover:bg-white/15 hover:text-white"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {d.drug}
              </button>
            ))}
          </div>

          {/* Category label */}
          <div className="text-center mb-6">
            <Badge variant="outline" className="text-white/50 border-white/20 text-xs">
              Category: {drug.category}
            </Badge>
          </div>

          {/* Island comparison grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {islands.map((island) => {
              const rule = drug.islands[island];
              const sc = statusColors[rule.status];
              const isSelected = selectedIsland === island;
              return (
                <button
                  key={island}
                  onClick={() => setSelectedIsland(isSelected ? null : island)}
                  className={`text-left rounded-xl p-5 transition-all border ${
                    isSelected
                      ? "bg-white/15 border-[hsl(174,62%,32%)] shadow-lg shadow-[hsl(174,62%,32%)]/20"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{islandFlags[island]}</span>
                      <span className="text-white font-semibold text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{island}</span>
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${sc.bg} ${sc.text}`}>
                      {sc.label}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {rule.note}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Key insight callout */}
          <div className="bg-gradient-to-r from-[hsl(174,62%,32%)]/20 to-transparent rounded-xl border border-[hsl(174,62%,32%)]/30 p-6 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[hsl(174,62%,32%)] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Why PIXOPHARM Covers Every Island Independently</h4>
              <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Unlike US or UK training that assumes a single regulatory framework, Caribbean pharmacy practice requires understanding <strong className="text-white/80">{islands.length} distinct legal systems</strong> — each with its own pharmacy act, drug scheduling, controlled substance rules, and dispensing requirements. Our courses break down these differences drug-by-drug and island-by-island, so you never make a compliance mistake when you move between jurisdictions or serve patients from different islands.
              </p>
            </div>
          </div>

          {/* Status legend */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {Object.entries(statusColors).map(([status, sc]) => (
              <div key={status} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${sc.bg}`} />
                <span className="text-[11px] text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>{sc.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Courses ─── */
function Courses({ onStartCourse }: { onStartCourse?: (courseId: string) => void }) {
  const [filter, setFilter] = useState<string>("All");
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  const filtered = filter === "All" ? courses : courses.filter((c) => c.skillLevel === filter);

  return (
    <section id="courses" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[hsl(174,62%,32%)] border-[hsl(174,62%,32%)]/30 bg-white">
            Course Catalog
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,50%,16%)] mb-4">
            {catalogStats.totalCourses} Courses. {catalogStats.totalModules} Modules. One Mission.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Comprehensive pharmacy technician training built for the Caribbean healthcare landscape. From foundational skills to AI-powered pharmacy practice.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
            {["All", "Beginner", "Intermediate", "Advanced"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-[hsl(174,62%,32%)] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((course) => {
            const IconComp = courseIcons[course.icon] || IconGradCap;
            return (
              <Card
                key={course.id}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-slate-200/80 hover:border-[hsl(174,62%,32%)]/30 bg-white"
                onClick={() => setSelectedCourse(course)}
              >
                {courseImages[course.id] && (
                  <div className="overflow-hidden rounded-t-lg -mx-[1px] -mt-[1px]">
                    <img
                      src={courseImages[course.id]}
                      alt={course.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 ${iconBgMap[course.color]}`}>
                    <IconComp />
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="outline" className={`text-[10px] px-2 py-0 ${colorMap[course.color]}`}>
                      {course.skillLevel}
                    </Badge>
                    <span className="text-[10px] text-slate-400">{course.durationWeeks} weeks</span>
                  </div>
                  <CardTitle className="text-base leading-snug group-hover:text-[hsl(174,62%,32%)] transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-xs leading-relaxed line-clamp-3">
                    {course.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center justify-between w-full text-xs text-slate-500">
                    <span>{course.modules.length} modules</span>
                    <span className="text-[hsl(174,62%,32%)] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View details →
                    </span>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Course detail dialog */}
        <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            {selectedCourse && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className={colorMap[selectedCourse.color]}>{selectedCourse.skillLevel}</Badge>
                    <span className="text-sm text-slate-500">{selectedCourse.durationWeeks} weeks · {selectedCourse.modules.length} modules</span>
                  </div>
                  <DialogTitle className="text-2xl">{selectedCourse.title}</DialogTitle>
                </DialogHeader>
                <p className="text-slate-600 mt-2 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {selectedCourse.description}
                </p>
                <Separator className="my-4" />
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-800 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>What You'll Learn</h4>
                  <ul className="space-y-2">
                    {selectedCourse.whatYoullLearn.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg viewBox="0 0 20 20" className="w-4 h-4 mt-0.5 fill-[hsl(174,62%,32%)] shrink-0"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Course Modules</h4>
                  <ol className="space-y-2">
                    {selectedCourse.modules.map((mod, i) => (
                      <li key={mod} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-500 shrink-0">
                          {i + 1}
                        </span>
                        {mod}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="mt-6">
                  {selectedCourse.id === "foundations-pharmacy-practice" && onStartCourse ? (
                    <Button
                      className="w-full bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]"
                      onClick={() => {
                        setSelectedCourse(null);
                        onStartCourse(selectedCourse.id);
                      }}
                    >
                      Start Course →
                    </Button>
                  ) : (
                    <Button className="w-full bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">
                      Enroll in This Course
                    </Button>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */
function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4 text-[hsl(174,62%,32%)] border-[hsl(174,62%,32%)]/30 bg-[hsl(174,45%,96%)]">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,50%,16%)] mb-4">
            Invest in Your Pharmacy Career
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Flexible plans designed for individual learners, teams, and institutions across the Caribbean.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-[hsl(174,62%,32%)] shadow-xl shadow-[hsl(174,62%,32%)]/10 scale-[1.03]"
                  : "border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[hsl(174,62%,32%)] text-white shadow-md">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription className="text-xs">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[hsl(213,50%,16%)]">{plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg viewBox="0 0 20 20" className="w-4 h-4 mt-0.5 fill-[hsl(174,62%,32%)] shrink-0"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ─── */
function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H24v-2zm0 4h20v2H24v-2zm0 4h20v2H24v-2zm0 4h20v2H24v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-white/10 text-white/90 border-white/20">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted Across the Caribbean
          </h2>
          <p className="text-white/70 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Hear from pharmacy professionals who've advanced their careers with PIXOPHARM.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <Card key={t.name} className="bg-white/10 backdrop-blur-sm border-white/15 text-white">
              <CardContent className="pt-6">
                <svg viewBox="0 0 24 24" className="w-8 h-8 mb-4 text-[hsl(174,70%,70%)] opacity-50" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4.017v10H0z" />
                </svg>
                <p className="text-sm text-white/80 leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(174,62%,32%)] flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}, {t.country}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[hsl(174,62%,32%)] border-[hsl(174,62%,32%)]/30 bg-[hsl(174,45%,96%)]">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,50%,16%)] mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-slate-50 rounded-lg border border-slate-200/80 px-5">
              <AccordionTrigger className="text-left text-sm font-medium text-slate-800 hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ─── Admin Panel (Course Builder) ─── */
function AdminPanel() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <section id="admin" className="py-20 lg:py-28 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[hsl(174,62%,32%)] border-[hsl(174,62%,32%)]/30 bg-white">
            Admin Dashboard
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(213,50%,16%)] mb-4">
            Course Management
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Build, manage, and track your course content all in one place.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto overflow-hidden shadow-lg border-slate-200/80">
          {/* Admin header bar */}
          <div className="bg-[hsl(213,50%,16%)] px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PixopharmLogo size={22} />
              <span className="text-white text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Admin Console</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-white/70 text-xs">admin@pixopharm.com</span>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-slate-200 bg-white px-6">
              <TabsList className="bg-transparent h-12 gap-4">
                <TabsTrigger value="courses" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[hsl(174,62%,32%)] rounded-none text-sm">
                  Courses
                </TabsTrigger>
                <TabsTrigger value="create" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[hsl(174,62%,32%)] rounded-none text-sm">
                  Create New
                </TabsTrigger>
                <TabsTrigger value="students" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[hsl(174,62%,32%)] rounded-none text-sm">
                  Students
                </TabsTrigger>
                <TabsTrigger value="analytics" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-[hsl(174,62%,32%)] rounded-none text-sm">
                  Analytics
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Courses tab */}
            <TabsContent value="courses" className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>Published Courses ({courses.length})</h3>
                <Button size="sm" className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] text-xs" onClick={() => setActiveTab("create")}>
                  + New Course
                </Button>
              </div>
              <div className="space-y-3">
                {courses.map((c) => {
                  const IconComp = courseIcons[c.icon] || IconGradCap;
                  return (
                    <div key={c.id} className="flex items-center gap-4 bg-slate-50 rounded-lg p-3 hover:bg-slate-100 transition-colors">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconBgMap[c.color]}`}>
                        <IconComp />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-slate-800 truncate">{c.title}</div>
                        <div className="text-xs text-slate-500">{c.modules.length} modules · {c.durationWeeks} weeks · {c.skillLevel}</div>
                      </div>
                      <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-700 border-emerald-200 shrink-0">
                        Published
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-xs text-slate-500 shrink-0">Edit</Button>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Create tab */}
            <TabsContent value="create" className="p-6">
              <h3 className="text-sm font-semibold text-slate-800 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Create New Course</h3>
              <div className="grid gap-5 max-w-2xl">
                <div className="grid gap-1.5">
                  <Label htmlFor="title" className="text-xs">Course Title</Label>
                  <Input id="title" placeholder="e.g., Advanced Compounding Techniques" className="text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label htmlFor="level" className="text-xs">Skill Level</Label>
                    <select id="level" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="duration" className="text-xs">Duration (weeks)</Label>
                    <Input id="duration" type="number" placeholder="6" className="text-sm" />
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="desc" className="text-xs">Description</Label>
                  <Textarea id="desc" placeholder="Describe what students will learn..." className="text-sm min-h-[100px]" />
                </div>
                <div className="grid gap-1.5">
                  <Label className="text-xs">Modules</Label>
                  <div className="space-y-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex gap-2">
                        <span className="w-6 h-9 flex items-center justify-center text-xs text-slate-400">{n}.</span>
                        <Input placeholder={`Module ${n} title`} className="text-sm" />
                      </div>
                    ))}
                    <Button variant="ghost" size="sm" className="text-xs text-[hsl(174,62%,32%)]">+ Add Module</Button>
                  </div>
                </div>
                <div className="flex gap-3 mt-2">
                  <Button className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)]">Save as Draft</Button>
                  <Button variant="outline">Publish Course</Button>
                </div>
              </div>
            </TabsContent>

            {/* Students tab */}
            <TabsContent value="students" className="p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-slate-800" style={{ fontFamily: "'DM Sans', sans-serif" }}>Enrolled Students</h3>
                <Input placeholder="Search students..." className="max-w-xs text-sm h-8" />
              </div>
              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="text-left py-2.5 px-4 font-medium text-xs">Student</th>
                      <th className="text-left py-2.5 px-4 font-medium text-xs">Country</th>
                      <th className="text-left py-2.5 px-4 font-medium text-xs">Enrolled</th>
                      <th className="text-left py-2.5 px-4 font-medium text-xs">Progress</th>
                      <th className="text-left py-2.5 px-4 font-medium text-xs">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { name: "Keisha Williams", country: "Jamaica", courses: 3, progress: 78, status: "Active" },
                      { name: "Rajesh Doobay", country: "Trinidad", courses: 2, progress: 45, status: "Active" },
                      { name: "Marie-Claire D.", country: "Haiti", courses: 4, progress: 92, status: "Active" },
                      { name: "Dwayne Archer", country: "Barbados", courses: 1, progress: 23, status: "Paused" },
                      { name: "Lisa Chen-Moore", country: "Bahamas", courses: 5, progress: 100, status: "Completed" },
                    ].map((s) => (
                      <tr key={s.name} className="hover:bg-slate-50">
                        <td className="py-2.5 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-medium text-slate-600">
                              {s.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                            <span className="font-medium text-slate-800">{s.name}</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-4 text-slate-600">{s.country}</td>
                        <td className="py-2.5 px-4 text-slate-600">{s.courses} courses</td>
                        <td className="py-2.5 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[hsl(174,62%,32%)] rounded-full" style={{ width: `${s.progress}%` }} />
                            </div>
                            <span className="text-xs text-slate-500">{s.progress}%</span>
                          </div>
                        </td>
                        <td className="py-2.5 px-4">
                          <Badge variant="outline" className={`text-[10px] ${
                            s.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                            s.status === "Completed" ? "bg-blue-50 text-blue-700 border-blue-200" :
                            "bg-amber-50 text-amber-700 border-amber-200"
                          }`}>
                            {s.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* Analytics tab */}
            <TabsContent value="analytics" className="p-6">
              <h3 className="text-sm font-semibold text-slate-800 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Platform Analytics</h3>
              <div className="grid sm:grid-cols-4 gap-4 mb-6">
                {[
                  { label: "Total Enrollments", value: "1,247", change: "+12%" },
                  { label: "Active Students", value: "892", change: "+8%" },
                  { label: "Completion Rate", value: "73%", change: "+5%" },
                  { label: "Avg. Score", value: "84.2%", change: "+2%" },
                ].map((m) => (
                  <div key={m.label} className="bg-slate-50 rounded-lg p-4">
                    <div className="text-xs text-slate-500 mb-1">{m.label}</div>
                    <div className="text-xl font-bold text-[hsl(213,50%,16%)]">{m.value}</div>
                    <div className="text-xs text-emerald-600 mt-1">{m.change} this month</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-lg p-5">
                <div className="text-xs font-medium text-slate-500 mb-3">Enrollments by Course</div>
                <div className="space-y-3">
                  {courses.slice(0, 5).map((c, i) => {
                    const pcts = [92, 78, 65, 54, 41];
                    return (
                      <div key={c.id} className="flex items-center gap-3">
                        <span className="text-xs text-slate-600 w-48 truncate">{c.title}</span>
                        <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[hsl(174,62%,32%)] rounded-full" style={{ width: `${pcts[i]}%` }} />
                        </div>
                        <span className="text-xs text-slate-500 w-8 text-right">{pcts[i]}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={caribbeanAerialImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(213,50%,16%)]/80 backdrop-blur-sm" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Elevate Caribbean Pharmacy?
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Join hundreds of pharmacy professionals across 15 Caribbean nations who are advancing their careers with PIXOPHARM.
        </p>
        <div className="flex justify-center gap-3">
          <Button size="lg" className="bg-[hsl(174,62%,32%)] hover:bg-[hsl(174,62%,26%)] h-12 px-8 shadow-lg shadow-black/20 text-white">
            Start Your Free Trial
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 border-white/30 text-white hover:bg-white/10">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-[hsl(213,50%,16%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <PixopharmLogo size={28} />
              <span className="text-base font-bold tracking-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                PIXOPHARM
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              The Caribbean's premier online training platform for pharmacy technicians. CARICOM-aligned, AI-ready, built for the region.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Courses</h4>
            <ul className="space-y-2.5">
              {courses.slice(0, 4).map((c) => (
                <li key={c.id}><a href="#courses" className="text-sm text-white/50 hover:text-white transition-colors">{c.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Company</h4>
            <ul className="space-y-2.5">
              {["About Us", "Careers", "Partners", "Blog", "Press"].map((item) => (
                <li key={item}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Support</h4>
            <ul className="space-y-2.5">
              {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service", "Accessibility"].map((item) => (
                <li key={item}><a href="#" className="text-sm text-white/50 hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-8 bg-white/10" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span>&copy; 2026 PIXOPHARM. All rights reserved. Serving the Caribbean with pride.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white/70">Privacy</a>
            <a href="#" className="hover:text-white/70">Terms</a>
            <a href="#" className="hover:text-white/70">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main App ─── */
function App() {
  const [activeCourse, setActiveCourse] = useState<string | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, loading, signIn, signUp, signOut } = useAuth();

  // If a course is active, show the course player
  if (activeCourse === "foundations-pharmacy-practice") {
    return <CoursePlayer user={user} onExit={() => setActiveCourse(null)} />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <PixopharmLogo size={48} className="mx-auto mb-4" />
          <p className="text-slate-500 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar user={user} onSignInClick={() => setAuthOpen(true)} onSignOut={signOut} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onSignIn={signIn} onSignUp={signUp} />
      <Hero />
      <StatsBar />
      <About />
      <RegulatoryNavigator />
      <Courses onStartCourse={setActiveCourse} />
      <Pricing />
      <Testimonials />
      <FAQ />
      <AdminPanel />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

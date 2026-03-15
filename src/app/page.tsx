"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardCarousel from "@/components/sections/hero/HeroBillboardCarousel";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import ProductCardFour from "@/components/sections/product/ProductCardFour";
import TextAbout from "@/components/sections/about/TextAbout";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoEmphasis from "@/components/sections/footer/FooterLogoEmphasis";
import { CheckCircle, Code, CreditCard, Film, Sparkles, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="noise"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Visionary AI"
          navItems={[
            { name: "How It Works", id: "how-it-works" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Integration", id: "integration" },
            { name: "Pricing", id: "pricing" }
          ]}
          button={{ text: "Get Started", href: "#pricing" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Transform Ideas Into Stunning Videos With AI"
          description="Generate professional-quality videos in minutes using advanced AI technology. From concept to final product, Visionary AI streamlines your entire creative workflow."
          tag="AI-Powered Video Generation"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          buttons={[
            { text: "Generate Video Now", href: "#pricing" },
            { text: "Watch Demo", href: "#" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/a-futuristic-ai-video-generation-interfa-1773562099571-f8e19889.png",              imageAlt: "AI video generation interface with neon purple effects"
            }
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureCardSix
          tag="Workflow"
          tagIcon={Zap}
          tagAnimation="blur-reveal"
          title="How It Works"
          description="Our AI agent workflow transforms text descriptions into cinematic videos with intelligent processing and real-time optimization."
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Input Your Concept",              description: "Describe your vision in natural language. Our AI understands context, mood, and creative intent to generate the perfect video.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/professional-ai-generated-cinematic-vide-1773562099439-6b8beef8.png?_wi=1",              imageAlt: "Input text description interface"
            },
            {
              id: 2,
              title: "AI Processing",              description: "Advanced algorithms analyze your input and generate visual elements, animations, transitions, and effects in real-time.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/dynamic-ai-created-music-video-frame-wit-1773562099536-e9711e82.png?_wi=1",              imageAlt: "AI processing visualization with effects"
            },
            {
              id: 3,
              title: "Download & Share",              description: "Get your finished video instantly in multiple formats. Ready for social media, presentations, or professional broadcast.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/corporate-ai-generated-explainer-video-f-1773562099799-596598de.png?_wi=1",              imageAlt: "Download and share options interface"
            }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardFour
          tag="Portfolio"
          tagIcon={Film}
          tagAnimation="opacity"
          title="Featured Video Gallery"
          description="Explore stunning examples of AI-generated videos created by our platform. Each video showcases unique creative possibilities."
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          products={[
            {
              id: "video-1",              name: "Cinematic Product Showcase",              price: "Premium Quality",              variant: "4K Resolution",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/professional-ai-generated-cinematic-vide-1773562099439-6b8beef8.png?_wi=2",              imageAlt: "Professional product showcase video with purple lighting"
            },
            {
              id: "video-2",              name: "Dynamic Music Video",              price: "Full HD Quality",              variant: "30 Seconds",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/dynamic-ai-created-music-video-frame-wit-1773562099536-e9711e82.png?_wi=2",              imageAlt: "Abstract music video with vibrant visual effects"
            },
            {
              id: "video-3",              name: "Corporate Explainer",              price: "4K Quality",              variant: "60 Seconds",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/corporate-ai-generated-explainer-video-f-1773562099799-596598de.png?_wi=2",              imageAlt: "Professional business explainer animation"
            }
          ]}
        />
      </div>

      <div id="integration" data-section="integration">
        <TextAbout
          tag="Integration"
          tagIcon={Code}
          tagAnimation="slide-up"
          title="Seamless Integration & Support"
          useInvertedBackground={false}
          buttons={[
            { text: "View API Documentation", href: "#" },
            { text: "Telegram Bot Guide", href: "#" }
          ]}
          buttonAnimation="opacity"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          tag="Pricing"
          tagIcon={CreditCard}
          tagAnimation="blur-reveal"
          title="Choose Your Plan"
          description="Select the perfect subscription tier for your video generation needs. Scale as you grow."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          plans={[
            {
              id: "creator",              badge: "Creator",              badgeIcon: Sparkles,
              price: "$29/month",              subtitle: "Perfect for content creators",              features: [
                "50 video generations/month",                "Up to 5 minutes per video",                "Standard quality (1080p)",                "API access",                "Email support"
              ],
              buttons: [{ text: "Get Started", href: "#" }]
            },
            {
              id: "professional",              badge: "Professional",              badgeIcon: Zap,
              price: "$79/month",              subtitle: "For agencies and businesses",              features: [
                "200 video generations/month",                "Up to 15 minutes per video",                "Premium quality (4K)",                "Priority API access",                "Priority support",                "Custom branding"
              ],
              buttons: [{ text: "Start Free Trial", href: "#" }]
            },
            {
              id: "enterprise",              badge: "Enterprise",              badgeIcon: Sparkles,
              price: "Custom",              subtitle: "For large-scale operations",              features: [
                "Unlimited generations",                "Unlimited video length",                "Highest quality (8K)",                "Dedicated API support",                "24/7 Priority support",                "White-label options"
              ],
              buttons: [{ text: "Contact Sales", href: "#" }]
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          tag="Trusted By"
          tagIcon={CheckCircle}
          tagAnimation="opacity"
          title="Powering Creation at Leading Companies"
          description="Media companies, creative agencies, and studios worldwide trust Visionary AI for their video generation needs."
          textboxLayout="default"
          useInvertedBackground={false}
          names={["Netflix", "YouTube", "Spotify", "Adobe", "Pixar", "Sony", "Paramount"]}
          logos={[
            "http://img.b2bpic.net/free-vector/flat-film-elements-pack_23-2147543169.jpg",            "http://img.b2bpic.net/free-psd/food-vlogger-youtube-banner_23-2148959987.jpg",            "http://img.b2bpic.net/free-photo/live-music-listen-entertainment-online-concept_53876-120037.jpg",            "http://img.b2bpic.net/free-vector/abstract-business-card-template_23-2148371115.jpg",            "http://img.b2bpic.net/free-vector/gradient-creative-nerd-logo-template_23-2149197724.jpg",            "http://img.b2bpic.net/free-vector/gradient-technology-logo-collection_23-2148162792.jpg",            "http://img.b2bpic.net/free-vector/movie-time-neon-sign_24908-55584.jpg"
          ]}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Visionary AI has revolutionized our video production workflow. What used to take weeks now takes hours. The quality is outstanding and the creative possibilities are endless."
          rating={5}
          author="Sarah Chen"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AyPqPO3iqFQKqkyARlf8pzd5eu/professional-headshot-of-a-creative-dire-1773562099258-7109506a.png",              alt: "Sarah Chen, Creative Director"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about Visionary AI, our pricing, and how to get started."
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="blur-reveal"
          faqs={[
            {
              id: "faq-1",              title: "How long does it take to generate a video?",              content: "Most videos are generated within 2-5 minutes depending on length and complexity. Premium 4K videos may take 5-10 minutes."
            },
            {
              id: "faq-2",              title: "Can I customize the generated videos?",              content: "Yes! You can adjust colors, music, pacing, and effects. Our platform offers extensive customization options for all generated content."
            },
            {
              id: "faq-3",              title: "What video formats are supported?",              content: "We support MP4, WebM, MOV, and AVI formats in various resolutions from 720p to 8K depending on your plan."
            },
            {
              id: "faq-4",              title: "Do you offer API access?",              content: "Yes, all paid plans include API access. Professional and Enterprise plans get priority API support with higher rate limits."
            },
            {
              id: "faq-5",              title: "Is there a free trial available?",              content: "Yes! Start with our free tier that includes 5 video generations to explore the platform before upgrading."
            },
            {
              id: "faq-6",              title: "Can I use videos commercially?",              content: "Absolutely! All videos generated on paid plans include full commercial usage rights. Credit attribution is optional."
            }
          ]}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactText
          text="Ready to transform your creative vision? Start generating AI-powered videos today and join thousands of creators revolutionizing their workflow."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={true}
          animationType="background-highlight"
          buttons={[{ text: "Start Generating Now", href: "#pricing" }]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Visionary AI"
          columns={[
            {
              items: [
                { label: "Product", href: "#" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Pricing", href: "#pricing" },
                { label: "API Docs", href: "#" }
              ]
            },
            {
              items: [
                { label: "Company", href: "#" },
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Resources", href: "#" },
                { label: "Documentation", href: "#" },
                { label: "Support", href: "#" },
                { label: "Community", href: "#" }
              ]
            },
            {
              items: [
                { label: "Legal", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Contact", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}

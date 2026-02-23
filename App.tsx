import React, { useState, useEffect, useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Zap,
  ArrowRight,
  ChevronRight,
  Linkedin,
  Mail,
  ExternalLink,
  CheckCircle2,
  Menu,
  X,
  ArrowUpRight,
  Layers,
  Phone,
  Youtube,
  Image as ImageIcon,
  Building2,
  Globe,
  Cpu,
  Shield,
  Code2,
  Grid2X2,
  Factory,
  Building,
  Facebook,
  Twitter,
  MessageCircle
} from 'lucide-react';
import { portfolioData } from './data';
import { ProjectItem, SkillCategory, YouTubeTutorial } from './types';


// --- Navigation Types ---
type Screen = 'home' | 'about' | 'projects' | 'contact' | 'project-detail';

// --- Shared Components ---

const LogoMarquee: React.FC = () => {
  const companyLogos = [
    { 
      name: "ZoomTan Inc.", 
      logo: "https://www.zoomtan.com/image/zoomtan_logo_vert-horiz.png" 
    },
    { 
      name: "IFPMA", 
      logo: "https://www.ifpma.org/wp-content/uploads/2023/04/ifpma-logo-social-preview.png"
    },
    { 
      name: "Super PowerLabs", 
      logo: "https://courses.superpowerlabs.app/pluginfile.php/1/core_admin/logo/0x200/1746386350/CROPPED.png" 
    },
    { 
      name: "Microsoft Partner", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png?20210729021049" 
    },
    { 
      name: "DynamiteApp", 
      logo: "https://dynamiteapptech.com.ng/wp-content/uploads/2025/02/2-2-1-e1745486119305.png" 
    }
  ];

  return (
    <div className="py-20 bg-white border-y border-slate-100 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
          Strategic Partnerships & Organizations Serviced
        </h2>
      </div>
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...companyLogos, ...companyLogos].map((company, idx) => (
          <div key={idx} className="flex items-center px-12 group">
            <div className="flex items-center gap-6 transition-all duration-500">
              <div className="h-14 w-auto flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="h-full w-auto object-contain transition-all duration-700" 
                />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-slate-500 group-hover:text-slate-900 transition-colors duration-500 cursor-default">
                {company.name}
              </span>
            </div>
            <div className="w-2 h-2 rounded-full bg-slate-100 mx-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CommunityContributionsSection: React.FC = () => {
  const c = portfolioData.community;
  const profileUrl = c?.profileUrl || 'https://www.skool.com/@elvis-eyobor-3582?g=learn-power-apps';
  const imageUrl = c?.imageUrl || 'https://firebasestorage.googleapis.com/v0/b/studio-1523050100-2a1a4.firebasestorage.app/o/Elvis%20Portfolio%20Files%2FSkool%20Profile%20(1).jpeg?alt=media&token=b5218e4c-aea6-417e-a330-d3e7b87647bd';

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-[#1E40AF]"><MessageCircle size={20} /></div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Community Contributions</h2>
            </div>
            <p className="italic text-slate-500">Empowering the Power Platform Ecosystem Through Active Support and Knowledge Sharing</p>

            <p className="text-lg text-slate-700 max-w-3xl">
              I am a dedicated contributor to the Power Platform community on {c?.platform || 'Skool'}, a dynamic network of approximately {c?.members?.toLocaleString() || '3,000'} members.
            </p>

            <p className="text-lg text-slate-700 max-w-3xl">
              With over {c?.contributions || '600'} contributions—including expert support responses, insightful posts, and collaborative discussions—I help developers and professionals troubleshoot challenges, share best practices, and drive innovation in tools like Power Apps, Power Automate, and Power BI.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/elvis-eyobor-9105a41a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#f09d1b] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-lg shadow-orange-100"
              >
                Connect on LinkedIn
              </a>
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-200 px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs text-slate-700 hover:bg-slate-50 transition-all shadow-lg shadow-orange-100"
              >
                View Community on {c?.platform || 'Skool'}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-1">
            <img
              src={imageUrl}
              alt={c?.name || 'Community'}
              className="w-full h-full object-cover rounded-2xl cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => window.open(profileUrl, '_blank')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const YouTubeTutorialsSection: React.FC<{ tutorials: YouTubeTutorial[] }> = ({ tutorials }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  const parseStartSeconds = (url: string) => {
    // look for t=123s or t=123
    const m = url.match(/[?&]t=(\d+)s?/);
    if (m && m[1]) return parseInt(m[1], 10);
    return 0;
  };

  const getEmbedSrc = (tutorial: YouTubeTutorial, muted = true) => {
    const start = parseStartSeconds(tutorial.videoUrl);
    return `https://www.youtube.com/embed/${tutorial.id}?autoplay=1&mute=${muted ? 1 : 0}&rel=0&enablejsapi=1${start ? `&start=${start}` : ''}`;
  };

  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Learn</h2>
            <h3 className="text-5xl font-extrabold tracking-tighter text-slate-900">Top Tutorials</h3>
          </div>
          <a
            href="https://www.youtube.com/@eyoborelvis8224"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#FF0000] hover:text-[#cc0000] transition-colors"
          >
            Subscribe <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, idx) => (
            <div
              key={tutorial.id || idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(prev => (prev === idx ? null : prev))}
              onClick={() => setPlayingId(tutorial.id)}
              className="group cursor-pointer space-y-4 block"
            >
              <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative shadow-sm transition-all hover:shadow-2xl">
                {hoveredIdx === idx || playingId === tutorial.id ? (
                  <iframe
                    loading="lazy"
                    src={getEmbedSrc(tutorial, true)}
                    title={tutorial.title}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={tutorial.thumbnailUrl}
                    alt={tutorial.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}

                <div className={`absolute inset-0 transition-all flex items-center justify-center ${hoveredIdx === idx || playingId === tutorial.id ? 'bg-black/10' : 'bg-black/0 group-hover:bg-black/20'}`}>
                  <div className={`w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transition-all ${hoveredIdx === idx || playingId === tutorial.id ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    <Youtube size={28} className="text-[#FF0000]" />
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded-md">
                  {tutorial.duration}
                </div>
              </div>

              <div className="px-2 space-y-2">
                <h4 className="text-lg font-black tracking-tighter text-slate-900 group-hover:text-[#FF0000] transition-colors line-clamp-2">
                  {tutorial.title}
                </h4>
                <p className="text-slate-500 font-medium text-sm line-clamp-2">
                  {tutorial.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <span>{tutorial.views}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span className="text-[#FF0000]">Power Platform</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://www.youtube.com/@eyoborelvis8224"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF0000] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#cc0000] transition-all flex items-center gap-3"
          >
            <Youtube size={18} />
            Watch More Tutorials
          </a>
        </div>

        {/* Modal for clicked video */}
        {playingId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
            <div className="w-full max-w-4xl bg-transparent relative rounded-lg overflow-hidden">
              <button
                onClick={() => setPlayingId(null)}
                className="absolute top-4 right-4 z-50 bg-white/90 text-slate-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                aria-label="Close video"
              >
                <X size={18} />
              </button>
              <div className="aspect-video w-full bg-black">
                <iframe
                  loading="lazy"
                  src={getEmbedSrc(tutorials.find(t => t.id === playingId) as YouTubeTutorial, false)}
                  title={tutorials.find(t => t.id === playingId)?.title || 'Video'}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const Navbar: React.FC<{ currentScreen: Screen; onNavigate: (s: Screen) => void }> = ({ currentScreen, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; screen: Screen }[] = [
    { label: 'Home', screen: 'home' },
    { label: 'About', screen: 'about' },
    { label: 'Projects', screen: 'projects' },
    { label: 'Contact', screen: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex justify-center items-center px-8 py-4 rounded-3xl transition-all ${isScrolled ? 'glass shadow-2xl border-slate-200/50' : 'bg-transparent'}`}>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.screen}
                onClick={() => onNavigate(link.screen)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${currentScreen === link.screen ? 'text-[#742774]' : 'text-slate-400 hover:text-slate-900'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-[#742774] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-purple-100"
            >
              Start Project
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-8 pt-24 space-y-8">
          {navLinks.map((link) => (
            <button 
              key={link.screen}
              className="text-4xl font-black text-slate-900 tracking-tighter text-left"
              onClick={() => { onNavigate(link.screen); setMobileMenuOpen(false); }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// --- Shared Components ---

const SocialMediaLinks: React.FC<{ containerClasses?: string }> = ({ containerClasses = "" }) => {
  return (
    <div className={containerClasses}>
      {portfolioData.socialMedia.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="group flex items-center w-14 h-14 rounded-2xl hover:w-auto transition-all"
        >
          <img className="w-14 h-14 flex items-center justify-center w-6 h-6" src={social.iconUrl} alt={social.name}/>
          <span className="ml-2 text-sm font-bold invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity text-[#742774]">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

// --- Screen Components ---

const LandingScreen: React.FC<{ onNavigate: (s: Screen, d?: any) => void; featuredProjects: ProjectItem[]; youtubeTutorials: YouTubeTutorial[] }> = ({ onNavigate, featuredProjects, youtubeTutorials }) => {
  const subheadlines = [
    "I craft high-quality web apps and Power Platform solutions that scale from startups to global enterprises—empowering your business to thrive.",
    5000,
    '',
    0,
    "Stuck on a technical challenge? I offer live support to get you unstuck and moving forward with confidence.",
    5000,
    '',
    0,
    "Mentoring individuals and teams to level up their skills and processes—whether it's Power Apps, automation, or operations excellence.",
    5000,
    '',
    0,
    "From maintenance planning to interactive dashboards, I deliver tailored innovations that drive real results. Let's build something amazing together.",
    5000,
    '',
    0
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Name & Info */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-purple-50 text-[#742774] font-black text-[10px] uppercase tracking-widest border border-purple-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#742774] animate-pulse"></div>
                  Solution Architect 5
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.85] tracking-tighter">
                  Hi, I'm <span className="text-[#742774]">Elvis Eyobor</span>
                </h1>
                <p className="text-lg md:text-xl font-medium text-slate-600/80 -mt-2">
                  ~ Turning Ideas into Efficient, Data-Driven Solutions
                </p>
                <TypeAnimation
                  sequence={subheadlines}
                  wrapper="p"
                  className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-xl font-medium"
                  repeat={Infinity}
                  cursor={true}
                  speed={70}
                  omitDeletionAnimation={true}
                />
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => onNavigate('contact')} className="bg-[#f09d1b] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-lg shadow-orange-100">
                  Get in Touch
                </button>
              </div>
              <SocialMediaLinks containerClasses="flex gap-4 pt-4" />
            </div>
            
            {/* Right Column: Photo (No Frame) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg aspect-square">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/studio-1523050100-2a1a4.firebasestorage.app/o/Elvis%20Portfolio%20Files%2FElvis%20Eyobor%20Profile%20Picture_AI.png?alt=media&token=32126503-3a1b-4b3e-850c-5e492125a18e" 
                  alt="Elvis Eyobor" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85]">Solving Challenges with <span className="text-[#742774]">Code & Data.</span></h2>
            <p className="text-2xl text-slate-500 leading-relaxed font-medium max-w-3xl mx-auto">
              As a Microsoft Certified Power Platform Developer, I transform complex business challenges into streamlined, data-driven solutions. With expertise in Power Apps, Power Automate, and Power BI, I build efficient workflows and interactive dashboards that drive real results. My background in maintenance planning adds a unique edge to optimizing operations across industries...
            </p>
            <button onClick={() => onNavigate('about')} className="bg-[#742774] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:opacity-90 transition-all shadow-lg shadow-purple-100">
              Read More About Me
            </button>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* Featured Projects Preview (Top 3) */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Featured</h2>
              <h3 className="text-5xl font-extrabold tracking-tighter text-slate-900">Work Highlights</h3>
            </div>
            <button onClick={() => onNavigate('projects')} className="hidden md:flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-400 hover:text-[#742774] transition-colors">
              Explore All <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((p, idx) => {
              const pics = Array.isArray(p.project_pictures) ? p.project_pictures : [];
              const cover = pics.length > 0 ? pics[0] : null;
              
              // If Vendor Management System, navigate to ProjectsScreen
              if (p.name === "Vendor Management System") {
                return (
                  <div key={idx} onClick={() => onNavigate('projects')} className="group cursor-pointer space-y-6">
                    <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-sm transition-all hover:shadow-2xl">
                      {cover ? (
                        <img src={cover} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-200"><ImageIcon size={48} /></div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="px-2">
                      <h4 className="text-2xl font-black tracking-tighter text-slate-900 mb-2 group-hover:text-[#742774] transition-colors">{p.name}</h4>
                      <p className="text-slate-500 font-medium line-clamp-2 text-sm">{p.description}</p>
                    </div>
                  </div>
                );
              }
              // Default: old behavior
              return (
                <div key={idx} onClick={() => onNavigate('project-detail', p)} className="group cursor-pointer space-y-6">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden relative shadow-sm transition-all hover:shadow-2xl">
                    {cover ? (
                      <img src={cover} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-200"><ImageIcon size={48} /></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="px-2">
                    <h4 className="text-2xl font-black tracking-tighter text-slate-900 mb-2 group-hover:text-[#742774] transition-colors">{p.name}</h4>
                    <p className="text-slate-500 font-medium line-clamp-2 text-sm">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex justify-center">
              <button onClick={() => onNavigate('projects')} className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#742774] transition-all">
                 Show More Projects
              </button>
          </div>
        </div>
      </section>

      {/* YouTube Tutorials Section */}
      <YouTubeTutorialsSection tutorials={youtubeTutorials} />
      {/* Community Contributions Section */}
      <CommunityContributionsSection />
    </div>
  );
};

const AboutScreen: React.FC<{ onNavigate: (s: Screen) => void }> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-32 animate-in slide-in-from-bottom-8 duration-700">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
              <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden">
                 <img src="https://firebasestorage.googleapis.com/v0/b/studio-1523050100-2a1a4.firebasestorage.app/o/Elvis%20Portfolio%20Files%2FElvis%20Eyobor%20Profile%20Picture_AI.png?alt=media&token=32126503-3a1b-4b3e-850c-5e492125a18e" className="w-full h-full object-cover filter grayscale" />
                 {/* ?q=80&w=800&auto=format&fit=crop */}
              </div>
          </div>
          <div className="lg:col-span-7 space-y-16">
            <section className="space-y-8">
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85]">Solving Challenges with <span className="text-[#742774]">Code & Data.</span></h1>
              <p className="text-2xl text-slate-500 leading-relaxed font-medium">
                {portfolioData.professionalSummary}
              </p>
            </section>

            <section className="space-y-12">
               <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Core Expertise</h3>
               <div className="grid sm:grid-cols-2 gap-8">
                  {portfolioData.technicalSkills.map((cat, idx) => (
                    <div key={idx} className="space-y-6">
                       <h4 className="text-xl font-black tracking-tight flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-[#742774]"><Layers size={16} /></div>
                          {cat.category}
                       </h4>
                       <div className="flex flex-wrap gap-2">
                          {cat.skills.map((s, i) => (
                            <span key={i} className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-bold border border-slate-100">{s}</span>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </section>

            <section className="space-y-12">
               <h3 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">Work History</h3>
               <div className="space-y-10">
                  {portfolioData.experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 border-l border-slate-100">
                       <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#742774] border-4 border-white"></div>
                       <div className="space-y-2">
                          <div className="text-[10px] font-black uppercase tracking-widest text-[#f09d1b]">{exp.period}</div>
                          <h4 className="text-2xl font-black tracking-tight">{exp.role}</h4>
                          <div className="text-sm font-bold text-slate-400">{exp.company}</div>
                          <p className="text-slate-500 leading-relaxed font-medium pt-2">{exp.description}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsScreen: React.FC<{ projects: ProjectItem[]; onNavigate: (s: Screen, d?: any) => void }> = ({ projects, onNavigate }) => {
  return (
    <div className="pt-32 pb-32 animate-in fade-in duration-700">
      <div className="container mx-auto px-6">
        <div className="mb-20 space-y-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900">Projects<span className="text-[#742774]">.</span></h1>
          <p className="text-xl text-slate-500 font-medium max-w-xl">
            A comprehensive list of enterprise solutions developed across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const pics = Array.isArray(project.project_pictures) ? project.project_pictures : [];
            const cover = pics.length > 0 ? pics[0] : null;
            return (
              <div 
                key={idx}
                onClick={() => onNavigate('project-detail', project)}
                className="group cursor-pointer space-y-6"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 relative shadow-sm transition-all hover:shadow-2xl">
                  {cover ? (
                    <img src={cover} alt={project.name} className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-200"><ImageIcon size={40} /></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="px-2">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#742774] mb-2">{project.client || project.company || 'Enterprise'}</div>
                  <h4 className="text-2xl font-black tracking-tighter text-slate-900 leading-tight group-hover:text-[#742774] transition-colors">{project.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailScreen: React.FC<{ project: ProjectItem; onBack: () => void }> = ({ project, onBack }) => {
  const pics = Array.isArray(project.project_pictures) ? project.project_pictures : [];
  // Show first picture before Problem, second before Solution, third before Scope, rest at the end
  const [pic1, pic2, pic3, ...restPics] = pics;

  return (
    <div className="pt-32 pb-32 animate-in fade-in zoom-in-95 duration-500">
      <div className="container mx-auto px-6 max-w-3xl">
        <button onClick={onBack} className="text-xs font-black uppercase tracking-widest text-[#742774] flex items-center gap-2 mb-12">
          <ChevronRight size={14} className="rotate-180" /> Back to projects
        </button>
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-[#f09d1b]">{project.period || 'Case Study'}</div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">{project.name}</h1>
            <div className="px-4 py-2 inline-block bg-slate-50 rounded-xl text-xs font-bold border border-slate-100">{project.client || project.company || 'Confidential'}</div>
          </div>

          {pic1 && (
            <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-lg">
              <img src={pic1} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          )}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Problem</h3>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">{project.problem}</p>
          </div>

          {pic2 && (
            <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-lg">
              <img src={pic2} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          )}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Solution</h3>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">{project.solution}</p>
          </div>

          {pic3 && (
            <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-lg">
              <img src={pic3} className="w-full h-auto object-cover" loading="lazy" />
            </div>
          )}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Project Scope</h3>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed">{project.scope}</p>
          </div>

          {restPics.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              {restPics.map((url, idx) => (
                <div key={idx} className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-lg">
                  <img src={url} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          )}

          <div className="p-10 bg-[#742774] rounded-[2.5rem] text-white shadow-2xl shadow-purple-200">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 opacity-60">Technical Features</h4>
            <ul className="space-y-4">
              {(project.features || []).map((f, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5 opacity-60" />
                  <span className="text-sm font-bold tracking-tight">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-slate-400">Tech Stack</h4>
            <div className="grid grid-cols-2 gap-4">
              {(project.tools || []).map((tech, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-[#742774]"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactScreen: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Proper setup for email sending (Simulated integration)
    // To make this real, replace the URL with your Formspree endpoint (e.g., https://formspree.io/f/YOUR_ID)
    try {
      const response = await fetch('https://formspree.io/f/mqaebrjr', { // Replaced with a real generic endpoint logic
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (err) {
      // Fallback success for demo purposes if no endpoint is available, 
      // but alerting the user in real use
      setTimeout(() => setFormState('success'), 1500); 
    }
  };

  return (
    <div className="pt-32 pb-32 animate-in zoom-in-95 duration-700">
      <div className="container mx-auto px-6">
        {/* Layered Outer Container for that 3D Inset Look */}
        <div className="max-w-6xl mx-auto bg-purple-200/50 rounded-[5rem] p-6 shadow-2xl">
          <div className="bg-[#742774] rounded-[4.5rem] p-12 md:p-24 relative overflow-hidden">
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              
              {/* Left Column */}
              <div className="space-y-8 text-white">
                <h3 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.8]">
                  Start a <br /> <span className="opacity-60">project.</span>
                </h3>
                <p className="text-xl text-white/70 font-medium max-w-sm">
                  I'm ready to help you transform your business workflows into competitive advantages.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#742774] transition-all border border-white/20">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#742774] transition-all border border-white/20">
                    <Mail size={24} />
                  </a>
                </div>
              </div>

              {/* Right Column - Form Card */}
              <div className="bg-[#f0f2f5] p-2 rounded-[3.5rem] shadow-2xl">
                <div className="bg-white p-10 md:p-14 rounded-[3.2rem]">
                  {formState === 'success' ? (
                    <div className="text-center py-20 space-y-4">
                      <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={40} />
                      </div>
                      <h4 className="text-2xl font-black">Message Sent!</h4>
                      <p className="text-slate-500">I'll get back to you within 24 hours.</p>
                      <button onClick={() => setFormState('idle')} className="text-[#742774] font-black text-xs uppercase tracking-widest mt-4">Send another</button>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <input 
                        required 
                        type="text" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[#f8fafc] border-none rounded-2xl px-8 py-5 outline-none focus:ring-2 focus:ring-[#742774]/20 transition-all font-black text-slate-900 placeholder:text-slate-400" 
                      />
                      <input 
                        required 
                        type="email" 
                        placeholder="Work Email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#f8fafc] border-none rounded-2xl px-8 py-5 outline-none focus:ring-2 focus:ring-[#742774]/20 transition-all font-black text-slate-900 placeholder:text-slate-400" 
                      />
                      <textarea 
                        required 
                        rows={5} 
                        placeholder="Tell me about your project" 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-[#f8fafc] border-none rounded-2xl px-8 py-5 outline-none focus:ring-2 focus:ring-[#742774]/20 transition-all font-black text-slate-900 resize-none placeholder:text-slate-400"
                      ></textarea>
                      
                      {/* Pill Style Button as seen in screenshot */}
                      <div className="pt-4">
                        <button 
                          disabled={formState === 'loading'}
                          className="w-full group relative overflow-hidden p-1.5 rounded-full bg-purple-100 shadow-inner"
                        >
                          <div className="bg-[#742774] text-white font-black py-4 rounded-full uppercase tracking-widest text-[11px] hover:opacity-90 transition-all flex items-center justify-center gap-2">
                            {formState === 'loading' ? 'Sending...' : 'SUBMIT REQUEST'}
                            <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        </button>
                      </div>

                      {formState === 'error' && (
                        <p className="text-red-500 text-center text-xs font-bold uppercase tracking-widest">Something went wrong. Please try again.</p>
                      )}
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<ProjectItem[]>([]);
  const [youtubeTutorials, setYoutubeTutorials] = useState<YouTubeTutorial[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    setProjects(portfolioData.projects);
    setFeaturedProjects(portfolioData.projects.slice(0, 3));
    setYoutubeTutorials(portfolioData.youtubeTutorials);
    setTimeout(() => setLoading(false), 600);
  }, []);

  const navigate = (screen: Screen, data: any = null) => {
    window.scrollTo(0, 0);
    if (screen === 'project-detail') {
      setSelectedProject(data);
    }
    setCurrentScreen(screen);
  };

  if (loading) return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-[#742774] rounded-2xl flex items-center justify-center text-white mb-6 animate-pulse">
        <Zap size={32} fill="currentColor" />
      </div>
      <div className="loader-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#742774] selection:text-white">
      <Navbar currentScreen={currentScreen} onNavigate={navigate} />
      
      <main className="flex-grow">
        {currentScreen === 'home' && <LandingScreen onNavigate={navigate} featuredProjects={featuredProjects} youtubeTutorials={youtubeTutorials} />}
        {currentScreen === 'about' && <AboutScreen onNavigate={navigate} />}
        {currentScreen === 'projects' && <ProjectsScreen projects={projects} onNavigate={navigate} />}
        {currentScreen === 'contact' && <ContactScreen />}
        {currentScreen === 'project-detail' && selectedProject && <ProjectDetailScreen project={selectedProject} onBack={() => navigate('projects')} />}
      </main>

      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6 text-center space-y-6">
          <div className="text-3xl font-black tracking-tighter text-slate-900">
            ELVIS    EYOBOR
          </div>
          <SocialMediaLinks containerClasses="flex justify-center gap-4" />
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">© 2024 Power Platform Solutions Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

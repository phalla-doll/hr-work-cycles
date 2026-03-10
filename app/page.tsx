import React from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Code,
  FileText,
  Globe,
  LayoutDashboard,
  LineChart,
  MapPin,
  PieChart,
  ShieldCheck,
  Star,
  Users,
  ArrowUpRight,
  Menu,
  Check,
  DollarSign,
  UserPlus,
  Cloud,
  Quote,
  Linkedin
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-slate-900 selection:bg-blue-200">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto text-white">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-[#1a0b8c] rounded-sm" />
          </div>
          hrworkcycles
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-90">
          <a href="#" className="hover:opacity-100 flex items-center gap-1">Solutions <ChevronRight className="w-3 h-3 rotate-90" /></a>
          <a href="#" className="hover:opacity-100">Integrations</a>
          <a href="#" className="hover:opacity-100">About Us</a>
          <a href="#" className="hover:opacity-100">Contact Us</a>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="#" className="hover:opacity-80">Client Login</a>
          <a href="#" className="bg-white text-[#1a0b8c] px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-colors">
            New Hire Login
          </a>
        </div>
        
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-[#1a0b8c] overflow-hidden">
        {/* Abstract Wave Background (Simulated with gradients) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3b25d3]/40 via-transparent to-transparent animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3b25d3]/30 to-transparent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 animate-blob" style={{ animationDelay: '5s' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
              Built for Growth.<br />
              Driven by Simplicity.
            </h1>
            <p className="text-lg text-blue-100/80 mb-8 max-w-md leading-relaxed">
              Simplify hiring compliance and workforce management with solutions that grow with your business.
            </p>
            <button className="bg-white text-[#1a0b8c] px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-colors">
              Get Started
            </button>
          </div>

          {/* Floating UI Elements */}
          <div className="relative h-[400px] hidden md:block">
            {/* API Integration Pill */}
            <div className="absolute top-4 right-20 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium shadow-xl animate-float">
              <Code className="w-4 h-4" /> API Integration
            </div>

            {/* Checklist Card */}
            <div className="absolute top-20 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-64 shadow-2xl animate-float-delayed">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm font-medium">Section 1</div>
                    <div className="text-xs text-white/60">Employee</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm font-medium">W-4</div>
                    <div className="text-xs text-white/60">Employee</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center justify-between text-white">
                  <div>
                    <div className="text-sm font-medium">Onboarding Complete</div>
                    <div className="text-xs text-white/60">Employee</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-white/40" />
                </div>
              </div>
            </div>

            {/* Signature Card */}
            <div className="absolute top-16 right-0 bg-[#2d1bba] border border-white/10 rounded-2xl p-4 w-56 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-300 overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/john/100/100" alt="John" fill className="object-cover" />
                </div>
                <div className="text-white">
                  <div className="text-sm font-medium">John Willis</div>
                  <div className="text-xs text-white/60">eSignature</div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-center">
                <span className="font-serif italic text-white/80 text-lg">John Willis</span>
              </div>
            </div>

            {/* Map Card */}
            <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 w-64 shadow-2xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-white text-sm font-medium leading-tight">
                  Employment<br/>Authorized
                </div>
                <div className="bg-white text-[#1a0b8c] text-[10px] font-bold px-2 py-1 rounded">E-Verify</div>
              </div>
              <div className="h-24 bg-white/5 rounded-lg border border-white/10 relative overflow-hidden flex items-center justify-center">
                 {/* Abstract Map Shape */}
                 <Globe className="w-16 h-16 text-white/20" />
              </div>
            </div>

            {/* Small Pill */}
            <div className="absolute bottom-4 left-20 bg-[#2d1bba] border border-white/10 rounded-full p-2 pr-4 flex items-center gap-3 shadow-xl animate-float-delayed" style={{ animationDelay: '1.5s' }}>
              <div className="w-8 h-8 rounded-full bg-blue-400 overflow-hidden relative border-2 border-white">
                <Image src="https://picsum.photos/seed/sarah/100/100" alt="Sarah" fill className="object-cover" />
              </div>
              <div className="text-white">
                <div className="text-xs font-medium">Section 2</div>
                <div className="text-[10px] text-white/60">Remote Verifier</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-6 mt-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-white/10 pt-8">
            {[
              { value: '54M', label: 'Paystubs distributed' },
              { value: '406M', label: 'Forms processed' },
              { value: '10k+', label: 'Happy clients' },
              { value: '6.2M', label: 'Employees onboarded' },
              { value: '4M+', label: 'E-Verify® cases' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-blue-200 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Trusted Partner for<br/>Workforce Solutions</h2>
            <p className="text-slate-600 mb-12">Trusted by PEO, staffing & payroll platforms</p>
            
            <div className="flex gap-12">
              <div>
                <div className="flex items-center gap-1 text-[#1a0b8c] font-bold text-xl mb-1">
                  <Star className="w-5 h-5 fill-current" /> 2004
                </div>
                <div className="text-sm text-slate-500 font-medium">E-Verify Web Services Agent</div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#1a0b8c] font-bold text-xl mb-1">
                  <Star className="w-5 h-5 fill-current" /> 98%
                </div>
                <div className="text-sm text-slate-500 font-medium">Customer satisfaction</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1a0b8c] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Hire Confidently</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Hire top talent quickly, while ensuring compliance.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1a0b8c] mb-4">
                <UserPlus className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Onboard Seamlessly</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Easily onboard new employees from anywhere.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1a0b8c] mb-4">
                <LineChart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Manage Efficiently</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Streamline your workflow and support your team&apos;s growth.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1a0b8c] mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg mb-2">Scale Effortlessly</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Adapt and grow with HR solutions that scale with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Bento Grid */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-12 max-w-sm">Our Workforce Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            
            {/* Card 1: I-9 */}
            <div className="bg-[#1a0b8c] rounded-3xl p-8 text-white relative overflow-hidden md:row-span-2 flex flex-col group cursor-pointer">
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-xl font-bold">I-9 / E-Verify ®</h3>
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-blue-100/80 mb-8 relative z-10">
                Simplify your I-9 process and ensure compliance with HRWC&apos;s I-9 Management Solution. Our platform handles everything from collection to storage, reducing paperwork and errors.
              </p>
              
              {/* Mockup UI */}
              <div className="mt-auto bg-white rounded-2xl p-4 text-slate-900 shadow-2xl relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 text-slate-500" />
                    </div>
                    <span className="text-xs font-bold">USCIS</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">FORM I-9</span>
                </div>
                <div className="text-xs font-bold mb-4">Employment Eligibility Verification</div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden relative">
                        <Image src="https://picsum.photos/seed/emp1/100/100" alt="Emp" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Section 1</div>
                        <div className="text-[10px] text-slate-500">Employee</div>
                      </div>
                    </div>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden relative">
                        <Image src="https://picsum.photos/seed/emp2/100/100" alt="Emp" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-bold">Section 2</div>
                        <div className="text-[10px] text-slate-500">Remote Verifier</div>
                      </div>
                    </div>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between border border-slate-100">
                  <div className="text-[#1a0b8c] font-bold text-xs">E-Verify</div>
                  <div className="text-[10px] font-bold">Employment<br/>Authorized</div>
                  <CheckCircle2 className="w-4 h-4 text-[#1a0b8c]" />
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
            </div>

            {/* Card 2: Electronic Onboarding */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group cursor-pointer flex flex-col">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="text-xl font-bold">Electronic Onboarding</h3>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </div>
              <p className="text-sm text-slate-500 mb-6 relative z-10">
                Transform onboarding with HRWC&apos;s digital solution for paperless, remote setup with smart forms, approvals, and validation.
              </p>
              
              {/* Mockup UI */}
              <div className="mt-auto space-y-3 relative z-10">
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden relative">
                      <Image src="https://picsum.photos/seed/olivia/100/100" alt="Olivia" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Olivia Lee</div>
                      <div className="text-[10px] text-slate-500">Onboarding Complete</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#1a0b8c]" />
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 overflow-hidden relative">
                      <Image src="https://picsum.photos/seed/oliver/100/100" alt="Oliver" fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Oliver Ruiz</div>
                      <div className="text-[10px] text-slate-500">Onboarding In Progress</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-2 border-slate-200" />
                </div>
              </div>
            </div>

            {/* Card 3: Tax Withholding Forms */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group cursor-pointer flex flex-col">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="text-xl font-bold">Tax Withholding Forms</h3>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </div>
              <p className="text-sm text-slate-500 mb-6 relative z-10">
                Streamline the collection of tax withholding forms for federal, state, and local jurisdictions, simplifying your new hire onboarding process.
              </p>
              
              {/* Mockup UI */}
              <div className="mt-auto bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center justify-between relative z-10">
                <div className="text-sm font-bold">W-4</div>
                <div className="flex-1 border-t border-dashed border-slate-300 mx-4" />
                <div className="w-6 h-6 rounded-full bg-blue-100 overflow-hidden relative">
                  <Image src="https://picsum.photos/seed/user3/100/100" alt="User" fill className="object-cover" />
                </div>
                <div className="flex-1 border-t border-dashed border-slate-300 mx-4" />
                <FileText className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* Card 4: Electronic Pay Advice */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group cursor-pointer flex flex-col">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="text-xl font-bold">Electronic Pay Advice</h3>
                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </div>
              <p className="text-sm text-slate-500 mb-6 relative z-10">
                Switch to HRWC&apos;s Electronic Pay Solution for secure, digital pay statements accessible anytime, anywhere.
              </p>
              
              {/* Mockup UI */}
              <div className="mt-auto bg-white rounded-xl p-4 border border-slate-100 shadow-sm relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-bold">Earnings Statement</div>
                  <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-white">
                    <DollarSign className="w-3 h-3" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-500">Rate</span>
                    <span className="font-bold">$27.80</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-500">Hours</span>
                    <span className="font-bold">80.00</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Net Pay</span>
                    <span className="font-bold text-[#1a0b8c]">$2,224</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Tax Credit Management */}
            <div className="bg-[#1a0b8c] rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer flex flex-col">
              <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="text-xl font-bold">Tax Credit Management</h3>
                <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-blue-100/80 mb-6 relative z-10">
                Save more with HRWC&apos;s Tax Credit Screening Solution. Our platform automates screening to identify eligible tax credits and incentives for your business.
              </p>
              
              {/* Mockup UI */}
              <div className="mt-auto bg-white rounded-xl p-4 text-slate-900 shadow-xl relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-bold">Tax Credit Summary</span>
                </div>
                <div className="flex items-end justify-between h-20 gap-2">
                  {[40, 60, 30, 80, 50, 70].map((h, i) => (
                    <div key={i} className="w-full bg-blue-100 rounded-t-sm relative group-hover:bg-blue-200 transition-colors" style={{ height: `${h}%` }}>
                      {i === 3 && <div className="absolute inset-0 bg-[#1a0b8c] rounded-t-sm" />}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[8px] text-slate-400 font-medium uppercase">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                </div>
              </div>
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials & Connect APIs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          
          {/* Testimonials */}
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#1a0b8c] text-[#1a0b8c]" />)}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                &quot;Thanks to TCS, we discovered credits we didn&apos;t know existed and saved over $200,000 last year alone. The process couldn&apos;t have been easier!&quot;
              </p>
              <div>
                <div className="font-bold text-sm">Satisfied Client</div>
                <div className="text-xs text-slate-500">Manufacturing Sector</div>
              </div>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#1a0b8c] text-[#1a0b8c]" />)}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                &quot;Using Tax Credit Services, we saved $120,000 in tax credits last year alone. The process couldn&apos;t have been easier!&quot;
              </p>
              <div>
                <div className="font-bold text-sm">Happy Client</div>
                <div className="text-xs text-slate-500">Retail Industry</div>
              </div>
            </div>
          </div>

          {/* Connect APIs Banner */}
          <div className="bg-[#1a0b8c] rounded-3xl p-12 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3b25d3]/60 via-transparent to-transparent animate-pulse-slow" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-blob" />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">Connect with Our APIs</h2>
              <p className="text-blue-100/80 mb-8 max-w-sm">
                Designed for growth, our APIs easily scale with your needs.
              </p>
              <button className="bg-white text-[#1a0b8c] px-6 py-2.5 rounded-full font-medium text-sm hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Abstract API Graphics */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-20 hidden md:block">
              <div className="w-64 h-64 border border-white rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border border-white rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border border-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Quote className="w-12 h-12 text-[#1a0b8c] mb-6 opacity-20" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
              We create solutions that seamlessly integrate into your existing HR processes.
            </h2>
          </div>
          
          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Your focus should be on growing your business, not worrying about compliance. We&apos;re dedicated to providing tools and support that remove the stress from HR, so you can operate confidently and with peace of mind.
            </p>
            <button className="bg-[#1a0b8c] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-opacity-90 transition-colors inline-flex items-center gap-2">
              Learn More <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-[#1a0b8c] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3b25d3]/60 via-transparent to-transparent animate-pulse-slow" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-blob" style={{ animationDelay: '4s' }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Our Team</h2>
          <p className="text-blue-100/80 mb-8 max-w-md mx-auto">
            Fill out the contact form and our team will get back to you as quickly as we can.
          </p>
          <button className="bg-white text-[#1a0b8c] px-8 py-3.5 rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1c] text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-white mb-6">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#1a0b8c] rounded-sm" />
                </div>
                hrworkcycles
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">I-9 / E-Verify</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Electronic Onboarding</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tax Withholding Forms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tax Credit Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Electronic Pay Advice</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contacts</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li>
                  <a href="#" className="hover:text-white transition-colors inline-block mt-2">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Companies</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-sm" /> eVerify</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-sm" /> tax credit services</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-sm" /> uspayserv</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div>© 2024 HRWORKCYCLES LLC</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & conditions</a>
            </div>
            <div>Built for Growth. Driven by Simplicity.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

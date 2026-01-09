import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const CalendarIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
    <path d="M6 18H42" stroke="currentColor" strokeWidth="2.5" />
    <path d="M16 6V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 6V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="28" r="3" fill="currentColor" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="currentColor" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const features = [
  {
    title: 'AI-Powered Scheduling',
    description: 'Let AI find the perfect time for your meetings based on preferences, energy levels, and focus time.',
    icon: '🤖',
  },
  {
    title: 'Smart Conflicts',
    description: 'Automatically detect and resolve scheduling conflicts before they become problems.',
    icon: '⚡',
  },
  {
    title: 'Time Blocking',
    description: 'Protect your deep work with intelligent time blocking that adapts to your workflow.',
    icon: '🎯',
  },
  {
    title: 'Team Sync',
    description: 'See your team\'s availability at a glance and coordinate effortlessly across time zones.',
    icon: '🌍',
  },
  {
    title: 'Natural Language',
    description: 'Create events by typing naturally. "Coffee with Sarah next Tuesday at 3pm" just works.',
    icon: '💬',
  },
  {
    title: 'Integrations',
    description: 'Connect with your favorite tools. Zoom, Meet, Slack, Notion, and 100+ more.',
    icon: '🔗',
  },
];

const testimonials = [
  {
    quote: "Finally, a calendar that understands how I actually work. It's like having a personal assistant.",
    author: "Sarah Chen",
    role: "Engineering Lead at Stripe",
    avatar: "SC",
  },
  {
    quote: "The AI scheduling has saved me hours every week. I can't imagine going back to manual scheduling.",
    author: "Marcus Johnson",
    role: "Founder at Buildspace",
    avatar: "MJ",
  },
  {
    quote: "The best calendar app I've ever used. Period. The natural language input is magical.",
    author: "Emily Park",
    role: "Product Designer at Figma",
    avatar: "EP",
  },
];

const CalendarPreview = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];
  
  const events = [
    { day: 0, start: 0, duration: 2, title: 'Deep Work', color: 'bg-violet-500/80' },
    { day: 1, start: 2, duration: 1, title: 'Team Sync', color: 'bg-blue-500/80' },
    { day: 2, start: 1, duration: 2, title: 'Design Review', color: 'bg-emerald-500/80' },
    { day: 3, start: 4, duration: 2, title: 'Focus Time', color: 'bg-violet-500/80' },
    { day: 4, start: 0, duration: 1, title: '1:1 with Alex', color: 'bg-amber-500/80' },
    { day: 4, start: 3, duration: 2, title: 'Sprint Planning', color: 'bg-blue-500/80' },
  ];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-blue-500/20 blur-3xl rounded-full" />
      <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="text-white/60 text-sm font-medium">January 2026</div>
        </div>
        
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-1" />
          {days.map((day) => (
            <div key={day} className="text-center text-white/40 text-xs font-medium py-2">
              {day}
            </div>
          ))}
          
          {hours.map((hour, hourIndex) => (
            <React.Fragment key={hour}>
              <div className="text-right text-white/30 text-xs pr-2 py-3">
                {hour}
              </div>
              {days.map((day, dayIndex) => {
                const event = events.find(e => e.day === dayIndex && e.start === hourIndex);
                return (
                  <div key={`${day}-${hour}`} className="relative h-12 border-t border-white/5">
                    {event && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (dayIndex * 0.1) + (hourIndex * 0.05) }}
                        className={`absolute inset-x-0 ${event.color} rounded-lg p-2 text-white text-xs font-medium shadow-lg`}
                        style={{ height: `${event.duration * 48 + (event.duration - 1) * 8}px`, zIndex: 10 }}
                      >
                        {event.title}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
  >
    <div className="text-4xl mb-4">{feature.icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
    <p className="text-white/60 leading-relaxed">{feature.description}</p>
  </motion.div>
);

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15 }}
    viewport={{ once: true }}
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
  >
    <p className="text-white/80 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-semibold">
        {testimonial.avatar}
      </div>
      <div>
        <div className="text-white font-medium">{testimonial.author}</div>
        <div className="text-white/50 text-sm">{testimonial.role}</div>
      </div>
    </div>
  </motion.div>
);

export default function CalendarLanding() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <>
      <Head>
        <title>Tempo - The Calendar for How You Actually Work</title>
        <meta name="description" content="AI-powered calendar that understands your workflow. Smart scheduling, time blocking, and seamless team coordination." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-violet-400">
                <CalendarIcon />
              </div>
              <span className="text-xl font-semibold">Tempo</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/60 hover:text-white transition-colors">Features</a>
              <a href="#testimonials" className="text-white/60 hover:text-white transition-colors">Testimonials</a>
              <a href="#pricing" className="text-white/60 hover:text-white transition-colors">Pricing</a>
            </div>
            <button className="bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors">
              Get Early Access
            </button>
          </div>
        </nav>

        <main>
          <section className="relative pt-32 pb-20 px-6">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl" />
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
            
            <div className="relative max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto mb-16"
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/10">
                  <SparkleIcon />
                  <span className="text-sm font-medium">Introducing Tempo 2.0</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  The calendar for how you{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    actually work
                  </span>
                </h1>
                
                <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                  AI-powered scheduling that understands your workflow. Protect your focus time, 
                  coordinate with your team, and take control of your calendar.
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  {!isSubmitted ? (
                    <>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3.5 text-white placeholder-white/40 focus:outline-none focus:border-violet-400 transition-colors"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-violet-500 to-blue-500 text-white px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                      >
                        Join Waitlist
                        <ArrowIcon />
                      </button>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-6 py-3.5 rounded-full"
                    >
                      <CheckIcon />
                      <span>You're on the list! We'll be in touch soon.</span>
                    </motion.div>
                  )}
                </form>
                
                <p className="text-white/40 text-sm mt-4">
                  Join 12,000+ people on the waitlist
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <CalendarPreview />
              </motion.div>
            </div>
          </section>

          <section className="py-20 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-4">
                <p className="text-white/40 text-sm uppercase tracking-wider">Trusted by teams at</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
                {['Stripe', 'Figma', 'Linear', 'Vercel', 'Notion', 'Raycast'].map((company) => (
                  <div key={company} className="text-2xl font-semibold text-white/60">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="features" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Everything you need to{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    own your time
                  </span>
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Powerful features designed to help you work smarter, not harder.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <FeatureCard key={feature.title} feature={feature} index={index} />
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-24 px-6 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Loved by{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    productive people
                  </span>
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  See what early users are saying about Tempo.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Simple,{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    transparent pricing
                  </span>
                </h2>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                  Start free, upgrade when you're ready.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-2">Free</h3>
                  <div className="text-4xl font-bold mb-4">$0</div>
                  <p className="text-white/60 mb-6">Perfect for getting started</p>
                  <ul className="space-y-3 mb-8">
                    {['1 calendar', 'Basic AI scheduling', 'Mobile app', 'Email support'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <div className="text-emerald-400"><CheckIcon /></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
                    Get Started
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-violet-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-400/30 relative"
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pro</h3>
                  <div className="text-4xl font-bold mb-4">$12<span className="text-lg font-normal text-white/60">/mo</span></div>
                  <p className="text-white/60 mb-6">For power users</p>
                  <ul className="space-y-3 mb-8">
                    {['Unlimited calendars', 'Advanced AI features', 'Team scheduling', 'Priority support', 'Integrations'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <div className="text-emerald-400"><CheckIcon /></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-violet-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
                    Start Free Trial
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                >
                  <h3 className="text-xl font-semibold mb-2">Team</h3>
                  <div className="text-4xl font-bold mb-4">$29<span className="text-lg font-normal text-white/60">/user/mo</span></div>
                  <p className="text-white/60 mb-6">For growing teams</p>
                  <ul className="space-y-3 mb-8">
                    {['Everything in Pro', 'Admin dashboard', 'SSO & SAML', 'API access', 'Dedicated support'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80">
                        <div className="text-emerald-400"><CheckIcon /></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white/10 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
                    Contact Sales
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to take control of your{' '}
                  <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                    time
                  </span>
                  ?
                </h2>
                <p className="text-xl text-white/60 mb-10">
                  Join thousands of people who've already transformed how they work.
                </p>
                <button className="bg-gradient-to-r from-violet-500 to-blue-500 text-white px-10 py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                  Get Early Access
                  <ArrowIcon />
                </button>
              </motion.div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="text-violet-400">
                  <CalendarIcon />
                </div>
                <span className="text-xl font-semibold">Tempo</span>
              </div>
              <div className="flex items-center gap-8 text-white/60">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">Discord</a>
              </div>
              <div className="text-white/40 text-sm">
                &copy; 2026 Tempo. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Tempo - The Calendar for How You Actually Work',
        description: 'AI-powered calendar that understands your workflow. Smart scheduling, time blocking, and seamless team coordination.',
      },
    },
  };
}

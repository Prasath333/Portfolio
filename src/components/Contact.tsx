import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, FileText, 
  ExternalLink, CheckCircle2, Clock 
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactDetails = [
    {
      icon: <Mail size={18} className="text-yellow-400" />,
      label: 'Email',
      value: 'prasathchinnu13@gmail.com',
      href: 'mailto:prasathchinnu13@gmail.com',
    },
    {
      icon: <Phone size={18} className="text-yellow-400" />,
      label: 'Phone',
      value: '+91 9629027475',
      href: 'tel:+919629027475',
    },
    {
      icon: <MapPin size={18} className="text-yellow-400" />,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu, India',
      href: null,
    },
  ];

  const socialProfiles = [
    {
      name: 'GitHub',
      handle: 'prasathchinnu13',
      icon: <FaGithub size={18} />,
      href: 'https://github.com/prasathchinnu13',
    },
    {
      name: 'LinkedIn',
      handle: 'Prasath S',
      icon: <FaLinkedin size={18} />,
      href: 'https://www.linkedin.com/in/prasath-s-7b8b4a1b0/',
    },
    {
      name: 'WhatsApp',
      handle: '+91 9629027475',
      icon: <FaWhatsapp size={18} />,
      href: 'https://wa.me/919629027475',
    },
  ];

  const readyChecks = [
    'Open to full-time developer positions',
    'Available on-site (Coimbatore) or Remote',
    'React, TypeScript & Modern Frontend Stack',
    'Quick ramp-up, clean code & agile delivery',
  ];

  return (
    <section id="contact" className="portfolio-section bg-[#2d2d2d] border-t border-white/5">
      <div className="portfolio-container">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <p className="section-tag !mb-0">Let's Connect</p>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mt-2">
            Available for full-time developer opportunities. Let's discuss how I can contribute to your team.
          </p>
        </motion.div>

        {/* Two-Column Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* LEFT: Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            {/* Contact Info Card */}
            <div className="editorial-card p-7 sm:p-8 border border-white/10 hover:border-white/20 transition-colors flex-1">
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-5">
                Direct Contact
              </h3>
              <div className="space-y-3">
                {contactDetails.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#262626] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-yellow-400/30 transition-colors">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-semibold text-gray-200 hover:text-yellow-400 transition-colors truncate block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-gray-200 truncate">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Card */}
            <div className="editorial-card p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                Professional Profiles
              </h3>
              <div className="flex flex-col gap-2.5">
                {socialProfiles.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#262626] border border-white/10 hover:border-yellow-400/35 text-gray-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                        {social.icon}
                      </span>
                      <div>
                        <span className="text-sm font-semibold block">{social.name}</span>
                        <span className="text-[11px] text-gray-500">{social.handle}</span>
                      </div>
                    </div>
                    <ExternalLink size={13} className="text-gray-500 group-hover:text-yellow-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Recruiter CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="editorial-card p-7 sm:p-9 h-full flex flex-col justify-between border border-yellow-400/25 hover:border-yellow-400/50 transition-colors">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/25 text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                    <Clock size={11} />
                    <span>Open to Work</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                  Let's Build Something<br />
                  <span className="text-yellow-400">Great Together</span>
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                  I bring strong React & TypeScript skills, a sharp eye for UI detail, and a track record of shipping clean production interfaces. Ready to contribute from day one.
                </p>

                {/* 4 Ready-Checks */}
                <div className="space-y-2.5 mb-7">
                  {readyChecks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircle2 size={15} className="text-yellow-400 flex-shrink-0" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-5 border-t border-white/10">
                <a
                  href="mailto:prasathchinnu13@gmail.com?subject=Developer%20Opportunity%20-%20Prasath%20S"
                  className="btn-hire w-full justify-center py-3 text-sm"
                >
                  <Send size={15} />
                  <span>Send Me an Email</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Prasath_S_Resume.pdf"
                  className="btn-resume w-full justify-center py-3 text-sm"
                >
                  <FileText size={15} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
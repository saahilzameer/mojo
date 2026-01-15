import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Github, Twitter, ExternalLink, MessageCircle, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/cmrit-prompt-techies-9a705a370/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/cmrit_prompt_techies/',
      color: 'hover:text-pink-400'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/prompttechies123',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/promptechies',
      color: 'hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'prompt_techies@cmrithyderabad.edu.in',
      href: 'mailto:prompt_techies@cmrithyderabad.edu.in'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 80080 87702',
      href: 'tel:+918008087702'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'CMR Institute of Technology, Hyderabad, Telangana, India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl sm:text-5xl text-white mb-6">
            Get In <span className="text-neon-blue">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join our tech community? Let's connect and build the future together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
                      <info.icon size={24} className="text-neon-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-orbitron font-semibold text-lg text-white mb-1">{info.title}</h3>
                    {info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? (
                      <a 
                        href={info.href}
                        className="text-neon-blue hover:text-white transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-card p-6">
              <h3 className="font-orbitron font-semibold text-lg text-white mb-4">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                    <span className="font-medium">{social.name}</span>
                    <ExternalLink size={16} className="ml-auto opacity-60" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Join Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card text-center p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
                Ready to Join?
              </h3>
              <p className="text-gray-300 mb-8">
                Become part of our innovative tech community and start your journey with us
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="https://forms.gle/FCvFaMWWVcoztz9J7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Apply to Join</span>
                  <ExternalLink size={20} />
                </motion.a>

                <motion.a
                  href="https://chat.whatsapp.com/D9akvV5WlvN8bJW78GIG9Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={20} />
                  <span>Join WhatsApp Group</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
  MessageCircle,
} from "lucide-react";
import logo from "../images/logo.png"; // ✅ import logo

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-emerald-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* ✅ Logo */}
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logo}
                alt="Boroma Hills Logo"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-3xl font-serif">Boroma Hills</h3>
            </div>

            <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
              Living the original plan from the beginning. Following God's
              design for sustainable agriculture and community empowerment.
            </p>

            {/* Socials */}
            <div className="flex space-x-4">
              {/* YouTube */}
              <motion.a
                href="https://www.youtube.com/@BoromaHills"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-800 p-3 rounded-full hover:bg-emerald-700 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/profile.php?id=61580822106900"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-800 p-3 rounded-full hover:bg-emerald-700 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/27621071140"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-800 p-3 rounded-full hover:bg-emerald-700 transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6 text-amber-200">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-emerald-100 hover:text-amber-200 transition-colors duration-300"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href="#current"
                  className="text-emerald-100 hover:text-amber-200 transition-colors duration-300"
                >
                  Current Status
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-emerald-100 hover:text-amber-200 transition-colors duration-300"
                >
                  Future Projects
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-emerald-100 hover:text-amber-200 transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6 text-amber-200">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-200 flex-shrink-0" />
                <span className="text-emerald-100 text-sm">
                  Boroma Hills Farm
                  <br />
                  Boroma, Masvingo, Zimbabwe
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-200 flex-shrink-0" />
                <span className="text-emerald-100 text-sm">
                  +27 62 107 1140
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-200 flex-shrink-0" />
                <span className="text-emerald-100 text-sm">
                  theoffgridzone@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-emerald-800 mt-12 pt-8 text-center"
        >
          <p className="text-emerald-200 text-sm mb-4">
            "And God blessed them, and God said unto them, Be fruitful, and
            multiply, and replenish the earth, and subdue it" - Genesis 1:28
          </p>
          <p className="text-emerald-300 text-sm">
            © 2016 Boroma Hills. All rights reserved. Built with faith and
            purpose.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

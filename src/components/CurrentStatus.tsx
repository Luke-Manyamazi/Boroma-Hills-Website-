import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { MapPin, Home } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import houseImage from "../images/house02.jpg";

export function CurrentStatus() {
  return (
    <section id="current" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-emerald-800 mb-4 font-serif">
            Where We Are Today
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Farm Home Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-xl"
            >
              <ImageWithFallback
                src={houseImage}
                alt="Our 3-bedroom farmhouse and garden"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm bg-emerald-600/90 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                  Our Homestead
                </p>
              </div>
            </motion.div>

            <div className="flex items-start space-x-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <MapPin className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl text-emerald-800 mb-2">
                  Location Secured
                </h3>
                <p className="text-amber-900">
                  Our land is secured with a comfortable 3-bedroom house serving
                  as our base of operations for this divine mission.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Home className="text-amber-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl text-emerald-800 mb-2">
                  Foundation Established
                </h3>
                <p className="text-amber-900">
                  We've begun with God's creatures, establishing our first
                  sustainable livestock systems as part of His perfect design.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl text-emerald-800 mb-6 text-center font-serif">
              What's Already Thriving
            </h3>

            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🐓</span>
                  <span className="text-emerald-800">Free-range Chickens</span>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  Active
                </Badge>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🐐</span>
                  <span className="text-emerald-800">Goats</span>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  Active
                </Badge>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🦃</span>
                  <span className="text-emerald-800">Turkeys</span>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                  Active
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

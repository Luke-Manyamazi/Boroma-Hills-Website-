import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Youtube } from "lucide-react";

export function YouTubeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-emerald-800 mb-4 font-serif">
            See Boroma Hills in Action
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Follow our journey as we build God's kingdom through sustainable
            agriculture
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Embedded YouTube Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl"
          >
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/71vQhNEsWjg?si=CVfT2TUujmtCFsOA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Text and Subscribe Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl text-emerald-800 font-serif">
                Join Our Growing Community
              </h3>
              <p className="text-amber-900 leading-relaxed">
                Watch as we transform raw land into a thriving agricultural
                paradise, following biblical principles of stewardship and
                community building. See our animals, crops, and educational
                programs in action.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-emerald-700">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Weekly farm updates and progress videos</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-700">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Educational content on sustainable agriculture</span>
              </div>
              <div className="flex items-center space-x-3 text-emerald-700">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span>Faith-based farming wisdom and testimonies</span>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <a
                href="https://www.youtube.com/@TheOffGridZone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Subscribe to Our Channel
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { ExternalLink, Images } from "lucide-react";

// Import local images
import field from "../images/field.jpg";
import family01 from "/src/images/family01.jpg";
import house from "../images/house.jpg";
import goats from "../images/goats.jpg";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1627462656780-964d9535a50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlJTIwcmFuZ2UlMjBjaGlja2VucyUyMGZhcm18ZW58MXx8fHwxNzU5Mzg5NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Free-range chickens on our farm",
    category: "Livestock",
  },
  {
    src: goats,
    alt: "Goats in a kraal on our farm",
    category: "Livestock",
  },
  {
    src: field,
    alt: "Vacant field ready for planting",
    category: "Land",
  },
  {
    src: family01,
    alt: "Our family at Boroma Hills",
    category: "Family",
  },
  {
    src: "https://images.unsplash.com/photo-1716561242235-2223ad9e19dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dXJrZXklMjBmYXJtJTIwcG91bHRyeXxlbnwxfHx8fDE3NTkzOTA2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Turkeys roaming freely on our farm",
    category: "Livestock",
  },
  {
    src: house,
    alt: "Our cozy farmhouse at Boroma Hills",
    category: "Home",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-amber-50 to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-emerald-800 mb-4 font-serif">
            Life at Boroma Hills
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Witness the beauty of God's creation as we cultivate the land and
            nurture His creatures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-emerald-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">
                      {image.category}
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-2xl text-lg group transition-all duration-300 hover:scale-105"
          >
            <a
              href="https://photos.app.goo.gl/HFXX6iTuUj48y6Jf7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Images className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              View Full Gallery
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>

          <p className="text-amber-700 text-sm mt-4">
            See all our farm photos and daily life moments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-amber-900 italic max-w-3xl mx-auto text-lg">
            "Every good gift and every perfect gift is from above, and cometh
            down from the Father of lights" - James 1:17
          </p>
        </motion.div>
      </div>
    </section>
  );
}

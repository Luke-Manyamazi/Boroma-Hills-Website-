import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Shield,
  Home,
  Wheat,
  PiggyBank,
  Apple,
  Bug,
  GraduationCap,
} from "lucide-react";

// import images from local
import fenceImage from "../images/fence.webp";
import goatKraalImage from "../images/goatKraal01.webp";
import cropFieldImage from "../images/vegetables.webp";
import pigImage from "../images/pigs.webp";
import fruitImage from "../images/fruits.webp";
import bsfImage from "../images/bsf.webp";
import kidsImage from "../images/kidsAcademy.webp";
import communityImage from "../images/community.webp";

const projects = [
  {
    title: "Perimeter fence, borehole & solar setup",
    description:
      "Securing our land and establishing sustainable energy and water systems",
    icon: Shield,
    color: "emerald",
    image: fenceImage,
  },
  {
    title: "Goat kraal & free-range chicken run",
    description: "Proper housing and grazing areas for our livestock",
    icon: Home,
    color: "amber",
    image: goatKraalImage,
  },
  {
    title: "Vegetable cash crops",
    description: "Organic vegetable production for community and income",
    icon: Wheat,
    color: "green",
    image: cropFieldImage,
  },
  {
    title: "Piggery & poultry (incl. egg hatching)",
    description:
      "Expanding our livestock operations with pigs and advanced poultry",
    icon: PiggyBank,
    color: "orange",
    image: pigImage,
  },
  {
    title: "Fruit plants sales",
    description: "Orchard development and fruit tree nursery business",
    icon: Apple,
    color: "red",
    image: fruitImage,
  },
  {
    title: "Black soldier fly & feed production",
    description: "Sustainable protein production and waste management system",
    icon: Bug,
    color: "purple",
    image: bsfImage,
  },
  {
    title: "Agricultural academy for kids & youth",
    description:
      "Education center teaching God's design for sustainable living",
    icon: GraduationCap,
    color: "blue",
    image: kidsImage,
  },
];

export function FutureProjects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-emerald-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-emerald-800 mb-4 font-serif">
            Our Divine Blueprint
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Following God's perfect plan for abundance and community stewardship
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  {project.image && (
                    <div className="relative h-40 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`bg-${project.color}-100 p-3 rounded-2xl mr-4`}
                      >
                        <Icon className={`w-6 h-6 text-${project.color}-600`} />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full"
                      >
                        Coming Soon
                      </Badge>
                    </div>

                    <h3 className="text-lg text-emerald-800 mb-3 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-amber-900 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

          {/* Featured Community Vision inside grid spanning 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2"
          >
            <Card className="bg-gradient-to-r from-emerald-50 to-amber-50 border-0 shadow-xl rounded-3xl overflow-hidden h-full">
              <div className="grid md:grid-cols-2 gap-0 h-full">
                <div className="relative h-64 md:h-auto">
                  <ImageWithFallback
                    src={communityImage}
                    alt="Community empowerment and education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-transparent"></div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="bg-emerald-100 p-3 rounded-2xl mr-4">
                      <GraduationCap className="w-8 h-8 text-emerald-600" />
                    </div>
                    <Badge className="bg-emerald-600 text-white px-4 py-2 rounded-full">
                      Our Ultimate Vision
                    </Badge>
                  </div>
                  <h3 className="text-2xl text-emerald-800 mb-4 font-serif">
                    Community Empowerment & Education
                  </h3>
                  <p className="text-amber-900 leading-relaxed mb-6">
                    Beyond our own family's journey, we envision Boroma Hills as
                    a center for community education and empowerment. Teaching
                    sustainable agriculture, godly stewardship, and practical
                    skills to strengthen our entire community.
                  </p>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌍</span>
                    <span className="text-emerald-800">
                      Impacting lives through agricultural education
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Closing Bible Verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-amber-900 italic max-w-2xl mx-auto text-lg">
            "And God said, Let the earth bring forth grass, the herb yielding
            seed, and the fruit tree yielding fruit after his kind" - Genesis
            1:11
          </p>
        </motion.div>
      </div>
    </section>
  );
}

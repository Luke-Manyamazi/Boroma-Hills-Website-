import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Heart, Users, BookOpen, Church } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import family02 from "../images/family02.webp";

export function AboutUs() {
  return (
    <section id="aboutus" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-emerald-800 mb-4 font-serif">
            Meet Our Family
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            United in faith and purpose, working together to build God's kingdom
            through sustainable living
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Family Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Family Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl shadow-xl"
            >
              <ImageWithFallback
                src={family02}
                alt="Our family at Boroma Hills"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm bg-emerald-600/90 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                  The Boroma Hills Family
                </p>
              </div>
            </motion.div>
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl text-emerald-800 font-serif">
                  Our Journey Together
                </h3>
              </div>

              <p className="text-amber-900 leading-relaxed mb-6">
                We are a family of six, blessed by God with a vision to return
                to His original design for living from the land. Together, we're
                building a legacy of faith, sustainability, and community
                empowerment for our children and future generations.
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-3xl text-emerald-600 mb-2">👨‍👩‍👧‍👦</div>
                  <p className="text-emerald-800">Family of 6</p>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-3xl text-emerald-600 mb-2">🙏</div>
                  <p className="text-emerald-800">Faith-Centered</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Family Members */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Husband */}
            <Card className="bg-gradient-to-r from-blue-50 to-emerald-50 border-0 shadow-lg rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg text-emerald-800">
                        The Visionary
                      </h4>
                      <Badge className="bg-blue-100 text-blue-800">
                        Student
                      </Badge>
                    </div>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      Currently pursuing Software Engineering Honours, bringing
                      technical innovation to our farming operations while
                      maintaining our commitment to God's original design.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wife */}
            <Card className="bg-gradient-to-r from-pink-50 to-amber-50 border-0 shadow-lg rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-100 p-3 rounded-2xl">
                    <BookOpen className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg text-emerald-800">The Educator</h4>
                      <Badge className="bg-pink-100 text-pink-800">
                        ECD Teacher
                      </Badge>
                    </div>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      ECD qualified teacher and daycare owner, nurturing young
                      minds while building our agricultural academy vision for
                      educating the next generation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Children */}
            <Card className="bg-gradient-to-r from-green-50 to-yellow-50 border-0 shadow-lg rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg text-emerald-800">
                        Our Four Blessings
                      </h4>
                      <Badge className="bg-green-100 text-green-800">
                        Next Generation
                      </Badge>
                    </div>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      Four wonderful children who are learning hands-on about
                      sustainable living, animal care, and God's creation while
                      growing up on the farm.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* First House Church */}
            <Card className="bg-gradient-to-r from-indigo-50 to-rose-50 border-0 shadow-lg rounded-3xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-2xl">
                    <Church className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg text-emerald-800">
                        The First House Church
                      </h4>
                      <Badge className="bg-blue-100 text-blue-800">
                        Family Prayer
                      </Badge>
                    </div>
                    <p className="text-amber-900 text-sm leading-relaxed">
                      There is power when a family prays together. The family
                      itself is the first house church — a sacred place where
                      worship, teaching, and discipleship begin. From this
                      foundation, the blessing extends outward to other families
                      and eventually the entire community.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Family Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-3xl p-8">
            <h3 className="text-2xl text-emerald-800 mb-6 font-serif">
              Our Family Values
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-3xl">🙏</div>
                <h4 className="text-emerald-800">Faith First</h4>
                <p className="text-amber-900 text-sm">
                  Following God's plan for our lives and stewardship
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🌱</div>
                <h4 className="text-emerald-800">Sustainable Living</h4>
                <p className="text-amber-900 text-sm">
                  Teaching our children to live in harmony with creation
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🤝</div>
                <h4 className="text-emerald-800">Community</h4>
                <p className="text-amber-900 text-sm">
                  Building connections and empowering others
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

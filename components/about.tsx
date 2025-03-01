"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Palette, Lightbulb, Trophy, Rocket, Users } from "lucide-react"

const skills = [
  { name: "Web Development", icon: <Code className="h-6 w-6" /> },
  { name: "UI/UX Design", icon: <Palette className="h-6 w-6" /> },
  { name: "Problem Solving", icon: <Lightbulb className="h-6 w-6" /> },
  { name: "Hackathon Winners", icon: <Trophy className="h-6 w-6" /> },
  { name: "Rapid Prototyping", icon: <Rocket className="h-6 w-6" /> },
  { name: "Team Collaboration", icon: <Users className="h-6 w-6" /> },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-muted-foreground mb-6">
              Night Owls is a team of passionate developers and designers who came together during a hackathon and never
              stopped building. We specialize in creating innovative solutions using modern web technologies.
            </p>
            <p className="text-muted-foreground mb-6">
              Our mission is to solve real-world problems through elegant code and thoughtful design. We believe in the
              power of technology to make a positive impact on people's lives.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 rounded-md">
                  <div className="text-primary">{skill.icon}</div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Night Owls Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}


"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
  Newspaper,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Status and Action Buttons */}
        <a
          href="mailto:utkarsh.deoli@gmail.com"
          className="inline-flex items-center bg-transparent border-[#00ADB5]/30 text-[#00ADB5] hover:bg-[#00ADB5]/10 rounded-lg text-sm font-medium p-2 transition-colors duration-200"
        >
          <div className="w-2 h-2 bg-[#ff6b6b] rounded-full animate-pulse mr-2"></div>
          Available for new opportunities
        </a>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Hey, I'm Utkarsh
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-xl text-left">
          India-based Versatile and high agency developer with extensive
          experience in building scalable, efficient, and user-centric
          applications.
        </p>

        {/* Social Links Section */}
        <div className="pt-6">
          <p className="text-gray-400 text-sm mb-4">Connect with me</p>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2"
            >
              <a href="mailto:utkarsh.deoli@gmail.com">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2"
            >
              <a
                href="https://twitter.com/utkarshdeoli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2"
            >
              <a
                href="https://github.com/utkarshdeoli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2"
            >
              <a
                href="https://linkedin.com/in/utkarshdeoli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>

            {/* <Button
              asChild
              variant="outline"
              className="bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2"
            >
              <a href="https://leetcode.com/sagemodeutkarsh" target="_blank" rel="noopener noreferrer">
                <Code className="h-4 w-4" />
                Leetcode
              </a>
            </Button> */}

            <Button
              asChild
              variant="outline"
              className="bg-gray-800/50 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-2"
            >
              <a
                href="https://utkarshdeoli.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Newspaper className="h-4 w-4" />
                Blog
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

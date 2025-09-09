'use client'

import { Mail, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-dark-200 border-t border-dark-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="mb-4">
                <Image
                  src="/images/gojitech-logo.png"
                  alt="gojiTech"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-dark-600 leading-relaxed max-w-md">
                Transforming healthcare through AI-powered solutions. 
                We're building the future of healthcare technology with 
                innovation, precision, and care.
              </p>
            </div>
            

          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <a href="/gojirx" className="text-dark-600 hover:text-accent transition-colors">
                  claimRx<sup className="text-[0.65em] align-super">™</sup>
                </a>
              </li>
              <li>
                <a href="/guiderx" className="text-dark-600 hover:text-accent transition-colors">
                  guideRx<sup className="text-[0.65em] align-super">™</sup>
                </a>
              </li>
              <li>
                <a href="/selectrx" className="text-dark-600 hover:text-accent transition-colors">
                  selectRx<sup className="text-[0.65em] align-super">™</sup>
                </a>
              </li>
              <li>
                <a href="/pharmacy-network" className="text-dark-600 hover:text-accent transition-colors">
                  Pharmacy Network
                </a>
              </li>
              <li>
                <a  className="text-dark-600 hover:text-accent transition-colors">
                  Formulary
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-dark-600 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark-600 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-dark-600 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-600 hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li> */}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="text-dark-600">
                <div className="font-medium mb-1">Address</div>
                <div className="text-sm leading-relaxed">
                  1200 Lawrence Ave E. #301<br />
                  North York, Ontario, Canada<br />
                  M3A 1C1
                </div>
              </div>
              <a 
                href="mailto:info@gojitech.co" 
                className="flex items-center text-dark-600 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@gojitech.co
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-dark-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Goji Technology Systems Inc. All rights reserved
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/goji-tech/posts/?feedView=all" 
                className="w-10 h-10 bg-dark-300 rounded-lg flex items-center justify-center text-dark-600 hover:bg-accent hover:text-dark-100 transition-all duration-300"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-dark-300 rounded-lg flex items-center justify-center text-dark-600 hover:bg-accent hover:text-dark-100 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
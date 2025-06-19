
import { Link } from 'react-router-dom';
import { Heart, Mail, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-healthcare-trust p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-healthcare-trust">HealthMate AI</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Your trusted AI-powered healthcare companion. Get symptom analysis, treatment suggestions, 
              and book appointments with healthcare professionals.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Medical Disclaimer</p>
                  <p className="text-xs text-yellow-700 mt-1">
                    This service is not a replacement for professional medical advice, 
                    diagnosis, or treatment. Always consult a healthcare provider.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/symptom-checker" className="text-gray-600 hover:text-healthcare-trust">Symptom Checker</Link></li>
              <li><Link to="/treatment-suggestions" className="text-gray-600 hover:text-healthcare-trust">Treatments</Link></li>
              <li><Link to="/book-appointment" className="text-gray-600 hover:text-healthcare-trust">Book Appointment</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-healthcare-trust">Dashboard</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-healthcare-trust">About Us</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-healthcare-trust">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-healthcare-trust">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-healthcare-trust">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 HealthMate AI. All rights reserved. | 
            <Link to="/privacy-policy" className="ml-1 hover:text-healthcare-trust">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

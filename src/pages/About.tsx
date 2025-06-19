
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Target, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every feature is designed with your health and wellbeing as our top priority."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your health data is protected with industry-leading security measures and encryption."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Healthcare guidance should be available to everyone, anytime, anywhere."
    },
    {
      icon: Award,
      title: "Medical Excellence",
      description: "Our AI is trained on evidence-based medical knowledge and continuously updated."
    }
  ];

  const team = [
    {
      name: "Dr. Amanda Roberts",
      role: "Chief Medical Officer",
      image: "👩‍⚕️",
      credentials: "MD, Internal Medicine • 20 years experience"
    },
    {
      name: "Sarah Chen",
      role: "AI Research Director",
      image: "👩‍💻",
      credentials: "PhD Computer Science • Former Google Health"
    },
    {
      name: "Michael Johnson",
      role: "Product Director",
      image: "👨‍💼",
      credentials: "Healthcare Technology • 15 years experience"
    },
    {
      name: "Dr. James Wilson",
      role: "Medical Advisor",
      image: "👨‍⚕️",
      credentials: "MD, Emergency Medicine • Mayo Clinic"
    }
  ];

  const stats = [
    { number: "500K+", label: "Patients Helped" },
    { number: "98.5%", label: "Accuracy Rate" },
    { number: "24/7", label: "Available" },
    { number: "150+", label: "Medical Conditions" }
  ];

  const features = [
    "AI-powered symptom analysis using medical-grade algorithms",
    "Evidence-based treatment recommendations",
    "Seamless appointment booking with verified providers",
    "Secure, HIPAA-compliant data handling",
    "24/7 availability for health guidance",
    "Multilingual support for diverse communities"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-healthcare-blue-50 to-healthcare-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Healthcare with{' '}
            <span className="text-healthcare-trust">AI Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            HealthMate AI combines cutting-edge artificial intelligence with medical expertise 
            to provide accessible, reliable, and personalized healthcare guidance for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/symptom-checker">
              <Button size="lg" className="bg-healthcare-trust hover:bg-healthcare-blue-700">
                Try Our AI Assistant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-healthcare-trust mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe everyone deserves access to quality healthcare guidance. HealthMate AI 
                bridges the gap between patients and healthcare by providing instant, accurate, 
                and personalized health insights powered by advanced artificial intelligence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform empowers you to make informed decisions about your health while 
                connecting you with qualified healthcare professionals when needed.
              </p>
              <div className="flex items-center space-x-2 text-healthcare-trust">
                <Target className="h-6 w-6" />
                <span className="font-semibold">Making healthcare accessible, intelligent, and human.</span>
              </div>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-healthcare-wellness mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-healthcare-blue-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-healthcare-trust" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of medical professionals, AI researchers, and healthcare technology experts 
              work together to create the best possible experience for our users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-healthcare-trust font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.credentials}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced AI Technology</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our AI system is built on state-of-the-art machine learning models trained on 
                vast medical datasets, peer-reviewed research, and clinical guidelines from 
                leading medical institutions worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-healthcare-trust p-1 rounded-full mt-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Medical-Grade Accuracy</h4>
                    <p className="text-gray-600">Validated against clinical standards with 98.5% accuracy rate</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-healthcare-trust p-1 rounded-full mt-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                    <p className="text-gray-600">AI models updated regularly with latest medical research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-healthcare-trust p-1 rounded-full mt-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Privacy-First Design</h4>
                    <p className="text-gray-600">All processing happens with end-to-end encryption</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-healthcare-blue-50 to-healthcare-green-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="bg-healthcare-trust p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Built for Healthcare</h3>
                <p className="text-gray-600 mb-6">
                  Every algorithm is designed specifically for medical applications, 
                  ensuring the highest standards of safety and reliability.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-healthcare-trust">150+ Conditions</div>
                    <div className="text-sm text-gray-600">Comprehensive coverage</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-healthcare-trust">Sub-second Response</div>
                    <div className="text-sm text-gray-600">Instant analysis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-healthcare-trust">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future of Healthcare?
          </h2>
          <p className="text-xl text-healthcare-blue-100 mb-8">
            Join thousands of users who trust HealthMate AI for their health concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/symptom-checker">
              <Button size="lg" variant="secondary">
                Start Your Health Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-trust">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;


import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Calendar, 
  Shield, 
  User, 
  CheckCircle, 
  Clock, 
  Stethoscope,
  ArrowRight 
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "AI Symptom Checker",
      description: "Advanced AI analysis of your symptoms with personalized health insights and recommendations."
    },
    {
      icon: Heart,
      title: "Treatment Guidance",
      description: "Get evidence-based treatment suggestions and first-aid guidance for common health issues."
    },
    {
      icon: Calendar,
      title: "Easy Appointments",
      description: "Book appointments with verified healthcare professionals in your area with just a few clicks."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your health data is encrypted and secure. We never share your personal information."
    }
  ];

  const stats = [
    { number: "500K+", label: "Users Helped" },
    { number: "98%", label: "Accuracy Rate" },
    { number: "24/7", label: "Available" },
    { number: "50+", label: "Conditions" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-healthcare-blue-50 to-healthcare-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Personal{' '}
                <span className="text-healthcare-trust">AI Health</span>{' '}
                Companion
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get instant symptom analysis, personalized treatment suggestions, 
                and connect with healthcare professionals - all powered by advanced AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/symptom-checker">
                  <Button size="lg" className="bg-healthcare-trust hover:bg-healthcare-blue-700 text-lg px-8 py-3">
                    Start Symptom Check
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-healthcare-wellness" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-healthcare-wellness" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-healthcare-wellness" />
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-in">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-healthcare-blue-200">
                <div className="text-center mb-6">
                  <div className="bg-healthcare-trust p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Quick Health Check</h3>
                  <p className="text-gray-600">Tell us how you're feeling</p>
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-left">
                    <span className="mr-3">🤒</span> I have a fever and headache
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <span className="mr-3">😷</span> Cold and flu symptoms
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <span className="mr-3">🤕</span> Minor injury or pain
                  </Button>
                </div>
                <Link to="/symptom-checker">
                  <Button className="w-full mt-4 bg-healthcare-trust hover:bg-healthcare-blue-700">
                    Start Full Assessment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-healthcare-trust mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthMate AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with medical expertise 
              to provide you with reliable health insights and seamless care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="bg-healthcare-blue-50 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-healthcare-trust" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-healthcare-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Health?
          </h2>
          <p className="text-xl text-healthcare-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust HealthMate AI for their health concerns. 
            Start your symptom assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/symptom-checker">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Symptom Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-healthcare-trust">
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

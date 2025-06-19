
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight, Heart, Shield, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "San Francisco, CA",
      rating: 5,
      title: "Life-changing health guidance",
      content: "HealthMate AI helped me understand my symptoms when I was worried about visiting the doctor during the pandemic. The AI analysis was spot-on and gave me the confidence to seek the right care at the right time.",
      condition: "Respiratory symptoms",
      avatar: "👩"
    },
    {
      id: 2,
      name: "Michael R.",
      location: "Austin, TX", 
      rating: 5,
      title: "Accurate and reassuring",
      content: "As someone with anxiety about health issues, HealthMate AI provides the reassurance I need. The symptom checker is incredibly accurate and the treatment suggestions are always helpful and evidence-based.",
      condition: "Anxiety-related symptoms",
      avatar: "👨"
    },
    {
      id: 3,
      name: "Dr. Jennifer L.",
      location: "New York, NY",
      rating: 5,
      title: "Impressive medical accuracy",
      content: "As a practicing physician, I'm impressed by the medical accuracy of HealthMate AI. It's a valuable tool that helps patients make informed decisions and know when to seek professional care.",
      condition: "Healthcare Professional",
      avatar: "👩‍⚕️"
    },
    {
      id: 4,
      name: "Carlos D.",
      location: "Miami, FL",
      rating: 5,
      title: "Convenient appointment booking",
      content: "The appointment booking feature is fantastic. I was able to find and book with a great doctor in my area within minutes. The whole process was smooth and professional.",
      condition: "Routine check-up",
      avatar: "👨"
    },
    {
      id: 5,
      name: "Lisa K.",
      location: "Seattle, WA",
      rating: 5,
      title: "24/7 peace of mind",
      content: "Having access to reliable health guidance 24/7 is invaluable, especially as a parent. HealthMate AI has helped me handle my children's minor health concerns with confidence.",
      condition: "Pediatric concerns",
      avatar: "👩"
    },
    {
      id: 6,
      name: "Robert H.",
      location: "Denver, CO",
      rating: 4,
      title: "Great for chronic conditions",
      content: "Managing my diabetes is easier with HealthMate AI. The platform helps me track symptoms and understand when changes in my condition might need medical attention.",
      condition: "Diabetes management",
      avatar: "👨"
    },
    {
      id: 7,
      name: "Amanda T.",
      location: "Chicago, IL",
      rating: 5,
      title: "Excellent user experience",
      content: "The interface is so user-friendly and the AI responses are incredibly detailed. I appreciate how it always reminds me that it's not a replacement for professional medical advice.",
      condition: "General health queries",
      avatar: "👩"
    },
    {
      id: 8,
      name: "David W.",
      location: "Phoenix, AZ",
      rating: 5,
      title: "Saved me time and money",
      content: "HealthMate AI helped me determine that my symptoms didn't require an immediate ER visit. Instead, I was able to schedule a routine appointment and address my concerns appropriately.",
      condition: "Chest discomfort",
      avatar: "👨"
    }
  ];

  const stats = [
    { number: "4.9/5", label: "Average Rating" },
    { number: "500K+", label: "Happy Users" },
    { number: "98%", label: "Would Recommend" },
    { number: "24/7", label: "Support Available" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-healthcare-blue-50 to-healthcare-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say About{' '}
            <span className="text-healthcare-trust">HealthMate AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Real stories from real people who have transformed their healthcare experience 
            with our AI-powered platform.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-healthcare-wellness" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-healthcare-wellness" />
              <span>Medically Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-healthcare-wellness" />
              <span>500K+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold text-healthcare-trust mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Users
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From symptom checking to appointment booking, see how HealthMate AI 
              has made a difference in people's healthcare journeys.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">
                    "{testimonial.title}"
                  </h4>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-6 w-6 text-healthcare-blue-200" />
                    <p className="text-gray-600 leading-relaxed pl-4">
                      {testimonial.content}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-healthcare-trust font-medium">
                      Used for: {testimonial.condition}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Professional Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-healthcare-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Endorsed by Healthcare Professionals
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  HealthMate AI is trusted and recommended by doctors, nurses, and 
                  healthcare professionals worldwide for its accuracy and reliability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-healthcare-trust p-1 rounded-full mt-1">
                      <Heart className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Clinically Validated</p>
                      <p className="text-gray-600 text-sm">Algorithms tested against medical standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-healthcare-trust p-1 rounded-full mt-1">
                      <Shield className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Evidence-Based</p>
                      <p className="text-gray-600 text-sm">Recommendations based on peer-reviewed research</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-healthcare-trust p-1 rounded-full mt-1">
                      <Users className="h-3 w-3 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Physician Approved</p>
                      <p className="text-gray-600 text-sm">Developed with input from medical experts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">👨‍⚕️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dr. Mark Stevens</h3>
                    <p className="text-sm text-healthcare-trust">Chief of Internal Medicine</p>
                    <p className="text-xs text-gray-600">Johns Hopkins Hospital</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(5)}
                </div>
                <p className="text-gray-600 italic">
                  "HealthMate AI represents the future of patient-centered care. 
                  It empowers patients with accurate information while appropriately 
                  directing them to seek professional care when needed."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-healthcare-trust">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Thousands of Satisfied Users
          </h2>
          <p className="text-xl text-healthcare-blue-100 mb-8">
            Experience the future of healthcare with AI-powered symptom checking 
            and personalized health guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/symptom-checker">
              <Button size="lg" variant="secondary">
                Start Your Health Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/book-appointment">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-trust">
                Book Appointment
              </Button>
            </Link>
          </div>
          <p className="text-sm text-healthcare-blue-100 mt-6">
            Free to start • No credit card required • HIPAA compliant
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;

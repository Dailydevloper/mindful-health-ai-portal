
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Heart,
  Shield,
  Users
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      details: "support@healthmateai.com",
      description: "Get help with technical issues and account questions"
    },
    {
      icon: Phone,
      title: "Phone Support", 
      details: "1-800-HEALTH-AI",
      description: "Speak with our support team Monday-Friday, 9 AM - 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: "123 Health Tech Blvd, Suite 400\nSan Francisco, CA 94105",
      description: "Visit our main office for partnership inquiries"
    },
    {
      icon: Clock,
      title: "AI Support",
      details: "24/7 Available",
      description: "Our AI assistant is always available for symptom checking"
    }
  ];

  const supportCategories = [
    { value: 'technical', label: 'Technical Support' },
    { value: 'medical', label: 'Medical Questions' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  const features = [
    {
      icon: MessageCircle,
      title: "Quick Response",
      description: "Average response time under 4 hours during business days"
    },
    {
      icon: Heart,
      title: "Caring Support",
      description: "Our team understands the importance of your health concerns"
    },
    {
      icon: Shield,
      title: "Secure Communication",
      description: "All communications are encrypted and HIPAA compliant"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about HealthMate AI? Need technical support? 
            Our team is here to help you get the most out of your healthcare experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-6 w-6 text-healthcare-trust" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                    >
                      <option value="">Select a category</option>
                      {supportCategories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your question or concern..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> For medical emergencies, please call 911 or visit your nearest emergency room. 
                      This contact form is not for urgent medical situations.
                    </p>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-healthcare-trust hover:bg-healthcare-blue-700"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-healthcare-blue-50 p-2 rounded-lg">
                      <info.icon className="h-5 w-5 text-healthcare-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-healthcare-trust font-medium whitespace-pre-line">{info.details}</p>
                      <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Contact Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-healthcare-green-50 p-2 rounded-lg">
                      <feature.icon className="h-4 w-4 text-healthcare-wellness" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Is HealthMate AI a replacement for my doctor?</h4>
                  <p className="text-gray-600 text-sm">
                    No, HealthMate AI is designed to complement professional medical care, not replace it. 
                    We provide guidance and help you understand when to seek professional care.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How accurate is the AI symptom checker?</h4>
                  <p className="text-gray-600 text-sm">
                    Our AI has a 98.5% accuracy rate when validated against clinical standards. 
                    However, always consult healthcare professionals for serious concerns.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Is my health data secure?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we use industry-leading encryption and are fully HIPAA compliant. 
                    Your data is never shared without your explicit consent.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How much does HealthMate AI cost?</h4>
                  <p className="text-gray-600 text-sm">
                    Basic symptom checking is free. Premium features and appointment booking 
                    may have associated costs depending on your healthcare provider.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Can I use this for emergency situations?</h4>
                  <p className="text-gray-600 text-sm">
                    No, HealthMate AI is not designed for emergencies. For life-threatening 
                    situations, call 911 or visit your nearest emergency room immediately.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">What devices can I use HealthMate AI on?</h4>
                  <p className="text-gray-600 text-sm">
                    HealthMate AI works on any device with a web browser - desktop, tablet, 
                    or mobile phone. We also have dedicated mobile apps available.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

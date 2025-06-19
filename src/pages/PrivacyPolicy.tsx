
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Users, FileText, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "December 20, 2024";
  
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, email address, and phone number when you create an account",
            "Age, gender, and basic demographic information for health analysis",
            "Medical symptoms and health concerns you share with our AI",
            "Appointment booking information and healthcare preferences"
          ]
        },
        {
          subtitle: "Technical Information",
          items: [
            "Device information, IP address, and browser type",
            "Usage data including pages visited and features used",
            "Log files and analytics data for service improvement",
            "Cookies and similar tracking technologies"
          ]
        }
      ]
    },
    {
      icon: Users,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Primary Uses",
          items: [
            "Provide AI-powered symptom analysis and health guidance",
            "Connect you with appropriate healthcare providers",
            "Improve our AI algorithms and service accuracy",
            "Send important updates about your health consultations"
          ]
        },
        {
          subtitle: "Service Enhancement",
          items: [
            "Analyze usage patterns to improve user experience",
            "Develop new features and healthcare capabilities",
            "Conduct research to advance medical AI technology",
            "Provide customer support and technical assistance"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "End-to-end encryption for all health data transmission",
            "HIPAA-compliant data storage and processing systems",
            "Regular security audits and penetration testing",
            "Multi-factor authentication for account access"
          ]
        },
        {
          subtitle: "Data Minimization",
          items: [
            "We collect only the minimum data necessary for our services",
            "Health data is anonymized for AI training purposes",
            "Personal identifiers are separated from medical data",
            "Automatic deletion of temporary data after analysis"
          ]
        }
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        {
          subtitle: "We Do NOT Share",
          items: [
            "Your personal health information with third parties for marketing",
            "Individual medical data with insurance companies",
            "Identifiable information with advertisers or data brokers",
            "Health records with employers or government agencies (except as required by law)"
          ]
        },
        {
          subtitle: "Limited Sharing",
          items: [
            "Healthcare providers you choose to book appointments with",
            "Emergency services if there's immediate danger to health",
            "Legal authorities when required by court order",
            "Service providers under strict confidentiality agreements"
          ]
        }
      ]
    }
  ];

  const userRights = [
    {
      title: "Access Your Data",
      description: "Request a copy of all personal information we have about you"
    },
    {
      title: "Correct Information",
      description: "Update or correct any inaccurate personal information"
    },
    {
      title: "Delete Your Account",
      description: "Request complete deletion of your account and associated data"
    },
    {
      title: "Data Portability",
      description: "Export your health data in a machine-readable format"
    },
    {
      title: "Opt-Out",
      description: "Withdraw consent for data processing at any time"
    },
    {
      title: "Restrict Processing",
      description: "Limit how we use your data for specific purposes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-healthcare-trust p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 mb-4">
            Your privacy and data security are our highest priorities
          </p>
          <p className="text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Trust Banner */}
        <div className="bg-healthcare-blue-50 border border-healthcare-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <Shield className="h-8 w-8 text-healthcare-trust mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-healthcare-trust mb-2">
                HIPAA Compliant & Secure
              </h3>
              <p className="text-gray-700 leading-relaxed">
                HealthMate AI is fully compliant with HIPAA regulations and uses industry-leading 
                security measures to protect your health information. Your data is encrypted, 
                anonymized for AI training, and never sold to third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At HealthMate AI, we understand that your health information is deeply personal and sensitive. 
              This Privacy Policy explains how we collect, use, protect, and share your information when you 
              use our AI-powered healthcare platform.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are committed to transparency and giving you control over your personal information. 
              This policy applies to all users of HealthMate AI services, including our website, 
              mobile applications, and any related services.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> By using HealthMate AI, you agree to the collection and use of 
                information in accordance with this policy. If you do not agree with our policies and 
                practices, please do not use our services.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <Card key={index} className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="bg-healthcare-blue-50 p-2 rounded-lg">
                  <section.icon className="h-6 w-6 text-healthcare-trust" />
                </div>
                <span>{section.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {section.content.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-gray-900 mb-3">{subsection.subtitle}</h4>
                  <ul className="space-y-2">
                    {subsection.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <div className="bg-healthcare-trust p-1 rounded-full mt-1.5 flex-shrink-0">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="bg-healthcare-blue-50 p-2 rounded-lg">
                <Users className="h-6 w-6 text-healthcare-trust" />
              </div>
              <span>Your Rights & Controls</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              You have several rights regarding your personal information. You can exercise these rights 
              by contacting us at privacy@healthmateai.com or through your account settings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {userRights.map((right, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{right.title}</h4>
                  <p className="text-sm text-gray-600">{right.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Retention */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="bg-healthcare-blue-50 p-2 rounded-lg">
                <Clock className="h-6 w-6 text-healthcare-trust" />
              </div>
              <span>Data Retention</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Account Information</h4>
                <p className="text-gray-600">
                  We retain your account information for as long as your account is active or as needed 
                  to provide you services. You can delete your account at any time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Health Data</h4>
                <p className="text-gray-600">
                  Health consultation data is retained for 7 years as required by medical record standards. 
                  However, you can request earlier deletion of specific consultations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Data</h4>
                <p className="text-gray-600">
                  Log files and technical data are automatically deleted after 90 days unless needed 
                  for security or legal purposes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Children's Privacy</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              HealthMate AI is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you are a parent or guardian 
              and believe your child has provided us with personal information, please contact us.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For users between 13-18 years old, we require parental consent before collecting any 
              health information. Parents can review, modify, or delete their child's information 
              at any time.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-600">
              <p><strong>Email:</strong> privacy@healthmateai.com</p>
              <p><strong>Phone:</strong> 1-800-HEALTH-AI</p>
              <p><strong>Mail:</strong> HealthMate AI Privacy Office<br />
                 123 Health Tech Blvd, Suite 400<br />
                 San Francisco, CA 94105
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any material 
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We encourage you to review this Privacy Policy periodically to stay informed about how 
              we are protecting your information. Your continued use of our services after any changes 
              indicates your acceptance of the updated policy.
            </p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

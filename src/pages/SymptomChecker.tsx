
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { 
  AlertTriangle, 
  CheckCircle, 
  User, 
  Calendar, 
  Stethoscope,
  ArrowRight,
  ArrowLeft,
  Shield
} from 'lucide-react';

const SymptomChecker = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    symptoms: '',
    duration: '',
    severity: '',
    additionalInfo: ''
  });
  const [results, setResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const analyzeSymptoms = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis (in real app, this would call your AI service)
    setTimeout(() => {
      const mockResults = {
        possibleConditions: [
          {
            name: "Common Cold",
            probability: 75,
            description: "A viral infection of the upper respiratory tract",
            recommendations: [
              "Rest and stay hydrated",
              "Use over-the-counter pain relievers if needed",
              "Consider warm salt water gargles for sore throat"
            ]
          },
          {
            name: "Seasonal Allergies",
            probability: 45,
            description: "Allergic reaction to environmental allergens",
            recommendations: [
              "Avoid known allergens",
              "Consider antihistamines",
              "Use nasal saline rinses"
            ]
          },
          {
            name: "Stress/Fatigue",
            probability: 30,
            description: "Physical manifestation of stress or exhaustion",
            recommendations: [
              "Ensure adequate sleep",
              "Practice stress management techniques",
              "Consider gentle exercise"
            ]
          }
        ],
        urgencyLevel: "Low",
        nextSteps: [
          "Monitor symptoms for 24-48 hours",
          "Consult a healthcare provider if symptoms worsen",
          "Consider scheduling a routine check-up"
        ]
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-6 w-6 text-healthcare-trust" />
                <span>Basic Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Stethoscope className="h-6 w-6 text-healthcare-trust" />
                <span>Symptoms Description</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="symptoms">What symptoms are you experiencing?</Label>
                <Textarea
                  id="symptoms"
                  placeholder="Describe your symptoms in detail (e.g., headache, fever, cough, fatigue...)"
                  value={formData.symptoms}
                  onChange={(e) => handleInputChange('symptoms', e.target.value)}
                  rows={4}
                />
              </div>
              <div>
                <Label htmlFor="severity">How severe are your symptoms?</Label>
                <select
                  id="severity"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.severity}
                  onChange={(e) => handleInputChange('severity', e.target.value)}
                >
                  <option value="">Select severity</option>
                  <option value="mild">Mild - Minor discomfort</option>
                  <option value="moderate">Moderate - Noticeable discomfort</option>
                  <option value="severe">Severe - Significant discomfort</option>
                  <option value="very-severe">Very Severe - Debilitating</option>
                </select>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-healthcare-trust" />
                <span>Timeline & Additional Info</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="duration">How long have you had these symptoms?</Label>
                <select
                  id="duration"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.duration}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                >
                  <option value="">Select duration</option>
                  <option value="few-hours">A few hours</option>
                  <option value="1-day">1 day</option>
                  <option value="2-3-days">2-3 days</option>
                  <option value="1-week">About a week</option>
                  <option value="few-weeks">A few weeks</option>
                  <option value="month-or-more">A month or more</option>
                </select>
              </div>
              <div>
                <Label htmlFor="additionalInfo">Any additional information?</Label>
                <Textarea
                  id="additionalInfo"
                  placeholder="Any medications, allergies, recent travel, or other relevant information..."
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Review & Analyze</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Summary of your information:</h4>
                  <p><strong>Age:</strong> {formData.age}</p>
                  <p><strong>Gender:</strong> {formData.gender}</p>
                  <p><strong>Symptoms:</strong> {formData.symptoms}</p>
                  <p><strong>Severity:</strong> {formData.severity}</p>
                  <p><strong>Duration:</strong> {formData.duration}</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">Important Disclaimer</p>
                      <p className="text-xs text-blue-700 mt-1">
                        This AI analysis is for informational purposes only and should not replace 
                        professional medical advice. Always consult with a healthcare provider for 
                        serious concerns.
                      </p>
                    </div>
                  </div>
                </div>

                {!isAnalyzing && !results && (
                  <Button 
                    onClick={analyzeSymptoms}
                    className="w-full bg-healthcare-trust hover:bg-healthcare-blue-700"
                    size="lg"
                  >
                    Analyze Symptoms with AI
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                )}

                {isAnalyzing && (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-healthcare-trust mx-auto mb-4"></div>
                    <p className="text-lg font-medium">Analyzing your symptoms...</p>
                    <p className="text-gray-600">Our AI is processing your information</p>
                  </div>
                )}

                {results && (
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Analysis Complete</h4>
                      <p className="text-green-700">Urgency Level: <strong>{results.urgencyLevel}</strong></p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Possible Conditions:</h4>
                      {results.possibleConditions.map((condition, index) => (
                        <Card key={index} className="mb-3">
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h5 className="font-medium">{condition.name}</h5>
                              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                {condition.probability}% match
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-3">{condition.description}</p>
                            <div>
                              <p className="text-sm font-medium mb-1">Recommendations:</p>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {condition.recommendations.map((rec, i) => (
                                  <li key={i} className="flex items-start space-x-2">
                                    <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span>{rec}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Next Steps:</h4>
                      <ul className="space-y-2">
                        {results.nextSteps.map((step, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-healthcare-wellness mt-0.5 flex-shrink-0" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <Button className="flex-1 bg-healthcare-trust hover:bg-healthcare-blue-700">
                        Book Appointment
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Save Results
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Symptom Checker</h1>
          <p className="text-gray-600">Get personalized health insights based on your symptoms</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep} of {totalSteps}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
        </div>

        {/* Form Content */}
        <div className="mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        {!results && (
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>
            
            {currentStep < totalSteps && (
              <Button
                onClick={nextStep}
                className="bg-healthcare-trust hover:bg-healthcare-blue-700 flex items-center space-x-2"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SymptomChecker;

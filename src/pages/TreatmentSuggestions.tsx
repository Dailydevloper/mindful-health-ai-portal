
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Thermometer, 
  Shield, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Search
} from 'lucide-react';

const TreatmentSuggestions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Conditions' },
    { id: 'respiratory', name: 'Respiratory' },
    { id: 'digestive', name: 'Digestive' },
    { id: 'pain', name: 'Pain & Injury' },
    { id: 'skin', name: 'Skin Conditions' },
    { id: 'fever', name: 'Fever & Flu' }
  ];

  const treatments = [
    {
      id: 1,
      condition: "Common Cold",
      category: "respiratory",
      severity: "mild",
      symptoms: ["Runny nose", "Sneezing", "Mild cough", "Congestion"],
      treatments: [
        {
          type: "Immediate Care",
          actions: [
            "Rest and get plenty of sleep",
            "Stay hydrated with water, herbal teas, and clear broths",
            "Use a humidifier or breathe steam from a hot shower",
            "Gargle with warm salt water for sore throat"
          ]
        },
        {
          type: "Over-the-Counter",
          actions: [
            "Pain relievers like acetaminophen or ibuprofen",
            "Decongestants for nasal congestion",
            "Cough drops or throat lozenges",
            "Saline nasal sprays"
          ]
        },
        {
          type: "Natural Remedies",
          actions: [
            "Honey for cough relief (not for children under 1 year)",
            "Warm lemon water with honey",
            "Chicken soup for hydration and comfort",
            "Echinacea or vitamin C supplements"
          ]
        }
      ],
      whenToSeek: "See a doctor if symptoms worsen after 7-10 days, fever exceeds 101.3°F, or breathing difficulties occur.",
      duration: "7-10 days"
    },
    {
      id: 2,
      condition: "Headache",
      category: "pain",
      severity: "mild",
      symptoms: ["Head pain", "Tension", "Light sensitivity"],
      treatments: [
        {
          type: "Immediate Relief",
          actions: [
            "Rest in a quiet, dark room",
            "Apply cold or warm compress to head/neck",
            "Practice deep breathing or relaxation techniques",
            "Gently massage temples and neck"
          ]
        },
        {
          type: "Medication",
          actions: [
            "Over-the-counter pain relievers (acetaminophen, ibuprofen)",
            "Follow dosage instructions carefully",
            "Avoid overuse to prevent rebound headaches"
          ]
        },
        {
          type: "Prevention",
          actions: [
            "Stay hydrated throughout the day",
            "Maintain regular sleep schedule",
            "Manage stress levels",
            "Avoid known triggers (certain foods, bright lights)"
          ]
        }
      ],
      whenToSeek: "Seek immediate care for sudden severe headache, headache with fever/stiff neck, or changes in vision.",
      duration: "Few hours to 1 day"
    },
    {
      id: 3,
      condition: "Minor Cuts & Scrapes",
      category: "pain",
      severity: "mild",
      symptoms: ["Bleeding", "Pain", "Skin break"],
      treatments: [
        {
          type: "Immediate First Aid",
          actions: [
            "Clean your hands thoroughly before treating",
            "Stop bleeding by applying gentle pressure with clean cloth",
            "Clean the wound with water (avoid hydrogen peroxide on open wounds)",
            "Apply antibiotic ointment if available"
          ]
        },
        {
          type: "Wound Care",
          actions: [
            "Cover with sterile bandage or adhesive bandage",
            "Keep the wound clean and dry",
            "Change dressing daily or when it becomes wet/dirty",
            "Monitor for signs of infection"
          ]
        },
        {
          type: "Healing Support",
          actions: [
            "Keep wound moist with petroleum jelly",
            "Protect from sun exposure",
            "Eat foods rich in vitamin C and protein",
            "Get adequate rest for healing"
          ]
        }
      ],
      whenToSeek: "See a doctor if wound is deep, won't stop bleeding, shows signs of infection, or if tetanus shot is needed.",
      duration: "3-14 days depending on size"
    },
    {
      id: 4,
      condition: "Upset Stomach",
      category: "digestive",
      severity: "mild",
      symptoms: ["Nausea", "Stomach pain", "Bloating"],
      treatments: [
        {
          type: "Dietary Approach",
          actions: [
            "Follow BRAT diet (Bananas, Rice, Applesauce, Toast)",
            "Eat small, frequent meals",
            "Avoid dairy, fatty, and spicy foods",
            "Stay hydrated with clear fluids"
          ]
        },
        {
          type: "Natural Remedies",
          actions: [
            "Ginger tea or ginger chews for nausea",
            "Peppermint tea for digestive comfort",
            "Chamomile tea for stomach soothing",
            "Probiotic foods like yogurt (when tolerated)"
          ]
        },
        {
          type: "Comfort Measures",
          actions: [
            "Apply warm compress to stomach",
            "Rest and avoid strenuous activity",
            "Practice relaxation techniques",
            "Avoid tobacco and alcohol"
          ]
        }
      ],
      whenToSeek: "Contact healthcare provider for severe pain, persistent vomiting, signs of dehydration, or blood in vomit/stool.",
      duration: "1-3 days"
    }
  ];

  const filteredTreatments = treatments.filter(treatment => {
    const matchesSearch = treatment.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         treatment.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || treatment.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'severe': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Treatment Suggestions</h1>
          <p className="text-gray-600">Evidence-based guidance for common health conditions</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-yellow-800">Important Medical Disclaimer</p>
              <p className="text-sm text-yellow-700 mt-1">
                These suggestions are for informational purposes only and should not replace professional medical advice. 
                Always consult with a healthcare provider for proper diagnosis and treatment, especially for persistent or severe symptoms.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search conditions or symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-healthcare-trust hover:bg-healthcare-blue-700" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Treatment Cards */}
        <div className="space-y-6">
          {filteredTreatments.map((treatment) => (
            <Card key={treatment.id} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-900 mb-2">{treatment.condition}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(treatment.severity)}`}>
                        {treatment.severity.charAt(0).toUpperCase() + treatment.severity.slice(1)}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {treatment.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{treatment.duration}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Common symptoms:</p>
                  <div className="flex flex-wrap gap-1">
                    {treatment.symptoms.map((symptom, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {treatment.treatments.map((treatmentType, index) => (
                    <div key={index} className="space-y-3">
                      <h4 className="font-semibold text-healthcare-trust flex items-center space-x-2">
                        <Heart className="h-4 w-4" />
                        <span>{treatmentType.type}</span>
                      </h4>
                      <ul className="space-y-2">
                        {treatmentType.actions.map((action, actionIndex) => (
                          <li key={actionIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-healthcare-wellness mt-1 flex-shrink-0" />
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-red-800">When to Seek Professional Care</p>
                      <p className="text-sm text-red-700 mt-1">{treatment.whenToSeek}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTreatments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No treatments found matching your criteria.</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
          </div>
        )}

        {/* Emergency Notice */}
        <div className="mt-12 bg-red-100 border border-red-300 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Situations</h3>
          <p className="text-red-800 mb-4">
            For life-threatening emergencies including severe chest pain, difficulty breathing, 
            severe allergic reactions, or major injuries, call emergency services immediately.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="destructive" size="lg">
              Call 911
            </Button>
            <Button variant="outline" size="lg">
              Find Emergency Room
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TreatmentSuggestions;

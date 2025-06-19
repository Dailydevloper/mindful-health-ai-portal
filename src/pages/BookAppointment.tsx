
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
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  Phone, 
  Mail,
  Stethoscope,
  CheckCircle,
  Star
} from 'lucide-react';

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    insurance: ''
  });
  const { toast } = useToast();

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Family Medicine",
      rating: 4.9,
      reviews: 127,
      experience: "15 years",
      location: "Downtown Medical Center",
      image: "👩‍⚕️",
      availableSlots: ["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM", "4:45 PM"],
      nextAvailable: "Today"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Internal Medicine",
      rating: 4.8,
      reviews: 89,
      experience: "12 years",
      location: "Central Health Clinic",
      image: "👨‍⚕️",
      availableSlots: ["8:30 AM", "11:00 AM", "1:15 PM", "4:00 PM"],
      nextAvailable: "Tomorrow"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Urgent Care",
      rating: 4.7,
      reviews: 156,
      experience: "8 years",
      location: "QuickCare Medical",
      image: "👩‍⚕️",
      availableSlots: ["9:15 AM", "12:30 PM", "2:45 PM", "5:00 PM"],
      nextAvailable: "Today"
    }
  ];

  const appointmentTypes = [
    { id: 'routine', name: 'Routine Check-up', duration: '30 min' },
    { id: 'follow-up', name: 'Follow-up Visit', duration: '20 min' },
    { id: 'urgent', name: 'Urgent Care', duration: '45 min' },
    { id: 'consultation', name: 'Consultation', duration: '60 min' },
    { id: 'physical', name: 'Physical Exam', duration: '45 min' }
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    if (!selectedDoctor || !selectedDate || !selectedTime || !appointmentType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your appointment.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Appointment Booked!",
      description: `Your appointment with ${selectedDoctor.name} has been confirmed for ${selectedDate} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedDoctor(null);
    setSelectedDate('');
    setSelectedTime('');
    setAppointmentType('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      reason: '',
      insurance: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
          <p className="text-gray-600">Connect with qualified healthcare professionals</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Doctor Selection */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Stethoscope className="h-6 w-6 text-healthcare-trust" />
                  <span>Select a Healthcare Provider</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        selectedDoctor?.id === doctor.id
                          ? 'border-healthcare-trust bg-healthcare-blue-50'
                          : 'border-gray-200 hover:border-healthcare-trust'
                      }`}
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{doctor.image}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                          <p className="text-healthcare-trust text-sm">{doctor.specialty}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm">{doctor.rating}</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600">{doctor.reviews} reviews</span>
                          </div>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <MapPin className="h-3 w-3" />
                              <span>{doctor.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <Clock className="h-3 w-3" />
                              <span>Next available: {doctor.nextAvailable}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Appointment Type */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Appointment Type</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {appointmentTypes.map((type) => (
                    <button
                      key={type.id}
                      className={`p-3 border rounded-lg text-left transition-all duration-200 ${
                        appointmentType === type.id
                          ? 'border-healthcare-trust bg-healthcare-blue-50 text-healthcare-trust'
                          : 'border-gray-200 hover:border-healthcare-trust'
                      }`}
                      onClick={() => setAppointmentType(type.id)}
                    >
                      <div className="font-medium">{type.name}</div>
                      <div className="text-sm text-gray-600">{type.duration}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Date and Time Selection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-healthcare-trust" />
                  <span>Select Date & Time</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label>Available Time Slots</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {(selectedDoctor?.availableSlots || timeSlots).map((time) => (
                        <button
                          key={time}
                          className={`p-2 border rounded text-sm transition-all duration-200 ${
                            selectedTime === time
                              ? 'border-healthcare-trust bg-healthcare-trust text-white'
                              : 'border-gray-200 hover:border-healthcare-trust'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-healthcare-trust" />
                  <span>Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="insurance">Insurance Provider</Label>
                  <select
                    id="insurance"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.insurance}
                    onChange={(e) => handleInputChange('insurance', e.target.value)}
                  >
                    <option value="">Select insurance</option>
                    <option value="aetna">Aetna</option>
                    <option value="blue-cross">Blue Cross Blue Shield</option>
                    <option value="cigna">Cigna</option>
                    <option value="humana">Humana</option>
                    <option value="medicare">Medicare</option>
                    <option value="medicaid">Medicaid</option>
                    <option value="self-pay">Self Pay</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="reason">Reason for Visit</Label>
                  <Textarea
                    id="reason"
                    placeholder="Brief description of your health concern..."
                    value={formData.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                    rows={3}
                  />
                </div>

                {/* Appointment Summary */}
                {selectedDoctor && selectedDate && selectedTime && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Appointment Summary</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>Doctor:</strong> {selectedDoctor.name}</p>
                      <p><strong>Date:</strong> {selectedDate}</p>
                      <p><strong>Time:</strong> {selectedTime}</p>
                      <p><strong>Type:</strong> {appointmentTypes.find(t => t.id === appointmentType)?.name}</p>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleBooking}
                  className="w-full bg-healthcare-trust hover:bg-healthcare-blue-700"
                  size="lg"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>

                <div className="text-xs text-gray-600 text-center">
                  By booking, you agree to our terms and privacy policy. 
                  You'll receive a confirmation email shortly.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;

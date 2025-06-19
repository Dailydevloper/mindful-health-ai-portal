
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  User, 
  Calendar, 
  FileText, 
  Heart, 
  Clock, 
  MapPin,
  Download,
  Eye,
  Bell
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Family Medicine",
      date: "Dec 28, 2024",
      time: "10:30 AM",
      location: "Downtown Medical Center",
      type: "Follow-up"
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Internal Medicine", 
      date: "Jan 5, 2025",
      time: "2:00 PM",
      location: "Central Health Clinic",
      type: "Routine Check-up"
    }
  ];

  const recentConsultations = [
    {
      id: 1,
      date: "Dec 20, 2024",
      symptoms: "Headache, fatigue, mild fever",
      aiAnalysis: "Likely viral infection - Common cold",
      recommendations: "Rest, hydration, monitor symptoms",
      status: "Completed"
    },
    {
      id: 2,
      date: "Dec 15, 2024", 
      symptoms: "Stomach pain, nausea",
      aiAnalysis: "Possible gastritis or food sensitivity",
      recommendations: "BRAT diet, avoid spicy foods",
      status: "Completed"
    },
    {
      id: 3,
      date: "Dec 10, 2024",
      symptoms: "Persistent cough, congestion",
      aiAnalysis: "Upper respiratory tract infection",
      recommendations: "Humidifier, warm fluids, rest",
      status: "Completed"
    }
  ];

  const healthMetrics = [
    { label: "Total Consultations", value: "12", change: "+3 this month" },
    { label: "Appointments Booked", value: "8", change: "+2 upcoming" },
    { label: "Health Score", value: "87%", change: "+5% improvement" },
    { label: "Last Check-up", value: "2 weeks ago", change: "On schedule" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Health Dashboard</h1>
          <p className="text-gray-600">Track your health journey and manage appointments</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {healthMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    <p className="text-xs text-healthcare-wellness">{metric.change}</p>
                  </div>
                  <div className="p-3 bg-healthcare-blue-50 rounded-full">
                    <Heart className="h-6 w-6 text-healthcare-trust" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', name: 'Overview', icon: User },
                { id: 'appointments', name: 'Appointments', icon: Calendar },
                { id: 'consultations', name: 'AI Consultations', icon: FileText }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-healthcare-trust text-healthcare-trust'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Calendar className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Appointment booked</p>
                      <p className="text-sm text-gray-600">Dr. Sarah Johnson - Dec 28</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">AI consultation completed</p>
                      <p className="text-sm text-gray-600">Headache symptoms analyzed</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-100 rounded-full">
                      <Bell className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Reminder set</p>
                      <p className="text-sm text-gray-600">Take medication at 8 PM</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Appointment */}
            <Card>
              <CardHeader>
                <CardTitle>Next Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-4">
                    <div className="bg-healthcare-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{upcomingAppointments[0].doctor}</h3>
                          <p className="text-sm text-healthcare-trust">{upcomingAppointments[0].specialty}</p>
                        </div>
                        <span className="bg-healthcare-trust text-white px-2 py-1 rounded text-xs">
                          {upcomingAppointments[0].type}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4 text-gray-600" />
                          <span>{upcomingAppointments[0].date} at {upcomingAppointments[0].time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-600" />
                          <span>{upcomingAppointments[0].location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-healthcare-trust hover:bg-healthcare-blue-700">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No upcoming appointments</p>
                    <Button className="mt-4 bg-healthcare-trust hover:bg-healthcare-blue-700">
                      Book Appointment
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'appointments' && (
          <Card>
            <CardHeader>
              <CardTitle>Your Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                          <span className="bg-healthcare-trust text-white px-2 py-1 rounded text-xs">
                            {appointment.type}
                          </span>
                        </div>
                        <p className="text-sm text-healthcare-trust mb-2">{appointment.specialty}</p>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{appointment.date} at {appointment.time}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{appointment.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                        <Button size="sm" variant="outline">
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === 'consultations' && (
          <Card>
            <CardHeader>
              <CardTitle>AI Consultation History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentConsultations.map((consultation) => (
                  <div key={consultation.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-medium text-gray-900">{consultation.date}</p>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {consultation.status}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Export
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Symptoms:</p>
                        <p className="text-sm text-gray-600">{consultation.symptoms}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">AI Analysis:</p>
                        <p className="text-sm text-gray-600">{consultation.aiAnalysis}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Recommendations:</p>
                        <p className="text-sm text-gray-600">{consultation.recommendations}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;

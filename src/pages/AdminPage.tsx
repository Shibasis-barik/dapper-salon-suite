import React, { useMemo, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Calendar, Users, Scissors, DollarSign, Plus, Edit, Search, Bell, LayoutGrid, User, TrendingUp, Clock, Star, MoreVertical, ChevronRight } from 'lucide-react';

// Black & Gold themed admin dashboard
export default function ModernAdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [query, setQuery] = useState('');

  const GOLD = '#d4af37';
  const CARD_BG = 'bg-[#0d0d0d]';
  const PANEL_BORDER = 'border-[#d4af37]/20';

  const stats = [
    { title: "Today's Appointments", value: '24', change: '+12%', trend: 'up', icon: Calendar },
    { title: 'Active Staff', value: '8', change: '2 on duty', trend: 'neutral', icon: Users },
    { title: 'Services Offered', value: '12', change: '3 popular', trend: 'neutral', icon: Scissors },
    { title: "Today's Revenue", value: '$1,250', change: '+8.2%', trend: 'up', icon: DollarSign },
  ];

  const appointments = [
    { id: 1, client: 'John Doe', service: 'Signature Haircut', staff: 'Arjun Patel', date: '2024-01-15', time: '10:00 AM', status: 'confirmed', rating: 5 },
    { id: 2, client: 'Jane Smith', service: 'Beard Grooming', staff: 'Rohit Sharma', date: '2024-01-15', time: '11:30 AM', status: 'pending', rating: null },
    { id: 3, client: 'Mike Johnson', service: 'Royal Shave', staff: 'Karan Mehta', date: '2024-01-15', time: '2:00 PM', status: 'confirmed', rating: 5 },
    { id: 4, client: 'Sarah Wilson', service: 'Hair Color', staff: 'Rhea Nair', date: '2024-01-16', time: '9:00 AM', status: 'confirmed', rating: 4 },
  ];

  const staff = [
    { id: 1, name: 'Arjun Patel', role: 'Master Barber', experience: 12, status: 'active', rating: 4.9, bookings: 156 },
    { id: 2, name: 'Rohit Sharma', role: 'Beard Specialist', experience: 8, status: 'active', rating: 4.8, bookings: 142 },
    { id: 3, name: 'Devika Rao', role: 'Senior Stylist', experience: 10, status: 'active', rating: 5.0, bookings: 198 },
    { id: 4, name: 'Karan Mehta', role: 'Razor Expert', experience: 7, status: 'on-leave', rating: 4.7, bookings: 127 },
  ];

  const services = [
    { id: 1, name: 'Signature Haircut', price: '$35', duration: '45 min', category: 'Hair', bookings: 89, trend: 'up' },
    { id: 2, name: 'Beard Grooming', price: '$25', duration: '30 min', category: 'Beard', bookings: 67, trend: 'up' },
    { id: 3, name: 'Royal Shave', price: '$40', duration: '60 min', category: 'Shave', bookings: 45, trend: 'down' },
  ];

  const filteredAppointments = useMemo(() => {
    if (!query) return appointments;
    const q = query.toLowerCase();
    return appointments.filter(a => a.client.toLowerCase().includes(q) || a.service.toLowerCase().includes(q) || a.staff.toLowerCase().includes(q));
  }, [query]);

  const statusConfig = {
    confirmed: { bg: 'bg-[#123a12]', text: 'text-[#d4f1d4]', dot: 'bg-[#2ecc71]' },
    pending: { bg: 'bg-[#3a2b12]', text: 'text-[#fff1d4]', dot: 'bg-[#f59e0b]' },
    cancelled: { bg: 'bg-[#3a1212]', text: 'text-[#ffd4d4]', dot: 'bg-[#ef4444]' },
  };

  return (
    <div className="min-h-screen bg-black text-[#d4af37]">
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6 p-6">
        {/* Sidebar */}
        <aside className={`col-span-12 lg:col-span-2 ${CARD_BG} rounded-2xl shadow-xl ${PANEL_BORDER} p-5 flex flex-col gap-6 sticky top-6 h-[calc(100vh-48px)]`}>
          <div className="flex items-center gap-3 pb-3 border-b border-[#d4af37]/8">
            <div className="rounded p-2.5 shadow-inner" style={{background: 'linear-gradient(135deg,#d4af37, #b5892f)'}}>
              <Scissors className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-bold text-white">Barbershop</div>
              <div className="text-xs text-[#c7b070]">Admin</div>
            </div>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col gap-2 mt-4">
              {[
                { key: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
                { key: 'appointments', icon: Calendar, label: 'Appointments' },
                { key: 'staff', icon: User, label: 'Staff' },
                { key: 'services', icon: Scissors, label: 'Services' },
              ].map(item => (
                <li key={item.key}>
                  <button
                    onClick={() => setActiveTab(item.key)}
                    className={`w-full text-left rounded-lg py-3 px-3 flex items-center gap-3 transition-all duration-150 ${activeTab===item.key ? 'bg-[#1a1a1a] text-white font-semibold shadow' : 'text-[#c7b070] hover:bg-[#111] hover:text-white'}`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 pt-3 border-t border-[#d4af37]/8">
            <Avatar className="w-10 h-10 ring-1 ring-[#d4af37]/20">
              <AvatarFallback className="bg-[#1b1b1b] text-white font-semibold">KM</AvatarFallback>
            </Avatar>
            <div>
              <div className="text-white text-sm font-medium">Kumar</div>
              <div className="text-xs text-[#c7b070]">Owner</div>
            </div>
            <div className="ml-auto">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-[#111]">
                <Bell className="w-4 h-4 text-[#c7b070]" />
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-12 lg:col-span-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">{activeTab === 'dashboard' ? 'Dashboard' : activeTab.charAt(0).toUpperCase()+activeTab.slice(1)}</h1>
              <p className="text-sm text-[#c7b070]">Welcome back — manage bookings, staff and services.</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c7b070] w-4 h-4" />
                <Input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search appointments, clients..."
                  className="w-72 pl-10 bg-[#0b0b0b] text-white border-[#d4af37]/10 rounded-lg"
                />
              </div>

              <Button className="bg-[#d4af37] text-black rounded-lg px-4 py-2 flex items-center" onClick={() => setActiveTab('appointments')}>
                <Plus className="w-4 h-4 mr-2" /> New Booking
              </Button>
            </div>
          </div>

          <div>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="hidden" />

              {/* DASHBOARD */}
              <TabsContent value="dashboard" className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {stats.map((s, idx) => (
                    <div key={idx} className={`${CARD_BG} rounded-2xl p-5 shadow-lg ${PANEL_BORDER}`}>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs text-[#c7b070]">{s.title}</div>
                          <div className="text-3xl font-bold text-white mt-1">{s.value}</div>
                          <div className="text-xs text-[#c7b070] mt-1">{s.change}</div>
                        </div>
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg,#d4af37, #b5892f)'}}>
                          <s.icon className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Today's schedule */}
                  <div className="lg:col-span-2">
                    <Card className={`${CARD_BG} ${PANEL_BORDER} rounded-2xl`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-white text-xl">Today's Schedule</CardTitle>
                            <CardDescription className="text-[#c7b070] mt-1">Upcoming appointments</CardDescription>
                          </div>
                          <Badge className="bg-[#111] text-[#d4af37] px-3 py-1">{appointments.length} bookings</Badge>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="space-y-3">
                          {appointments.map(a => (
                            <div key={a.id} className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${CARD_BG} ${PANEL_BORDER}`}>
                              <Avatar className="w-12 h-12 ring-1 ring-[#d4af37]/12">
                                <AvatarFallback className="bg-[#1b1b1b] text-white font-semibold">{a.client.split(' ').map(n=>n[0]).slice(0,2).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="font-semibold text-white">{a.client}</div>
                                <div className="text-sm text-[#c7b070]">{a.service} • {a.staff}</div>
                              </div>
                              <div className="text-right mr-4">
                                <div className="font-medium text-white">{a.time}</div>
                                <div className="text-xs text-[#c7b070]">{a.date}</div>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${statusConfig[a.status].bg} ${statusConfig[a.status].text}`}>
                                  <div className={`w-1.5 h-1.5 rounded-full ${statusConfig[a.status].dot}`} />
                                  {a.status}
                                </div>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-[#111]">
                                  <MoreVertical className="w-4 h-4 text-[#c7b070]" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Team snapshot */}
                  <div>
                    <Card className={`${CARD_BG} ${PANEL_BORDER} rounded-2xl`}>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-white text-xl">Team</CardTitle>
                            <CardDescription className="text-[#c7b070] mt-1">Staff overview</CardDescription>
                          </div>
                          <Button variant="ghost" size="sm" className="text-[#c7b070] hover:bg-[#111]">
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {staff.map(m => (
                            <div key={m.id} className={`flex items-center gap-3 p-3 rounded-xl ${CARD_BG} ${PANEL_BORDER}`}>
                              <Avatar className="w-10 h-10 ring-1 ring-[#d4af37]/12">
                                <AvatarFallback className="bg-[#1b1b1b] text-white text-sm font-semibold">{m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="font-medium text-white text-sm">{m.name}</div>
                                <div className="text-xs text-[#c7b070] flex items-center gap-2"><Star className="w-3.5 h-3.5 text-[#d4af37]" />{m.rating}</div>
                              </div>
                              <Badge className={m.status === 'active' ? 'bg-[#123a12] text-white' : 'bg-[#3a2b12] text-white'}>{m.status}</Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* APPOINTMENTS */}
              <TabsContent value="appointments">
                <Card className={`${CARD_BG} ${PANEL_BORDER} rounded-2xl`}>
                  <CardHeader className="border-b border-[#d4af37]/8">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white text-xl">All Appointments</CardTitle>
                        <CardDescription className="text-[#c7b070] mt-1">Manage your bookings</CardDescription>
                      </div>
                      <Button className="bg-[#d4af37] text-black rounded-lg">
                        <Plus className="w-4 h-4 mr-2" /> New Appointment
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <div className="min-w-full">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#070707] border-b border-[#d4af37]/8 text-sm font-semibold text-[#c7b070]">
                          <div className="col-span-3">Client</div>
                          <div className="col-span-2">Service</div>
                          <div className="col-span-2">Staff</div>
                          <div className="col-span-2">Date & Time</div>
                          <div className="col-span-2">Status</div>
                          <div className="col-span-1">Actions</div>
                        </div>

                        {/* Table Body */}
                        <div>
                          {filteredAppointments.map(a => (
                            <div key={a.id} className={`grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#d4af37]/8 items-center ${CARD_BG}`}>
                              <div className="col-span-3 flex items-center gap-3">
                                <Avatar className="w-9 h-9">
                                  <AvatarFallback className="bg-[#1b1b1b] text-white text-sm">{a.client.split(' ').map(n=>n[0]).slice(0,2).join('')}</AvatarFallback>
                                </Avatar>
                                <span className="font-medium text-white">{a.client}</span>
                              </div>
                              <div className="col-span-2 text-[#c7b070]">{a.service}</div>
                              <div className="col-span-2 text-[#c7b070]">{a.staff}</div>
                              <div className="col-span-2 text-[#c7b070]">{a.date} · {a.time}</div>
                              <div className="col-span-2">
                                <div className={`inline-flex px-3 py-1.5 rounded-lg text-xs font-semibold items-center gap-1.5 ${statusConfig[a.status].bg} ${statusConfig[a.status].text}`}>
                                  <div className={`w-1.5 h-1.5 rounded-full ${statusConfig[a.status].dot}`} />
                                  {a.status}
                                </div>
                              </div>
                              <div className="col-span-1 flex gap-2">
                                <Button variant="outline" size="sm" className="border-[#d4af37]/30 text-[#d4af37] rounded-lg">
                                  <Edit className="w-3.5 h-3.5" />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-[#c7b070] rounded-lg p-2">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* STAFF */}
              <TabsContent value="staff">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Staff Members</h2>
                    <p className="text-[#c7b070] mt-1">Manage your team</p>
                  </div>
                  <Button className="bg-[#d4af37] text-black rounded-lg">
                    <Plus className="w-4 h-4 mr-2" /> Add Staff
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {staff.map(m => (
                    <Card key={m.id} className={`${CARD_BG} ${PANEL_BORDER} rounded-2xl`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="w-14 h-14 ring-1 ring-[#d4af37]/12">
                              <AvatarFallback className="bg-[#1b1b1b] text-white font-semibold">{m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-bold text-white text-lg">{m.name}</div>
                              <div className="text-sm text-[#c7b070]">{m.role}</div>
                            </div>
                          </div>
                          <Badge className={m.status === 'active' ? 'bg-[#123a12] text-white' : 'bg-[#3a2b12] text-white'}>{m.status}</Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                          <div className="text-center p-2 rounded-lg bg-[#0b0b0b]">
                            <div className="text-xs text-[#c7b070] mb-1">Experience</div>
                            <div className="font-bold text-white">{m.experience}y</div>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-[#0b0b0b]">
                            <div className="text-xs text-[#c7b070] mb-1">Rating</div>
                            <div className="font-bold text-white flex items-center justify-center gap-1">
                              <Star className="w-3 h-3 text-[#d4af37]" />
                              {m.rating}
                            </div>
                          </div>
                          <div className="text-center p-2 rounded-lg bg-[#0b0b0b]">
                            <div className="text-xs text-[#c7b070] mb-1">Bookings</div>
                            <div className="font-bold text-white">{m.bookings}</div>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full border-[#d4af37]/30 text-[#d4af37] rounded-lg">
                          <Edit className="w-4 h-4 mr-2" /> Edit Profile
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* SERVICES */}
              <TabsContent value="services">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Services</h2>
                    <p className="text-[#c7b070] mt-1">Manage your offerings</p>
                  </div>
                  <Button className="bg-[#d4af37] text-black rounded-lg">
                    <Plus className="w-4 h-4 mr-2" /> Add Service
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {services.map(s => (
                    <Card key={s.id} className={`${CARD_BG} ${PANEL_BORDER} rounded-2xl`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center shadow-inner">
                            <Scissors className="w-6 h-6 text-[#d4af37]" />
                          </div>
                          <div className="text-right text-[#c7b070]">{s.bookings} this month</div>
                        </div>

                        <div className="mb-4">
                          <div className="font-bold text-white text-lg mb-1">{s.name}</div>
                          <Badge className="bg-[#111] text-[#d4af37] border-[#d4af37]/10">{s.category}</Badge>
                        </div>

                        <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-[#0b0b0b]">
                          <div>
                            <div className="text-xs text-[#c7b070]">Price</div>
                            <div className="font-bold text-white text-xl">{s.price}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-[#c7b070]">Duration</div>
                            <div className="font-semibold text-white flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                              {s.duration}
                            </div>
                          </div>
                        </div>

                        <Button variant="outline" className="w-full border-[#d4af37]/30 text-[#d4af37] rounded-lg">
                          <Edit className="w-4 h-4 mr-2" /> Edit Service
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}

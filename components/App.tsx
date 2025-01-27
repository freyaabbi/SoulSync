import React, { useState } from 'react';
import { 
  Briefcase, 
  Users, 
  Award, 
  Heart, 
  UserCircle2,
  Settings,
  MessageSquare,
  Bell
} from 'lucide-react';
import ProfileCard from './components/ProfileCard';
import Sidebar from './components/Sidebar';
import NetworkMap from './components/NetworkMap';
import ProfileCompletion from './components/ProfileCompletion';

function App() {
  const [activeSection, setActiveSection] = useState('discover');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                SoulSync
              </h1>
              <p className="text-gray-400">Connect. Grow. Thrive.</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <Bell className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <MessageSquare className="w-6 h-6" />
              </button>
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </header>

          {/* Dynamic Content */}
          <div className="mt-8">
            {activeSection === 'discover' && <ProfileCard />}
            {activeSection === 'network' && <NetworkMap />}
            {activeSection === 'profile' && <ProfileCompletion />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
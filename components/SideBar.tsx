import React from 'react';
import { 
  Briefcase, 
  Users, 
  Award, 
  Heart, 
  UserCircle2 
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const menuItems = [
    { id: 'discover', icon: Heart, label: 'Discover' },
    { id: 'network', icon: Users, label: 'Network' },
    { id: 'career', icon: Briefcase, label: 'Career' },
    { id: 'achievements', icon: Award, label: 'Achievements' },
    { id: 'profile', icon: UserCircle2, label: 'Profile' },
  ];

  return (
    <aside className="w-20 bg-gray-800 flex flex-col items-center py-8">
      {menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`p-3 rounded-xl mb-4 transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-purple-600 text-white'
                : 'text-gray-400 hover:bg-gray-700'
            }`}
          >
            <Icon className="w-6 h-6" />
          </button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
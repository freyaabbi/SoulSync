import React, { useState } from 'react';
import { Heart, X, Star } from 'lucide-react';

const ProfileCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-[400px] h-[600px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative h-2/3 rounded-xl overflow-hidden mb-4">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
            <h2 className="text-2xl font-bold">Sarah Anderson, 28</h2>
            <p className="text-purple-400">Senior Product Manager</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <div className="flex-1">
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-full w-[85%] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
              </div>
              <p className="text-sm text-gray-400 mt-1">85% Career Compatibility</p>
            </div>
          </div>

          <p className="text-gray-300">
            Passionate about building products that make a difference. Looking for someone who shares my drive for innovation and growth.
          </p>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between">
          <button className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <X className="w-6 h-6 text-red-400" />
          </button>
          <button className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Heart className="w-6 h-6 text-green-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
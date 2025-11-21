import React from "react";

interface MusicCardProps {
  title: string;
  description: string;
  image: string;
  spotify: string;
}

const MusicCard: React.FC<MusicCardProps> = ({ title, description, image, spotify }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition p-4 flex flex-col">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
      
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 text-sm mt-2 flex-1">{description}</p>

      <a 
        href={spotify} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-4 bg-green-500 text-white text-center py-2 rounded-xl hover:bg-green-600 transition"
      >
        Abrir no Spotify
      </a>
    </div>
  );
};

export default MusicCard;

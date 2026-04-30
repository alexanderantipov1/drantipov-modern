'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import Playvideo from '@/assest/icons/play-video.svg';

const videos = [
  {
    title: "We can't seem to find it..",
    author: 'Fusion Dental Implants',
    thumbnail: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=compress&cs=tinysrgb&w=600&h=1000&fit=crop',
    caption: 'Looking for values in our job description because we have to say yes to filming videos for social media',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
  },
  {
    title: "What's it like to have beautiful",
    author: 'Fusion Dental Implants',
    thumbnail: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=compress&cs=tinysrgb&w=600&h=1000&fit=crop',
    caption: 'DENTAL',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
  },
  {
    title: "We love our team at Fusion",
    author: 'Fusion Dental Implants',
    thumbnail: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=compress&cs=tinysrgb&w=600&h=1000&fit=crop',
    caption: 'EVER',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
  },
  {
    title: "What're the chances my dental",
    author: 'Fusion Dental Implants',
    thumbnail: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=compress&cs=tinysrgb&w=600&h=1000&fit=crop',
    caption: 'FAIL?',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder
  },
];

export default function SmileGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1D1D1D] mb-6 tracking-tight">
            Life-Changing Smiles
          </h2>
          <p className="text-[#1D1D1D] text-xl font-medium leading-relaxed">
            See the incredible transformations and hear from our happy patients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              onClick={() => setSelectedVideo(video.youtubeId)}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden shadow-2xl cursor-pointer bg-gray-200 transition-transform duration-500 hover:scale-[1.02]"
            >
              {/* Thumbnail Image */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />

              {/* Top Content */}
              <div className="absolute top-4 left-4 right-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0C4C76] flex items-center justify-center shrink-0 border border-white/20">
                  <span className="text-white text-[10px] font-bold">FDI</span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-white text-sm font-bold truncate leading-tight">
                    {video.title}
                  </h3>
                  <p className="text-white/70 text-[11px] font-medium">
                    {video.author}
                  </p>
                </div>
              </div>

              {/* Play Button Icon (Shorts style) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center  transition-transform duration-300 group-hover:scale-110">
                  {/* <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" /> */}
                  <Image src={Playvideo} alt="play-video" width={100} height={100} />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-10 left-6 right-6 text-center">
                <p className="text-white text-3xl font-black tracking-tighter uppercase leading-none drop-shadow-lg">
                  {video.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300">
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 bg-white/10 p-2 rounded-full"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedVideo(null)}
          />
        </div>
      )}
    </section>
  );
}

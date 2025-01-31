import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface PortfolioItem {
  type: "project" | "hackathon";
  image: string;
  title: string;
  description: string;
  livePreview?: string;
  githubLink?: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="p-4 border border-gray-600 bg-custom-gradient transition-all duration-300 hover:border-[#7c58b9] hover:cursor-pointer rounded-2xl">
      <div className="relative w-full h-[12rem] aspect-[16/9] overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <h2 className="mt-4 text-[#c7d1ea] text-xl font-bold text-center">
        {item.title}
      </h2>
      <p className="mt-2 text-sm text-center text-gray-400">
        {item.description}
      </p>

      {/* Project & Hackathon Links */}
      <div className="flex flex-col justify-center gap-4 mt-4">
        {item.livePreview && (
          <Link href={item.livePreview} className="btn-grad rounded-lg">
            Live Preview
          </Link>
        )}
        {item.githubLink && (
          <Link href={item.githubLink} className="btn-grad rounded-lg">
            GitHub Link
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;

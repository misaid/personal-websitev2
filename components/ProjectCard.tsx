"use client";
import React from "react";
import { Github, Globe, Code } from "lucide-react";
import Image from "next/image";

type Props = {
  image?: string;
  languages: string[];
  name: string;
  description: string;
  source?: string;
  live?: string;
};

export default function ProjectCard({
  image,
  languages,
  name,
  description,
  source,
  live,
}: Props) {
  return (
    <article className="border border-[#45475a] bg-[#181825] p-3 flex flex-col h-full">
      {image ? (
        <div className="mb-3 border border-[#45475a] overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={225}
            sizes="(max-width: 640px) 100vw, 350px"
            className="w-full h-[140px] object-cover"
          />
        </div>
      ) : (
        <div className="mb-3 border border-[#45475a] h-[140px] flex items-center justify-center bg-[#313244]">
          <Code size={32} className="text-[#9399b2]" />
        </div>
      )}

      <h3 className="text-sm font-bold text-[#b4befe] mb-1">{name}</h3>
      <p className="text-xs text-[#a6adc8] mb-3 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-1 mb-2">
        {languages.map((lang, index) => (
          <span
            key={index}
            className="text-xs text-[#a6adc8] border border-[#45475a] px-1.5 py-0.5"
          >
            {lang}
          </span>
        ))}
      </div>

      <div className="flex gap-2 text-xs">
        {source && (
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
          >
            <Github size={12} />
            → source
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#a6adc8] hover:text-[#a6e3a1] transition-colors"
          >
            <Globe size={12} />
            → live
          </a>
        )}
      </div>
    </article>
  );
}
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
    <article className="group border border-[#45475a] bg-[#181825] p-3 flex flex-col h-full hover:border-[#a6e3a1]/30 transition-colors">
      {image ? (
        <div className="mb-3 border border-[#45475a] overflow-hidden">
          <Image
            src={image}
            alt={`${name} preview`}
            width={400}
            height={225}
            loading="lazy"
            sizes="(max-width: 640px) 100vw, 350px"
            className="w-full h-[140px] object-cover group-hover:scale-[1.02] transition-transform"
          />
        </div>
      ) : (
        <div className="mb-3 border border-[#45475a] h-[140px] flex items-center justify-center bg-[#313244]" aria-hidden="true">
          <Code size={32} className="text-[#9399b2]" aria-hidden="true" />
        </div>
      )}

      <h3 className="text-sm font-bold text-[#b4befe] mb-1">{name}</h3>
      <p className="text-xs text-[#a6adc8] mb-3 leading-relaxed flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-1 mb-2" aria-label={`${name} tech stack`}>
        {languages.map((lang) => (
          <span
            key={`${name}-${lang}`}
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
            <Github size={12} aria-hidden="true" />
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
            <Globe size={12} aria-hidden="true" />
            → live
          </a>
        )}
      </div>
    </article>
  );
}
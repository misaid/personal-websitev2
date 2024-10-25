"use client";
import Tilt from "react-parallax-tilt";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useRef, useState } from "react";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  image: string;
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
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      setMousePosition({ x, y });
    }
  }
  return (
    <Tilt scale={1.02} tiltEnable={false} tiltReverse={true} perspective={5000}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full w-full shadow-md rounded-lg border flex flex-col p-2 sm:p-4"
      >
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out rounded-lg w-full h-full"
          style={{
            // enable by setting rgba to 0.2
            background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0), transparent 80%)`,
            opacity: isHovered ? 1 : 0,
            pointerEvents: "none",
          }}
        />
        <div className="flex flex-col   space-y-8">
          <div className="flex flex-col space-y-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={image}
                alt={name}
                width={1920}
                height={1080}
                className="rounded-lg"
              />
            </AspectRatio>
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {name}
            </h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="w-full flex flex-row flex-wrap gap-1">
              {languages.map((language, index) => (
                <Badge className="text-[10px]" variant={"outline"} key={index}>
                  {language}
                </Badge>
              ))}
            </div>
            <div className="flex flex-row w-full space-x-1">
              {source && (
                <a href={source} target="_blank" rel="noopener noreferrer">
                  <Button variant={"outline"}>
                    <Github />
                    <h2>Source</h2>
                  </Button>
                </a>
              )}

              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <Button variant={"outline"}>
                    <Globe />
                    <h2>Website</h2>
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

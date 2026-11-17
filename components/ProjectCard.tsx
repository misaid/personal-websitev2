"use client";
import { useRef, useState } from "react";
import { Github, Globe, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ProjectCarousel from "@/components/ProjectCarousel";
import type { ProjectImage } from "@/lib/projects";

type Props = {
  image?: string;
  languages: string[];
  name: string;
  description: string;
  source?: string;
  live?: string;
  highlights?: string[];
  images?: ProjectImage[];
  /** Load the thumbnail eagerly (above-the-fold cards). */
  eager?: boolean;
};

export default function ProjectCard({
  image,
  languages,
  name,
  description,
  source,
  live,
  highlights,
  images,
  eager,
}: Props) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const gallery: ProjectImage[] =
    images && images.length > 0
      ? images
      : image
        ? [{ src: image, width: 1600, height: 900, alt: `${name} screenshot` }]
        : [];
  const interactive = Boolean(highlights?.length) || gallery.length > 1;

  return (
    <>
      <article
        className={`relative h-full w-full shadow-md rounded-lg border row-span-5 grid [grid-template-rows:subgrid] gap-y-2 p-2 sm:p-4 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)]:hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-lg motion-reduce:transform-none ${
          interactive ? "cursor-pointer active:scale-[0.99]" : ""
        }`}
      >
            <AspectRatio ratio={16 / 9}>
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 100vw, 450px"
                  loading={eager ? "eager" : undefined}
                  className="object-cover rounded-md ring-1 ring-border"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  <Code size={42} />
                </div>
              )}
            </AspectRatio>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {interactive ? (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-haspopup="dialog"
                  className="text-left after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-ring"
                >
                  {name}
                </button>
              ) : (
                name
              )}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {description}
            </p>
            <div className="w-full flex flex-row flex-wrap content-start gap-1">
              {languages.map((language) => (
                <Badge className="text-[10px]" variant="outline" key={language}>
                  {language}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2 self-end">
              <>
                {source && (
                  <Button asChild variant="outline" size="sm" className="relative z-10">
                    <a
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${name} source code`}
                    >
                      <Github />
                      Source
                    </a>
                  </Button>
                )}
                {live && (
                  <Button asChild variant="outline" size="sm" className="relative z-10">
                    <a
                      href={live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${name} website`}
                    >
                      <Globe />
                      Live site
                    </a>
                  </Button>
                )}
                {interactive && (
                  <button
                    type="button"
                    onClick={() => setOpen(true)}
                    aria-haspopup="dialog"
                    aria-label={`View ${name} details`}
                    className="group/details relative z-10 ml-auto inline-flex items-center gap-1 rounded-md px-1 py-1 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover/details:translate-x-0.5 motion-reduce:transition-none" />
                  </button>
                )}
              </>
            </div>
      </article>
      {interactive && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            ref={contentRef}
            tabIndex={-1}
            onOpenAutoFocus={(e) => {
              e.preventDefault();
              contentRef.current?.focus();
            }}
            className="sm:max-w-3xl lg:max-w-4xl"
          >
            <div className="p-6 pb-3 pr-14 space-y-1.5 text-left">
              <DialogTitle className="text-2xl">{name}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-6 pb-6 space-y-4">
              {gallery.length > 0 && (
                <ProjectCarousel images={gallery} name={name} />
              )}
              {highlights && highlights.length > 0 && (
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground">
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-1">
                {languages.map((language) => (
                  <Badge className="text-[10px]" variant="outline" key={language}>
                    {language}
                  </Badge>
                ))}
              </div>
            </div>
            {(source || live) && (
              <div className="border-t px-6 py-3 flex flex-wrap gap-2">
                {live && (
                  <Button asChild>
                    <a href={live} target="_blank" rel="noopener noreferrer">
                      <Globe />
                      Live site
                    </a>
                  </Button>
                )}
                {source && (
                  <Button asChild variant="outline">
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      <Github />
                      Source
                    </a>
                  </Button>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

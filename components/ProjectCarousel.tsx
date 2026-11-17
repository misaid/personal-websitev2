"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectImage } from "@/lib/projects";

export default function ProjectCarousel({
  images,
  name,
}: {
  images: ProjectImage[];
  name: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const target = useRef(0);
  const [index, setIndex] = useState(0);
  const [endReached, setEndReached] = useState(false);

  const portrait = images.every((im) => im.height > im.width);
  const many = images.length > 1;
  const last = images.length - 1;

  const scrollToIndex = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const slide = el.children[i] as HTMLElement | undefined;
    if (!slide) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: slide.offsetLeft - el.offsetLeft,
      behavior: reduce ? "auto" : "smooth",
    });
  }, []);

  const goTo = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(last, i));
      target.current = next;
      setIndex(next);
      scrollToIndex(next);
    },
    [last, scrollToIndex],
  );

  // Keep index in sync with manual scrolling (swipe/trackpad); resync target on scroll end.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const nearest = () => {
      let best = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const d = Math.abs((c as HTMLElement).offsetLeft - el.offsetLeft - el.scrollLeft);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      return best;
    };
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(settle, 120);
    };
    const settle = () => {
      const scrollable = el.scrollWidth > el.clientWidth + 2;
      const atEdge = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      setEndReached(atEdge);
      const i = scrollable && atEdge && el.scrollLeft > 0 ? last : nearest();
      target.current = i;
      setIndex(i);
    };
    settle();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      el.removeEventListener("scroll", onScroll);
    };
  }, [last]);

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 hidden sm:inline-flex opacity-0 transition-opacity duration-150";
  const atStart = index === 0;
  const atEnd = index === last || endReached;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") goTo(target.current + 1);
        if (e.key === "ArrowLeft") goTo(target.current - 1);
      }}
    >
      <div className="relative group">
        <div
          ref={track}
          className={`relative flex overflow-x-auto overscroll-x-contain snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            portrait ? "gap-3" : "rounded-lg border"
          }`}
        >
          {images.map((im, i) => (
            <div
              key={im.src}
              className={`relative shrink-0 snap-always bg-muted ${
                portrait
                  ? "basis-1/2 sm:basis-1/3 aspect-[389/864] snap-start rounded-lg overflow-hidden border"
                  : "w-full aspect-[16/10] snap-center"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${images.length}`}
            >
              <Image
                src={im.src}
                alt={im.alt}
                fill
                sizes={portrait ? "(max-width: 640px) 50vw, 256px" : "(max-width: 896px) 100vw, 832px"}
                loading={Math.abs(i - index) <= 1 ? "eager" : "lazy"}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        {many && (
          <>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className={`${arrowClass} left-2 ${atStart ? "group-hover:opacity-40 focus-visible:opacity-40 pointer-events-none" : "group-hover:opacity-100 focus-visible:opacity-100"}`}
              onClick={() => goTo(target.current - 1)}
              aria-disabled={atStart}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className={`${arrowClass} right-2 ${atEnd ? "group-hover:opacity-40 focus-visible:opacity-40 pointer-events-none" : "group-hover:opacity-100 focus-visible:opacity-100"}`}
              onClick={() => goTo(target.current + 1)}
              aria-disabled={atEnd}
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
      {many && (
        <div className="mt-1 flex justify-center">
          {images.map((im, i) => (
            <button
              key={im.src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className="size-6 grid place-items-center"
            >
              <span
                className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ease-out ${
                  i === index ? "w-4 bg-foreground" : "w-1.5 bg-muted-foreground/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}
      <p className="mt-1 flex justify-between gap-4 text-xs text-muted-foreground tabular-nums" aria-live="polite">
        <span>{images[index]?.alt}</span>
        <span className="shrink-0">
          {index + 1} / {images.length}
        </span>
      </p>
    </div>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Building2 } from 'lucide-react';
import { Project } from '@/types';
import Image from 'next/image';

interface LightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ project, isOpen, onClose }: LightboxProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project?.id]);

  // Auto-scroll to selected thumbnail
  useEffect(() => {
    const selectedThumbnail = thumbnailRefs.current[currentImageIndex];
    if (selectedThumbnail) {
      selectedThumbnail.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [currentImageIndex]);

  if (!project) return null;

  const totalImages = project.images.length;
  const hasPrev = currentImageIndex > 0;
  const hasNext = currentImageIndex < totalImages - 1;

  const handlePrev = () => {
    if (hasPrev) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && hasPrev) handlePrev();
    if (e.key === 'ArrowRight' && hasNext) handleNext();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="p-0 max-w-[min(95vw,1400px)] max-h-[90vh] overflow-y-auto overflow-x-hidden rounded-lg sm:rounded-xl"
        onKeyDown={handleKeyDown}
      >
        <DialogTitle className="sr-only">{project.title}</DialogTitle>

        {/* Main Container - Prevents any horizontal overflow */}
        <div className="w-full overflow-hidden rounded-lg sm:rounded-xl">

          {/* Image Section */}
          <div className="relative w-full aspect-video bg-muted overflow-hidden rounded-t-lg sm:rounded-t-xl">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              priority
            />

            {/* Navigation Arrows */}
            {hasPrev && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-12 sm:w-12 rounded-full shadow-lg bg-white/95 hover:bg-white border-2 border-gray-200 z-10 transition-all active:scale-90 sm:hover:scale-105"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
              </Button>
            )}

            {hasNext && (
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-12 sm:w-12 rounded-full shadow-lg bg-white/95 hover:bg-white border-2 border-gray-200 z-10 transition-all active:scale-90 sm:hover:scale-105"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-900" />
              </Button>
            )}

            {/* Image Counter */}
            {totalImages > 1 && (
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold shadow-lg border border-gray-200 text-gray-900">
                {currentImageIndex + 1} / {totalImages}
              </div>
            )}
          </div>

          {/* Thumbnail Strip - Horizontally scrollable with auto-scroll */}
          {totalImages > 1 && (
            <div className="w-full border-b border-border/50 bg-muted/20">
              <div className="px-4 sm:px-5 py-4">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide scroll-smooth">
                  {project.images.map((img, index) => (
                    <button
                      key={index}
                      ref={(el) => { thumbnailRefs.current[index] = el; }}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'border-primary ring-2 ring-primary/20 sm:scale-105'
                          : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Content Section - Proper text wrapping */}
          <div className="w-full px-4 sm:px-6 py-4 sm:py-5">
            <div className="space-y-3 sm:space-y-4">

              {/* Title and Category */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold font-serif leading-tight break-words min-w-0 flex-1">
                  {project.title}
                </h2>
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium self-start shrink-0">
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                {project.description}
              </p>

              {/* Client and Location */}
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 text-xs sm:text-sm">
                {project.client && (
                  <div className="flex items-start gap-2 text-muted-foreground min-w-0">
                    <Building2 className="h-4 w-4 shrink-0 mt-0.5" />
                    <span className="break-words min-w-0">
                      <strong className="font-semibold text-foreground">Client:</strong> {project.client}
                    </span>
                  </div>
                )}
                {project.location && (
                  <div className="flex items-start gap-2 text-muted-foreground min-w-0">
                    <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                    <span className="break-words min-w-0">
                      <strong className="font-semibold text-foreground">Location:</strong> {project.location}
                    </span>
                  </div>
                )}
              </div>

              {/* Desktop Hint */}
              {totalImages > 1 && (
                <div className="pt-3 border-t border-border/50 hidden sm:block">
                  <p className="text-xs text-muted-foreground text-center">
                    Use arrow keys or buttons to navigate • Click thumbnails to jump
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

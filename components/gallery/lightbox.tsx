'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Project } from '@/types';

interface LightboxProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ project, isOpen, onClose }: LightboxProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg relative">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <p className="text-sm">Full Size Image</p>
                <p className="text-xs">{project.category}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.category}
            </p>
            <p className="text-base">{project.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

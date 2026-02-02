'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbox } from '@/components/gallery/lightbox';
import { projects } from '@/data/projects';
import { Project } from '@/types';

export function GalleryContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-16 bg-background">
      {/* Header */}
      <section className="container mb-16 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif">Our Work</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Browse through our portfolio of completed projects. Each piece
            showcases our commitment to quality craftsmanship and attention to
            detail.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="container mb-12 px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'shadow-md' : 'border-border/50'}
            >
              {category}
            </Button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card
                className="overflow-hidden hover-lift border-border/50 bg-card shadow-sm cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-muted/50 relative group overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 right-3 px-2 py-1 rounded-full bg-background/90 text-xs font-medium">
                    {project.images.length} {project.images.length === 1 ? 'photo' : 'photos'}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <Lightbox
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

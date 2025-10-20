// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)  
import { glob } from 'astro/loaders';

// 3. Define project schema
const projectSchema = z.object({
  // Información básica del proyecto
  title: z.string(),
  category: z.enum(['living', 'bedroom', 'kitchen', 'office']),
  categoryName: z.string(),
  description: z.string(),
  
  // Detalles del proyecto
  location: z.string(),
  area: z.string(),
  year: z.number(),
  
  // Imagen principal para galería
  img: z.string().url(),
  
  // Clasificación y etiquetas
  tags: z.array(z.string()),
  
  // Medios visuales
  images: z.array(z.string().url()),
  
  // Características y materiales
  features: z.array(z.string()),
  materials: z.array(z.string()),
  
  // Testimonial del cliente
  testimonial: z.object({
    text: z.string(),
    author: z.string(),
    role: z.string(),
  }),
  
  // Metadatos de publicación
  featured: z.boolean().default(false),
  published: z.boolean().default(true),
  publishDate: z.coerce.date(),
  
  // Campos opcionales adicionales
  client: z.string().optional(),
  duration: z.string().optional(),
  budget: z.string().optional(),
  style: z.array(z.string()).optional(),
  difficulty: z.enum(['básico', 'intermedio', 'avanzado']).optional(),
  sustainability: z.array(z.string()).optional(),
  awards: z.array(z.string()).optional(),
});

// 4. Define collections for each content type
const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: projectSchema,
});

// Posibles colecciones futuras
const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        publishDate: z.coerce.date(),
        image: z.string().url().optional(),
        tags: z.array(z.string()),
        category: z.string(),
        featured: z.boolean().default(false),
        published: z.boolean().default(true),
    }),
});

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
        price: z.string().optional(),
        duration: z.string().optional(),
        includes: z.array(z.string()),
        order: z.number().default(0),
        featured: z.boolean().default(false),
    }),
});



// 5. Export collections
export const collections = {
    'projects': projects,
    'blog': blog,
    'services': services,
};
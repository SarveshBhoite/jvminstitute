import { z } from "zod";

export const placementSchema = z.object({
  name: z.string().min(2, "Student name is required"),
  domain: z.string().min(2, "Domain is required"),
  placedRole: z.string().min(2, "Placed role is required"),
  company: z.string().min(2, "Company name is required"),
  package: z.string().min(2, "Package (e.g. 8.5 LPA) is required"),
  hike: z.string().default("Direct Placement"),
  skills: z.string().min(2, "Skills are required"),
  image: z.string().default("/place1.png"),
  category: z.string().default("data_engineering"),
  isFeatured: z.boolean().default(true),
});

export type PlacementInput = z.infer<typeof placementSchema>;

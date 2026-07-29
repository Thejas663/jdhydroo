import { z } from 'zod';

const serviceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

export type Service = z.infer<typeof serviceSchema>;

// Master Brief v2 §6.2 lists the 6-7 pillars (consultancy & design, plant
// assessment & upgradation, full-line service & repair, emergency support,
// FEA/engineering analysis, O&M & AMC, electrical systems). No real content
// yet — populated in Phase 9/10.
const rawServices: Service[] = [];

export const services: Service[] = z.array(serviceSchema).parse(rawServices);

import { z } from 'zod';

const certificationSchema = z.object({
  slug: z.string(),
  name: z.string(),
  issuingBody: z.string(),
  validTill: z.string().optional(),
  badgeImage: z.string(),
  pdf: z.string().optional(),
});

export type Certification = z.infer<typeof certificationSchema>;

// Master Brief v2 §10/§21 item 3 — do not populate this until it's confirmed
// which certifications (ISO 9001/14001/45001, type-test, export approvals,
// etc.) JD Hydro actually currently holds. Never launch /certifications
// implying a certification that isn't actually confirmed held.
const rawCertifications: Certification[] = [];

export const certifications: Certification[] = z
  .array(certificationSchema)
  .parse(rawCertifications);

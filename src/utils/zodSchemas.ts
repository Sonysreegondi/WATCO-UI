
import { z } from "zod";

export const bookingSchema = z.object({
  animalType: z.string().min(1),
  quantity: z.coerce.number().min(1),
  deck: z.string().min(1),
  date: z.string().min(1),
  contactNumber: z.string().min(10).max(15),
});

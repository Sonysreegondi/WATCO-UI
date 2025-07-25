import { z } from "zod";

export const bookingSchema = z.object({
    animalType: z.string().min(1, { message: "Animal type is required." }),
    quantity: z.coerce.number().int().min(1, { message: "Quantity must be at least 1." }),
    deck: z.string().min(1, { message: "Deck is required." }),
    date: z.string().min(1, { message: "Date is required." }),
    contactNumber: z
        .string()
        .min(10, { message: "Contact number must be at least 10 digits." })
        .max(15, { message: "Contact number must be at most 15 digits." })
        .regex(/^\d+$/, { message: "Contact number must contain only digits." }),
});
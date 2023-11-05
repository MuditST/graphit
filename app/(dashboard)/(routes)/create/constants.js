import * as z from "zod"

export const formSchema = z.object({
    x: z.string().min(1,{
        message: "Something is required",
        
    }),
    y: z.string().min(1,{
        message: "Something is required",
        
    }),
    xval: z.string().min(1,{
        message: "Something is required",
        
    }),
    yval: z.string().min(1,{
        message: "Something is required",
        
    })
})

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
export const uploadSchema = z.object({
    image: z
    .string().min(1,{
        message: "Something is required",  
    })
  })
"use client";

import { useRouter } from 'next/navigation'
import Heading from '../../../../components/Heading'
import { Button } from '../../../../components/ui/button'
import { AreaChart, Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs';
import { Input } from '../../../../components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Form, FormControl, FormField, FormItem } from '../../../../components/ui/form';
import { set, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadSchema } from '../create/constants';
import axios from 'axios';
import Image from 'next/image';
import { useProModal } from '../../../../hooks/use-pro-modal';

const UploadPage = () => {
  const router = useRouter()
  const { user } = useUser()
  const userId = user && user.id
  const proModal = useProModal();

  const form = useForm({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      image: '',
    }
  })

  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const isLoading = form.formState.isSubmitting
  const onSubmit = async (values) => {
    setIsLoading(true);
    try {
      form.reset({
        image: '',
      });

      const response = await axios.post("http://localhost:4000/upload", null, {
        params: { ...values, userId }
      })

      console.log(response);
      setImages(response.data);
      setIsLoading(false);

    } catch (error) {
      if (error.response.status === 403) {
        proModal.onOpen();
      }
      setIsLoading(false);
    }
    finally {
      router.refresh
    }
  }
  return (
    <div><Heading
      title="Upload Graph"
      description="Bring your graph to life"
      icon={AreaChart}
      iconColor="text-white"
      bgColor="bg-white/10" />
      <div className='flex items-center justify-center w-full h-[60vh]'>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='rounded-lg border-2 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
              <FormField
                name="image"
                render={({ field }) => (
                  <FormItem className="col-span-12 ">
                    <FormControl className="m-0 pb-10">
                      <Input 
                        id="image"
                        type="file"
                        disabled={isLoading}
                        className="bg-secondary cursor-pointer font-bold"
                        {...field} />

                    </FormControl>
                  </FormItem>
                )} />
              <Button variant="premium" type="submit" className="col-span-12 bg-secondary">Generate Graph</Button>

            </form>
          </Form>
        </div>
      </div>
      <div className="container flex justify-center mx-auto px-4 py-8">
        {isLoading && <div className="animate-spin text-white"><Loader2 size={55}/></div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {!isLoading &&
            (images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-sm shadow-secondary">
                <Image
                  src={`data:image/webp;base64,${image}`}
                  alt={`Photo ${index + 1}`}
                  width={480}
                  height={480}
                  layout="responsive"
                  className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                />
              </div>
            )))
          }
        </div>
      </div>
    </div>)
}

export default UploadPage
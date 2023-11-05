"use client"
import Heading from "../../../../components/Heading"
import { PencilRuler } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from "zod"
import axios from "axios"
import { formSchema } from './constants'
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from '../../../../components/ui/form'
import { Input } from '../../../../components/ui/input'
import { Button } from '../../../../components/ui/button'
import { useRouter } from 'next/navigation'
import { auth, useUser } from "@clerk/nextjs"

const CreatePage = () => {
    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues:{
            x: '',  // Assuming you want to initialize them as empty strings
            y: '',
            xval: '',
            yval: ''
        }
    })
    const {user} = useUser()
    const userId = user.id
    
    const isLoading = form.formState.isSubmitting
    const onSubmit = async (values) =>{
        
        try{
            form.reset({
                x: '',
                y: '',
                xval: '',
                yval: ''
            });
            
            axios.post("http://localhost:4000",null,{
                params: {...values,userId}
        })
            
        }catch (error){console.log(error)}
        finally{router.refresh
        }
    }
  return (
    <div>
        <Heading 
        title="Create Graph"
        description="Create a graph from scratch"
        icon={PencilRuler}
        iconColor="text-white"
        bgColor="bg-white/10"/>
        <div className='px-4 lg:px-8'>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}
                    className='rounded-lg border-2 w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2'>
                        <FormField 
                        name="x"
                        render={({field}) => (
                            <FormItem className="col-span-12">
                                
                                <FormControl className="m-0 py-10">
                                    <Input disabled={isLoading}
                                    placeholder="Enter subject tracked on X axis"
                                    className="border-0 text-center outline-none focus-visible:ring-0 focus-visible:ring-transparent text-secondary"
                                    {...field}/>
                        
                                </FormControl>
                            </FormItem>
                            

                        )}/>
                        <FormField 
                        name="y"
                        render={({field}) => (
                            <FormItem className="col-span-12">
                                
                                <FormControl className="m-0 pb-10">
                                    <Input disabled={isLoading}
                                    placeholder="Enter subject tracked on Y axis"
                                    className="border-0 text-center outline-none focus-visible:ring-0 focus-visible:ring-transparent text-secondary"
                                    {...field}/>
                        
                                </FormControl>
                            </FormItem>
                            

                        )}/>
                        <FormField 
                        name="xval"
                        render={({field}) => (
                            <FormItem className="col-span-12  ">
                                
                                <FormControl className="m-0 pb-10">
                                    <Input disabled={isLoading}
                                    placeholder="X Axis Values"
                                    className="border-0 text-center outline-none focus-visible:ring-0 focus-visible:ring-transparent text-secondary"
                                    {...field}/>
                        
                                </FormControl>
                            </FormItem>
                            

                        )}/>
                        <FormField 
                        name="yval"
                        render={({field}) => (
                            <FormItem className="col-span-12 ">
                                
                                <FormControl className="m-0 pb-10">
                                    <Input disabled={isLoading}
                                    placeholder="Y Axis Values"
                                    className="border-0 text-center outline-none focus-visible:ring-0 focus-visible:ring-transparent text-secondary"
                                    {...field}/>
                        
                                </FormControl>
                            </FormItem>
                            

                        )}/>
                    <Button type="submit" className="col-span-12 bg-secondary hover:bg-slate-500 hover:text-secondary text-primary">Generate Graph</Button>
                        
                    </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

export default CreatePage
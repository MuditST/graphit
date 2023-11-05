import Heading from '../../../../components/Heading'
import { Button } from '../../../../components/ui/button'
import { AreaChart } from 'lucide-react'
import React from 'react'

const UploadPage = () => {
  return (
    <div><Heading 
    title="Upload Graph"
    description="Bring your graph to life"
    icon={AreaChart}
    iconColor="text-white"
    bgColor="bg-white/10"/>
    <div className='flex items-center justify-center w-full h-[60vh]'>
        
        <Button className="col-span-12 bg-secondary hover:bg-slate-500 hover:text-secondary text-primary">Upload Graph</Button></div>
        </div> )
}

export default UploadPage
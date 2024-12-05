import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const dispatch=useDispatch()
  const [query,setQuery]=useState("")
  const navigate=useNavigate()
  const searchJobHandler=()=>{
    dispatch(setSearchedQuery(query))
    navigate("/browse")
  }
  return (
    <div className='text-center'>
       <div className='flex flex-col gap-5 my-10'>
          <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website </span>
          <h1 className='text-5xl font-bold'>Search, Apply &<br/> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
          <p className="font-bold text-lg text-gray-800">
  <span className="text-blue-600">Job Portal</span> is a streamlined platform designed to connect job seekers with opportunities that match their unique skills and qualifications. With a <span className="text-blue-600">fast and responsive interface</span>, it provides users with an intuitive, smooth experience for browsing, filtering, and applying to jobs effortlessly. Whether you’re looking for your first role or the next step in your career, <span className="text-blue-600">Job Portal</span> makes finding the right job easier and more efficient.
</p>

          <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'> 
            <input
            type="text"
            placeholder='Find your dream jobs'
            onChange={(e)=>setQuery(e.target.value)}
            className='outline-none border-none w-full'
            />
            <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                <Search className='h-5 w-5'/>
            </Button>
          </div>
        </div> 
    </div>
  )
}

export default HeroSection
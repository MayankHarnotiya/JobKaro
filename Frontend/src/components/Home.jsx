import React, { useEffect } from 'react'
import NavBar from '@/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  useGetAllJobs()
  const {user} = useSelector(store=>store.auth)
  const navigate=useNavigate()
  useEffect(()=>{
  if(user?.role=='recruiter'){
    navigate("/admin/companies")
  }
  },[])
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/> 
    </div>
  )
}
export default Home

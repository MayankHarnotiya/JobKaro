import React, { useState } from 'react';
import NavBar from '@/shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge'; // Make sure the path is correct
import { Contact, Mail, Pen } from 'lucide-react';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJob';

// const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS"]; // Consistent casing

const isResume = true
const Profile = () => {
    useGetAppliedJobs()
    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.auth)

    return (
        <div>
            <NavBar />

            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage
                                src={user?.profile?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-cf9bPbrkwgi4ut6PScrrj9ZoZk3ic8G82A&s"}
                                alt={`${user?.fullname}'s Profile`} // Adds more personalized alt text
                            />

                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
                            <p>{user?.profile?.bio}</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
                        <Pen />
                    </Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold text-lg mb-2'>Skills</h1> {/* Added styling */}
                    <div className='flex flex-wrap gap-2'>
                        {
                            user?.profile?.skills.length !== 0
                                ? user?.profile?.skills.map((skill, index) => <Badge key={index}>{skill}</Badge>)
                                : <span>No skills available</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className='text-md font-bold'>Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hiver:underline cursor:pointer'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* {   Applied Job Table  } */}
                <AppliedJobTable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    );
}

export default Profile;

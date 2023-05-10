import React, { useState } from 'react'
import { searchJobByQuery } from '../../config/apiCalls/jobApiCalls'
import styles from './JobSearchPage.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Navbar from '../../components/Navbar/Navbar';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import noDataFoundAnimation from '../../assets/animations/noDataFound.json'

const JobSearchPage = () => {
    // states
    const [jobList , setJobList] = useState([]); 
    const [jobRole , setJobRole] = useState('');
    const [jobLocation , setJobLocation] = useState('');

    // configarations
    const navigate = useNavigate();

    const handleSearchJob = async() =>{
        console.log(jobRole)
        const res = await searchJobByQuery(jobRole , jobLocation);
        console.log(res.data)
        const listofJob = [];
        for(let jobRes of res.data){
            const job = {
                jobId: jobRes.job_id,
                jobTitle : jobRes.job_title,
                city : jobRes.job_city,
                country : jobRes.job_country,
                companyName : jobRes.employer_name,
                image : jobRes.employer_logo
            }
            listofJob.push(job);
        }
        setJobList(listofJob)
    }
    const detailsPageHandler = (id) => {
        navigate(`/search/${id}`)
    }
  return (
    <div className={styles.parentContainer}>
        {/* Navbar */}
        <Navbar/>
        { /* Search Container */}
        <div className={styles.searchContainer}>
            
                <div className={styles.searchInput}>
                    <SearchIcon onClick={handleSearchJob}/>
                <input type="text" onChange={(e)=>{setJobRole(e.target.value)}} placeholder='Enter Job Role Here'/>
                </div > 
        
                <div className={styles.locationInput}>
                <AddLocationIcon style={{ color: 'gray' }}/>
                <input type="text" onChange={(e)=>{setJobLocation(e.target.value)}} placeholder='Enter job location'/>
                </div > 
        </div>
        {/* Jobs */}
        {
            jobList.length === 0 ?
            (
                <div className={styles.body2}>
                <Lottie animationData={noDataFoundAnimation} style={{
                height : "40%",
                width : "40%",
                zIndex : 1,
            }}/>
                </div>
            )
            :
        <div className={styles.body}>
            {
                jobList.map((job , idx)=>(
                    <div key={idx} className={styles.jobContainer}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={job.image || "https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=2000"} alt="" />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.title}>{job.jobTitle} <WorkIcon style={{ color: 'brown' }}/></div>
                    <div className={styles.companyName}>{job.companyName}</div>
                    <div className={styles.location}>${job.city} , {job.country} <AddLocationIcon style={{ color: 'red' }}/></div>
                    <div className={styles.details} onClick={()=>{detailsPageHandler(job.jobId)}}>Details</div>
                </div>
            </div>
                ))
            }
        </div>
}
        </div>
  )
}

export default JobSearchPage

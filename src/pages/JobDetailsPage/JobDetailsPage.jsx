import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { searchJobByJobId } from "../../config/apiCalls/jobApiCalls";
import styles from "./JobDetailsPage.module.css";
import { Button } from "@chakra-ui/react";

const JobDetailsPage = () => {
  // states
  const [jobDetails, setJobDetails] = useState({
    jobTitle: "Full Stack Developer",
    maxSalary : "not mentioned",
    minSalary : "not mentioned",
    experience : "not Required"
  });

  // configurations
  const { jobId } = useParams();
  const navigate = useNavigate();

  // funstions
  const getJobDetails = async () => {
    const res = await searchJobByJobId(jobId);
    console.log(res.data[0]);
    if (res.data[0] != undefined) {
        const experienceReq = res.data[0].job_required_experience.required_experience_in_months !== null && res.data[0].job_required_experience.required_experience_in_months / 12;
      const job = {
        jobTitle: res.data[0].job_title,
        logo: res.data[0].employer_logo,
        desc : res.data[0].job_description,
        company : res.data[0].employer_name,
        city : res.data[0].job_city,
        country : res.data[0].job_country,
        maxSalary : res.data[0].job_max_salary,
        minSalary : res.data[0].job_min_salary,
        experience : `${experienceReq} years`,
        link : res.data[0].job_apply_link
      };
      setJobDetails(job);
    }
  };
  useEffect(() => {
    getJobDetails();
  }, []);
  const applyJobHandler = () =>{
    navigate(jobDetails.link)
  }

  return (
    <div>
      <Navbar />
      <div className={styles.parentContainer}>
        { /* Header */}
        <div className={styles.header}>
          <div className={styles.imageContainer}>
            <img src={jobDetails.logo} alt="" />
          </div>
          <div className={styles.titleContainer}>
            <div className={styles.jobTitle}>{jobDetails.jobTitle}</div>
            <div className={styles.companyName}>{jobDetails.company}</div>
          </div>
        </div>
        {/* job description */}
        <div className={styles.jobDescContainer}>
            <div className={styles.contentHeading}>JOB DESCRIPTION</div>
            <div dangerouslySetInnerHTML={{ __html: jobDetails.desc }} className={styles.content}/>
        </div>
        <div className={styles.jobDescContainer}>
            <div className={styles.contentHeading}>LOCATION</div>
            <div> {jobDetails.city} , {jobDetails.country} </div>
        </div>
        <div className={styles.jobDescContainer}>
            <div className={styles.contentHeading}>SALARY RANGE</div>
            <div> Max Salary in dollar:  {jobDetails.maxSalary}</div>
            <div> Min Salary in dollar:  {jobDetails.minSalary}</div>
        </div>
        <div className={styles.jobDescContainer}>
            <div className={styles.contentHeading}>EMPLOYMENT TYPE</div>
            <div> Max Salary :  </div>
        </div>
        <div className={styles.jobDescContainer}>
            <div className={styles.contentHeading}>IS REMOTE?</div>
            <div> YES  </div>
        </div>
        <div className={styles.jobDescContainer}>
            <div className={styles.contentHeading}>EXPERICNCE REQUIRED</div>
            <div> {jobDetails.experience}  </div>
        </div>
        <div className={styles.applyContainer}>
        <a href={jobDetails.link} target="_blank" className={styles.apply}>
            APPLY
        </a>
        </div>

      </div>
    </div>
  );
};

export default JobDetailsPage;

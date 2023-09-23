import React from "react";
import { GrLocation } from 'react-icons/gr';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {id, logo, job_title,company_name,remote_or_onsite,location,job_type, salary,job_description} = job;
  console.log(logo);
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="p-4">
        <img
          src={logo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <h2 className="card-title">{company_name}</h2>
        <p>{job_description}</p>
        <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#687cfc]">{remote_or_onsite}</button>
            <button  className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#6a7df9]">{job_type}</button>
        </div>

        <div className="mt-4 flex gap-4">
            <h2 className=" flex mr-2"><GrLocation className="text-2xl
            "></GrLocation>  {location}</h2>
            <h2 className=" flex mr-2"><HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}</h2>
        </div>


        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;

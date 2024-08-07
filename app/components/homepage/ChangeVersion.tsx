'use client'
import React from "react";

export default function ChangeVersion()
{

    
    const handleVersionChange = (event) => {
        // console.log('event.target.value:',event.target.value);
        localStorage.setItem('version', event.target.value);
      
    };
    const version = localStorage.getItem('version');
    return (
        <div className="form-control w-full bg-base-200 pb-4">

        <label className="form-control w-full grid justify-end  bg-base-200 ">
        <div className="label">
          <span className="label-text">Change Translation</span>
        </div>
        <select className="select select-bordered select-md text-center" onChange={handleVersionChange}>
          <option hidden >{version}</option>
          <option value='KJV'>KJV</option>
          <option value='ASV'>ASV</option>
          <option value='NET'>NET</option>
          <option value='NIV'>NIV</option>
        </select>
       
      </label>

        </div>
    )
}
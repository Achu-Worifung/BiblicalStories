'use client'
import React from "react";

export default function ChangeVersion({version})
{
    console.log('version:',typeof version);
    
    const handleVersionChange = (event) => {
        // console.log('event.target.value:',event.target.value);
        localStorage.setItem('version', event.target.value);
        window.location.reload();
    };
    return (
        <div className="form-control w-full bg-base-200 pb-10">

        <label className="form-control w-full grid justify-end px-6 bg-base-200 ">
        <div className="label">
          <span className="label-text">Change Translation</span>
        </div>
        <select className="select select-bordered select-md text-center" onChange={handleVersionChange}>
          <option  value={version}>{version}</option>
          {version !== 'NLT' && <option value='NLT'>NLT</option>}
          <option value='KJV'>KJV</option>
          <option value='ASV'>ASV</option>
          <option value='NET'>NET</option>
          <option value='NIV'>NIV</option>
        </select>
       
      </label>

        </div>
    )
}
'use client'
import React, { useEffect, useState } from "react";

export default function ChangeVersion() {
    const [version, setVersion] = useState('');

    useEffect(() => {
        // This will only run in the browser
        const storedVersion = localStorage.getItem('version');
        if (storedVersion) {
            setVersion(storedVersion);
        }
    }, []);

    const handleVersionChange = (event) => {
        const newVersion = event.target.value;
        localStorage.setItem('version', newVersion);
        setVersion(newVersion);
    };

    return (
        <div className="form-control w-full bg-base-200 pb-4">
            <label className="form-control w-full grid justify-end bg-base-200">
                <div className="label">
                    <span className="label-text">Change Translation</span>
                </div>
                <select
                    className="select select-bordered select-md text-center"
                    onChange={handleVersionChange}
                    value={version} // Control the select value
                >
                    <option hidden>{version || "Select Version"}</option>
                    <option value="KJV">KJV</option>
                    <option value="ASV">ASV</option>
                    <option value="NET">NET</option>
                    <option value="NIV">NIV</option>
                </select>
            </label>
        </div>
    );
}

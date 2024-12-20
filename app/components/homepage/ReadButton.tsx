'use client'
import React from "react";

import Link from 'next/link'


interface readButtonProps
{
    name:string
}
export default function ReadButton( {name}:readButtonProps)  {

    return (
        <Link href={`/${name}`} className="btn btn-primary" >Read Now</Link>
    )
}
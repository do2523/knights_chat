"use client"

import { api } from "note/trpc/react";


export function PostList() {
    const { data, isPending, error } = api.post.all.useQuery();
	console.log("Hello Fork");
    if (isPending){
        return <div>Loading...</div>
    }
    
    if (error){
        return <div>Error: {error.message}</div>
    }

    return (
        <>
        <ul className="left-0 w-full h-full"> 
            {data.map((post, i) => (
                <li key={i}>
                    <div className="text-white p-2 pt-4 w-full hover:bg-slate-800" key={i}>{post.content}</div>
                </li>
            ))}
            <div className="m-2"></div>
        </ul>
        </>
    )
}
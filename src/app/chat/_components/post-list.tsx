"use client"

import { api } from "note/trpc/react"


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
        {data.map((post, i) => (
            <div className="hover:text-black border rounded-full p-2 w-full hover:bg-blue-500" key={i}>{post.content}</div>
        ))}
        </>
    )
}
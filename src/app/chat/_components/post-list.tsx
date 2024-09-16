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
        <div>
        {data.map((post, i) => {
            return (
            <li className="pt-4" key={i}>
                <div className="flex flex-row text-white py-2 h-full w-full hover:bg-slate-800 bg-black" key={i}>
                    <img src={post.user.image?.toString()} className="message-profile-picture" key={i}></img>

                        <div className="flex flex-col w-full h-full">
                            <span>{post.user.name}</span>
                            <span>{post.content}</span>
                        </div>
                </div>
            </li>)
        })}
        <div className="my-6"></div>
        </div>
    )
}
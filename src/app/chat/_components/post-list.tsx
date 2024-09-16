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
            <li className="pt-2" key={i}>
                <div className="flex flex-row text-white h-full w-full hover:bg-slate-800 bg-black" key={i}>
                    <div className="flex items-center justify-center">
                        <img src={post.user.image?.toString()} className="flex mx-5 my-4 h-10 w-10 rounded-full" key={i}></img>
                    </div>
                    

                    <div className="flex flex-col w-full justify-center">
                        <span className="text-base">{post.user.name}</span>
                        <span>{post.content}</span>
                    </div>
                </div>
            </li>)
        })}
        <div className="my-4"></div>
        </div>
    )
}
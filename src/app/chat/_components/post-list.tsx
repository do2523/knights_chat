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
            const time = post.createdAt.toLocaleTimeString();

            // removes seconds from the full time string
            const formattedTime = `${time.slice(0, -6)} ${time.slice(time.length -2, time.length)}`;

            return (
            <li className="pt-2" key={i}>
                <div className="flex flex-row text-white h-full w-full py-2 hover:bg-slate-800 bg-black" key={i}>
                    <div className="flex flex-col items-center justify-center mx-7">
                        <img src={post.user.image?.toString()} className="flex h-10 w-10 rounded-full" key={i}></img>
                        <span className="text-xs items-center justify-center whitespace-nowrap text-slate-300">{formattedTime}</span>
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
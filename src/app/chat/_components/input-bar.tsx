"use client"

import { useState } from "react";
import { api } from "../../../trpc/react"

export function InputBar() {
    const [text, setText] = useState("");
    
    const utils = api.useUtils();
    const createPost = api.post.create.useMutation({
        onSuccess: async () => {
            await utils.post.all.invalidate();
        },
    });

    const submitPost = () => {
        if(text.trim() != "") {
            createPost.mutate({ content: text });
            setText("")
        }
    }

    return (
        <div className="sticky bottom-0 left-0 flex-row flex max-w-full">
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Send a message" className="p-1 w-full" type="text" onKeyDown={(keyDown) => {
                if(keyDown.key === "Enter") { submitPost() }}}/>
            <button onClick={() => {submitPost()}} className="bg-black p-5 text-white">Submit</button>
        </div>
    )
}
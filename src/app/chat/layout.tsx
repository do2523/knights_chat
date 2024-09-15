import React from "react";
import { InputBar } from "./_components/input-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="flex flex-col h-full bg-slate-700">
            <div className="overflow-y-auto overflow-x-hidden">   
                {children}
            </div>
            <InputBar />
        </div>
    )
}
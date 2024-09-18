import React from "react";
import Sidebar from "../_components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return(
        <div className="flex h-screen flex-row w-screen relative">
              <Sidebar />
            <div className="relative flex flex-col h-full w-full bg-black">
                <div className="overflow-y-auto overflow-x-hidden h-full">   
                    {children}
                </div>
            </div>
        </div>
    )
}
import Button from "../_components/button";
import { ProfileComponent } from "./_components/user-profile";
import { redirect } from "next/navigation"; // For server-side redirects
import { getServerAuthSession } from "note/server/auth";


export default async function Profile() {
    const session = await getServerAuthSession();
    if (!session){
        return (redirect("/api/auth/callback/discord"));
    }
    else{

        return (
            <div className="bg-black text-white flex flex-col p-3 h-screen">
            <div className="items-center justify-center flex m-auto">
                <ProfileComponent />
            </div>
            <div className="bottom-0 left-0 absolute m-5">
                <Button href="../"/>
            </div>
        </div>
    )
        } 
}
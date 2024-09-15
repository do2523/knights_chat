import Button from "../_components/button";
import { ProfileComponent } from "./_components/user-profile";

export default function Profile() {
    return (
        <div className="bg-slate-500 text-white flex flex-col p-3 h-screen">
            <div className="items-center justify-center flex m-auto">
                <ProfileComponent />
            </div>
            <div className="bottom-0 left-0 absolute m-5">
                <Button href="../"/>
            </div>
        </div>
    )
}
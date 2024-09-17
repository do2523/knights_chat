import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { getServerAuthSession } from "note/server/auth";
import { BsPlus } from "react-icons/bs";

export const SidebarWidth = "w-16";

export default async function Sidebar() {
    const session = await getServerAuthSession();

    const userProfileImage = session?.user.image?.toString();

    return(<div>
        <div className="relative top-0 left-0 bg-black h-screen w-16 m-0 flex flex-col">
            <SidebarImageIcon icon={<img src={userProfileImage}/>} href="/profile" />
            <SidebarIcon icon={<BsPlus size="32" />} href="" />
        </div>
    </div>)
}

const SidebarImageIcon = ({ icon, href}: { icon: JSX.Element, href: Url }) => {
    return(
        <div className="sidebar-icon">
            <Link href={href}>
                {icon}
            </Link>
        </div>
    );
}

const SidebarIcon = ({ icon, href}: { icon: JSX.Element, href: Url }) => {
    return(
        <div className="sidebar-icon bg-slate-500 hover:bg-blue-600 text-white hover:text-slate-200 rounded-3xl hover:rounded-2xl transition-all ease-linear duration-150">
            <Link href={href}>
                {icon}
            </Link>
        </div>
    );
}
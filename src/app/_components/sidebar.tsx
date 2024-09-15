import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { getServerAuthSession } from "note/server/auth";

export const SidebarWidth = "w-16";

export default async function Sidebar() {
    const session = await getServerAuthSession();

    const userProfileImage = session?.user.image?.toString();

    return(<div>
        <div className="sticky top-0 left-0 bg-slate-600 h-screen w-16 m-0 flex flex-col">
            <SidebarIcon icon={<img src={userProfileImage}/>} href="/profile" />
        </div>
    </div>)
}

const SidebarIcon = ({ icon, href}: { icon: JSX.Element, href: Url }) => {
    return(
        <div className="sidebar-icon">
            <Link href={href}>
                {icon}
            </Link>
        </div>
    );
}
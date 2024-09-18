import Link from "next/dist/client/link";
import { Url } from "next/dist/shared/lib/router/router";
import { MouseEventHandler } from "react";

export function SidebarImageIcon({ icon, href}: { icon: JSX.Element, href: Url }) {
    return(
        <div className="sidebar-icon">
            <Link href={href}>
                {icon}
            </Link>
        </div>
    );
}

export function SidebarIcon({ icon, href, onClick }: { icon: JSX.Element, href?: Url, onClick?: MouseEventHandler<HTMLElement> }) {
    if(!href) {
        return(
            <div onClick={onClick} className="sidebar-icon bg-slate-500 hover:bg-blue-600 text-white hover:text-slate-200 rounded-3xl hover:rounded-2xl transition-all ease-linear duration-150">
                {icon}
            </div>
        )
    }

    return(
        <Link href={href} onClick={onClick} className="sidebar-icon bg-slate-500 hover:bg-blue-600 text-white hover:text-slate-200 rounded-3xl hover:rounded-2xl transition-all ease-linear duration-150">
            {icon}
        </Link>
    );
}
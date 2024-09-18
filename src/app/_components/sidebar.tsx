import { SidebarImageIcon } from "./sidebar-icons";
import { getServerAuthSession } from "note/server/auth";
import SidebarChatIcons from "./sidebar-chat-icons";
import SidebarCreateChatIcon from "./sidebar-create-chat-icon";

export const SidebarWidth = "w-16";

export default async function Sidebar() {
    const session = await getServerAuthSession();
    const userProfileImage = session?.user.image?.toString();

    return(<div>
        <div className="relative top-0 left-0 bg-black h-screen w-16 m-0 flex flex-col">
            <SidebarImageIcon icon={<img src={userProfileImage}/>} href="/profile" />
            <SidebarChatIcons />
            <SidebarCreateChatIcon />
        </div>
    </div>)
}
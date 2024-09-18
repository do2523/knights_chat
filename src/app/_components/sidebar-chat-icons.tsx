import { getServerAuthSession } from "note/server/auth"
import { api } from "note/trpc/server";
import { SidebarIcon } from "./sidebar-icons";
import { BsFillHexagonFill } from "react-icons/bs";

export default async function SidebarChatIcons() {
    const session = await getServerAuthSession();
    const id = session?.user.id;

    // should never happen
    if(!id) return;

    const user = await api.user.getById(id);

    const chats = user?.usersToChats.map(
        ({ chat }) => {
            return {
                ...chat,
                key: chat.id,
            }
        });
    
    return(
        <ul>
            {chats?.map((chat, i) => {
                return(
                    <li key={chat.key}>
                        <SidebarIcon icon={<BsFillHexagonFill />} href={`/chat/${chat.id}`} />
                    </li>
                    
                )
            })}
        </ul>
    )
}
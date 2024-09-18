import { getServerAuthSession } from "note/server/auth"
import { api } from "note/trpc/server";
import { SidebarIcon } from "./sidebar-icons";
import { BsFillHexagonFill } from "react-icons/bs";
import React from "react";

export default async function SidebarChatIcons() {
    const session = await getServerAuthSession();
    const id = session?.user.id;

    // should never happen
    if(!id) return;

    const user = await api.user.getById(id);

    const chats = user?.usersToChats.map(
        ({ chat }) => chat,
      ).sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      //chats?.map(chat => console.log(chat.createdAt));

    return(
        <div>
            {chats?.map((chat, i) => {
                return(
                    <React.Fragment key={i} >
                    <SidebarIcon icon={<BsFillHexagonFill key={i} />} href={`/chat/${chat.id}`} key={i} />
                    </React.Fragment>
                )
            })}
        </div>
    )
}
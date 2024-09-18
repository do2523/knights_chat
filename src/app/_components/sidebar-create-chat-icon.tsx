"use client";

import { api } from "note/trpc/react";
import { SidebarIcon } from "./sidebar-icons";
import { BsFillHexagonFill, BsPlus } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SidebarChatIcons from "./sidebar-chat-icons";

export default function SidebarCreateChatIcon() {
    const utils = api.useUtils();

    const [iconList, setIconsList] = useState<JSX.Element[]>([]);

    const createChat = api.chat.create.useMutation({
        onSuccess: (id) => {
            console.log("THe id: " + id);
            setIconsList(iconList.concat(<SidebarIcon icon={<BsFillHexagonFill />} href={`/chat/${id}`} key={iconList.length} />));
        },
    });

    const test = () => {
        createChat.mutate({ name: "testGroup" });
    }

    return(
        <div>
            {iconList}
            <SidebarIcon icon={<BsPlus size="32" onClick={test}/>} />
        </div>
    )
}
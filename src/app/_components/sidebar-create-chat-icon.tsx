"use client";

import { api } from "note/trpc/react";
import { SidebarIcon } from "./sidebar-icons";
import { BsPlus } from "react-icons/bs";

export default function SidebarCreateChatIcon() {
    const createChat = api.chat.create.useMutation();

    const test = () => {
        createChat.mutate({ name: "testGroup" });
    }

    return(
        <SidebarIcon icon={<BsPlus size="32" onClick={test}/>} />
    )
}
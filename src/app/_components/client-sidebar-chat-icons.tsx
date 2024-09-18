"use client"

import { BsFillHexagonFill } from "react-icons/bs";
import { SidebarIcon } from "./sidebar-icons";
import { useState } from "react";

export default function ClientSidebarChatIcons() {
    const [iconList, setIconsList] = useState([<SidebarIcon icon={<BsFillHexagonFill />} />]);

    return(
        <div>
            {iconList}
        </div>
    )
}
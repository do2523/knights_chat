import { getServerAuthSession } from "note/server/auth";
import { PostList } from "../_components/post-list";
import TitleBar from "../_components/title-bar";
import { api } from "note/trpc/server";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { chat: string} }) {
    const session = await getServerAuthSession();
    const id = session?.user.id;

    // should never happen
    if(!id) return;

    const user = await api.user.getById(id);

    const chats = user?.usersToChats.map(
        ({ chat }) => chat,
      );
    
    const chatIds = chats?.map(
        ({ id }) => id,
    );

    if(!chatIds?.includes(params.chat)) {
        console.log(params.chat);
        return (redirect("/api/auth/callback/discord"));
    }

    const chat = await api.chat.getById(params.chat);

    return(
        <div>
            <TitleBar title={chat?.name ? chat?.name : ""}/>
            <p className="text-blue-400">Username: {session?.user.name}</p>
            <div className="h-full w-full left-0 bottom-0 flex flex-col">
                <PostList chat={params.chat} />
            </div>
        </div>
    )
}
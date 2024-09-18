import { getServerAuthSession } from "note/server/auth";
import { PostList } from "./_components/post-list";
import TitleBar from "./_components/title-bar";
import { redirect } from "next/navigation"; // For server-side redirects
import { InputBar } from "./_components/input-bar";


export default async function Chat() {
    const session = await getServerAuthSession();
    if (!session){
        return (redirect("/api/auth/callback/discord"));
    }
    else {
        return (
            <div className="relative flex flex-col h-full w-full bg-black">
                <TitleBar title="Main Chat"/>
                <p className="text-blue-400">Username: {session?.user.name}</p>
                <div className="h-full w-full left-0 bottom-0 flex flex-col">
                    <PostList chat="10183c4b-0c09-417a-b8ea-ae6645dbc8bf" />
                </div>
                <InputBar chat="10183c4b-0c09-417a-b8ea-ae6645dbc8bf" />
            </div>
        );
    }
}

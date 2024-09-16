import { getServerAuthSession } from "note/server/auth";
import { PostList } from "./_components/post-list";
import Link from "next/link";
import TitleBar from "./_components/title-bar";

export default async function Chat() {
    const session = await getServerAuthSession();
    return (
        <div>
            <TitleBar title="Main Chat"/>
            <p className="text-blue-400">Username: {session?.user.name}</p>
            <div className="h-full w-full left-0 bottom-0 flex flex-col">
                <PostList />
            </div>
        </div>
    );
}

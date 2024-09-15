import { getServerAuthSession } from "note/server/auth";
import { PostList } from "./_components/post-list";
import Link from "next/link";
import TitleBar from "./_components/title-bar";

export default async function Chat() {
    const session = await getServerAuthSession();
    return (
        <div>
            <TitleBar title="Welcome to Chat"/>
            <Link href="/">
                Homepage
            </Link>
            <p>{session?.user.name}</p>
            {/* This div will take the full height of the viewport and center its children */}
            <div
                className="flex justify-center items-center"
                style={{ height: "100vh", flexDirection: "column" }}
                >
                <br />
                <PostList />
                
            </div>
        </div>
    );
}

import { getServerAuthSession } from "note/server/auth";

export async function ProfileComponent() {
    const session = await getServerAuthSession();
    return (
        <div className="bg-slate-600 flex-col flex rounded-xl p-6 text-center items-center justify-center max-w-80">
            <img src={session?.user.image?.toString()} className="top-3 left-3 flex-1 max-h-36 max-w-36 rounded-full"></img>
            <h1>{session?.user.name}</h1>
            <h1>{session?.user.email}</h1>
        </div>
    )
}
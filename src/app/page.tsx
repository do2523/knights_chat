import Link from "next/link";
import { getServerAuthSession } from "note/server/auth";
import { api, HydrateClient } from "note/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  // void api.post.getLatest.prefetch();
  if (!session){
    return (
      <HydrateClient>
      <main className="w-full flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Knights <span className="text-[hsl(189,100%,67%)]">Chat</span> !
          </h1>
          <div className="font-semibold text-2xl">
            <h1>Please Sign in to access the main chat and the other cool features we offer!</h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {/* {hello ? hello.greeting : "Loading tRPC query..."} */}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {/* {session && <span>Logged in as {session.user?.name}</span>} */}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
          {/* <PostInput />
          <PostList /> */}
        </div>
      </main>

    </HydrateClient>

    );
  }
  else {

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Knights <span className="text-[hsl(189,100%,67%)]">Chat</span> !
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="/profile"
              >
              <h3 className="text-2xl font-bold">Profile →</h3>
              <div className="text-lg">
                Personal Information <br /> Username <br /> Email
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="/chat"
              >
              <h3 className="text-2xl font-bold">Chat →</h3>
              <div className="text-lg">
                Connnect with other users!
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {/* {hello ? hello.greeting : "Loading tRPC query..."} */}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-white">
                {/* {session && <span>Logged in as {session.user?.name}</span>} */}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
                >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>
        </div>
      </main>

    </HydrateClient>
  );
}

}
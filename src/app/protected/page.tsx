import { getServerSession } from "next-auth";
import { authOptions } from "note/server/auth";
import { redirect } from "next/navigation"; // For server-side redirects

export default async function ProtectedPage1() {
    const session = await getServerSession(authOptions);
  
    if (!session) {
      // Redirect to the sign-in page if the user is not authenticated
      redirect("/api/auth/callback/discord"); // Adjust to your custom sign-in route if needed
    }
  
    return (
      <div>
        <h1>Protected Page 1</h1>
        <p>Only authenticated users can see this content.</p>
      </div>
    );
  }
//   THIS PAGE IS USELESS FOR NOW BUT WILL BE USEFUL SOON ENOUGH! ***********************
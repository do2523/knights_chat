import Link from "next/dist/client/link";

export default function Button({ href }: { href: string }) {
    return (
    <div>
        <Link href={href}>
        <button className="bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-500 transition">Back</button>
        </Link>
    </div>
    )
}
import Link from "next/dist/client/link";

export default function Button({ href }: { href: string }) {
    return (
    <div>
        <Link href={href}>
        <button className="bg-lime-600 py-2 px-4 rounded-md hover:bg-lime-500 transition">Back</button>
        </Link>
    </div>
    )
}
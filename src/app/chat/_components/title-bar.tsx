import Link from "next/link"
export default function TitleBar({title}: {title: string}) {
    return (
        <div className="sticky top-0 left-0 flex items-center justify-between p-4 border-b bg-blue-600 h-14 w-full">
            <h1 className="text-xl font-medium text-white">{title}</h1>
            <Link href="/" className="text-white hover:underline">
                Homepage
            </Link>
        </div>
    )
}
export default function TitleBar({title}: {title: string}) {
    return (
        <div className="sticky top-0 left-0 bg-slate-700 h-14 w-full flex flex-row items-center">
            <div className="ml-5">
             <h1 className="text-white">{title}</h1>
            </div>
        </div>
    )
}
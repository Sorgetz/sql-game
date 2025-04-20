export function UserMessage({ message } : {message: string}) {
    return (
        <>
            <div className="flex items-start gap-2 m-2 justify-end" >
                <div className="rounded-xl rounded-tr-none  bg-amber-600 p-2 mt-4 text-white max-w-[70%] wrap-break-word">
                    {message}
                </div>
            </div>
        </>
    )
}
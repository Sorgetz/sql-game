export function FriendMessage({ message }) {
    return (
        <>
            <div className="border-2 border-amber-950 flex items-start gap-2 m-2" >
                <div className="rounded-full bg-indigo-500  w-10 h-10" ></div>
                <div className="rounded-es-xl rounded-e-xl  bg-indigo-500 p-2 mt-4 text-white max-w-[70%] wrap-break-word">
                    {message}
                </div>
            </div>
        </>
    )
}
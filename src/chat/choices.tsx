export function Choices({ choices, setChoices }) {
    function choseOption(e) {
        setChoices(e.target.textContent)
    }
    return (
        <div className="flex flex-col items-end">
            {choices.map(choice =>
            <>
                <button onClick={choseOption} className="cursor-pointer rounded-xl rounded-tr-none hover:bg-amber-950 bg-amber-600 p-2 mx-2 text-white max-w-[70%] wrap-break-word">
                    {choice}
                </button>
                <br />
            </>
            )}
        </div>
    )
}
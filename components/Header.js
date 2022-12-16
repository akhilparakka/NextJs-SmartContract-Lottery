import ConnectButton from "./ConnectButton"
export default function Header() {
    return (
        <div className="border-b-2 flex flex-row p-5">
            <h1 className="font-bold text-3xl py-4 px-4 ">Decentralized Lottery</h1>
            <div className="ml-auto py-2 px-2">
                <ConnectButton></ConnectButton>
            </div>
        </div>
    )
}

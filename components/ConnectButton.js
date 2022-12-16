import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ConnectButton() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } =
        useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return
        if (typeof window != "undefined") {
            if (window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled])

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account Changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null Account Found ")
            }
        })
    })

    return (
        <div className="absolute top-0 right-0 py-5 px-5">
            {account ? (
                <div className="bg-yellow-300 rounded py-2 px-2 text-white font-bold">{`${account.substring(
                    0,
                    6
                )}...${account.substring(38)}`}</div>
            ) : (
                <button
                    type="button"
                    class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                    onClick={async () => {
                        await enableWeb3()
                        if (window != "undefined") {
                            window.localStorage.setItem("connected", "injected")
                        }
                    }}
                    disabled={isWeb3EnableLoading}
                >
                    Connect
                </button>
            )}
        </div>
    )
}

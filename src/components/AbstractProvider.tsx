"use client"

import { AbstractWalletProvider } from "@abstract-foundation/agw-react";
import { abstractTestnet } from "viem/chains";


export default function AbstractProvider ({children}: { children: React.ReactNode}){
    
    const config = {
        chain: abstractTestnet,
    };

    return(
        <AbstractWalletProvider config={config}>
            {children}
        </AbstractWalletProvider>
    )
}
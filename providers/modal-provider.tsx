"use client"

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMOunted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMOunted) {
        return null
    }
    return (
        <>
            <StoreModal />
        </>
    )
}
"use client"
import { useEffect, useState } from "react"
import {ProModal} from "./ProModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[])
    if (!isMounted) {
        return null
    }
    return (
        <>
        <ProModal />
        </>
    )
}
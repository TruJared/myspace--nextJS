"use client";

import { useSession } from "next-auth/react"

export default function AuthCheck({ children, message }: { children: React.ReactNode, message?: string }) {
    const { data: session, status } = useSession();

    console.log(session, status)

    if (status === 'authenticated') {
        return <>{children}</>
    } else {
        return <>{message}</>
    }
}

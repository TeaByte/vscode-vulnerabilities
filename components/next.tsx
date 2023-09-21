"use client"

import { useRouter } from 'next/navigation';

import { useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
 
export default function Next() {
    const router = useRouter()
    const [page, setPage] = useState(1)
    useEffect(() => {
        const currentUrl = window.location.href.split("/");
        setPage(+currentUrl[currentUrl.length - 1]);
    }, [])

    function next() {
        router.push(`/${page + 1}`);
    }

    function prev() {
        router.push(`/${page - 1}`);
    }

    return (
        <div className="flex w-full md:w-1/2 gap-2">
        {   page > 1 ? 
            <Button className="grow" onClick={prev}><ChevronLeft /></Button> :
            <Button disabled className="grow"><ChevronLeft /></Button>
        }
        <Button className="grow" onClick={next}><ChevronRight /></Button>
        </div>
    )
}
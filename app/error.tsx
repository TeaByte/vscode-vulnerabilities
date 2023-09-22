"use client"

import { ShieldAlert } from "lucide-react";

export default function Error() {
    return (
        <div className="flex flex-col gap-3 items-center justify-between p-16">
            <ShieldAlert className="h-20 w-20" />
            <p>An error occurred while loading the page</p>
        </div>
    );
}
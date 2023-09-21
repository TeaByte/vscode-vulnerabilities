import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex flex-col gap-3 items-center justify-between p-16">
            <Loader2 className="h-20 w-20 animate-spin" />
            <p>Loding Content...</p>
        </div>
    );
}
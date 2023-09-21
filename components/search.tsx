"use client"

import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
 
export default function Search() {
  const [value, setValue] = useState("")

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text"
        placeholder="Name, RepoURL.." 
        value={value} onChange={(e) => setValue(e.target.value)} 
      />
      <Link href={`/search/${value}`}>
        <Button type="submit">
          <SearchIcon className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  )
}
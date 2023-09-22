"use client"

import { useRouter } from 'next/navigation';
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export default function Search() {
  const router = useRouter()
  const [value, setValue] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/search/${value}`)
  }
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input type="text"
        placeholder="Extension name..." 
        value={value} onChange={(e) => setValue(e.target.value)} 
      />
        <Button type="submit">
          <SearchIcon className="h-5 w-5" />
        </Button>
    </form>
  )
}
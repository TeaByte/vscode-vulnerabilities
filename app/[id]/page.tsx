import prisma from '@/lib/prisma'

import { Database } from "lucide-react"
import { type ParamsProps } from "@/types/types";
import Extensions from '@/components/extensions';
import Search from '@/components/search';
import Next from '@/components/next';


export default async function Home({ params }: ParamsProps) {
  const page = +(params.id) - 1;
  const extensions = await prisma.extensions.findMany({
    where: {
        totalvulnerabilities: {
          gt: 0
        }
    },
    orderBy: {
      totalvulnerabilities: 'desc'
    },
    take: 30,
    skip: page * 30
  })

  if(extensions.length === 0) {
    return (
      <div className="flex flex-col gap-3 items-center justify-between p-16">
        <Database className="h-20 w-20" />
        <p>Page ({params.id}) not found in the database</p>
      </div>
    )
  }

  return (
      <div className='flex flex-col justify-center items-center gap-3'>
        <Search />
        <Extensions extensions={extensions} />
        <Next />
      </div>
  )
}

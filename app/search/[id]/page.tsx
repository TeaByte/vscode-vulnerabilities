import prisma from '@/lib/prisma'
import { type ParamsProps } from "@/types/types";

import { Database } from "lucide-react";
import Extensions from '@/components/extensions';
import Search from '@/components/search';

export default async function SearchPage({ params }: ParamsProps) {
  const searchTerm = decodeURIComponent(params.id).toLowerCase();
  const extensions = await prisma.extensions.findMany({
    where: {
      OR: [
        {ExtensionName: {contains: searchTerm}},
        {SourceCode: {contains: searchTerm}},
        {RepositoryName: {contains: searchTerm}},
      ],
    },
  });

  if (extensions.length === 0) {
    return (
      <div className="flex flex-col gap-3 items-center justify-between p-16">
        <Database className="h-20 w-20" />
        <p>({params.id}) not found in the database</p>
      </div>
    )
  } else {
    return (
      <div>
          <div className='flex flex-col justify-center items-center gap-3'>
            <Search />
            <Extensions extensions={extensions} />
          </div>
      </div>
    )
  }
}

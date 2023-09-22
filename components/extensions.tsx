import Extension from '@/components/extension';
import { ExtensionsProps } from '@/types/types';

export default async function Extensions({ extensions }: ExtensionsProps) {
  return (
    <section className='flex flex-wrap gap-3 justify-center'>
        {extensions.map(extension => (
            <Extension 
                key={extension.extensionname}
                name={extension.extensionname} 
                reponame={extension.repositoryname || "N/A"} 
                repourl={extension.sourcecode || "#no-source-code"}
                InstallCount={extension.installcount}
                isVerified={extension.verified}
                totalVulnerabilities={extension.totalvulnerabilities}
            />
        ))}
    </section>
  )
}

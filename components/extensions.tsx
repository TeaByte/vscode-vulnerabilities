import Extension from '@/components/extension';
import { ExtensionsProps } from '@/types/types';

export default async function Extensions({ extensions }: ExtensionsProps) {
  return (
    <section className='flex flex-wrap gap-3 justify-center'>
        {extensions.map(extension => (
            <Extension 
                key={extension.ExtensionName}
                name={extension.ExtensionName} 
                repoName={extension.RepositoryName || "N/A"} 
                repoUrl={extension.SourceCode || "#no-source-code"}
                InstallCount={extension.InstallCount}
                isVerified={extension.Verified === "1"}
                totalVulnerabilities={extension.TotalVulnerabilities}
            />
        ))}
    </section>
  )
}

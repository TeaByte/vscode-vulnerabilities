export interface ParamsProps {
    params: { id: string };
}

export interface ExtensionProps {
    name: string
    repoName: string
    repoUrl: string
    InstallCount: number
    isVerified: boolean
    totalVulnerabilities: number
}

export interface ExtensionsProps {
    extensions: {
        ExtensionName: string;
        Publisher: string;
        Verified: string;
        InstallCount: number;
        SourceCode: string | null;
        RepositoryName: string | null;
        TotalVulnerabilities: number;
        Critical: number;
        High: number;
        Medium: number;
        Low: number;
        HighVulnerabilityNames: string | null;
        MediumVulnerabilityNames: string | null;
        CriticalVulnerabilityNames: string | null;
        LowVulnerabilityNames: string | null;
    }[]
}
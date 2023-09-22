export interface ParamsProps {
    params: { id: string };
}

export interface ExtensionProps {
    name: string
    reponame: string
    repourl: string
    InstallCount: number
    isVerified: boolean
    totalVulnerabilities: number
}

export interface ExtensionsProps {
    extensions: {
        extensionname: string;
        publisher: string;
        verified: boolean;
        installcount: number;
        sourcecode: string | null;
        repositoryname: string | null;
        totalvulnerabilities: number;
        critical: number;
        high: number;
        medium: number;
        low: number;
        highvulnerabilitynames: string | null;
        mediumvulnerabilitynames: string | null;
        criticalvulnerabilitynames: string | null;
        lowvulnerabilitynames: string | null;
    }[]
}
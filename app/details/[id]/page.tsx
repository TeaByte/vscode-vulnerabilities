import prisma from "@/lib/prisma";
import { type ParamsProps } from "@/types/types";

import { Badge } from "@/components/ui/badge"
import { GithubIcon, VerifiedIcon, Database } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Card, CardContent,
  CardDescription, CardFooter,
  CardHeader, CardTitle,
} from "@/components/ui/card"


function Vlnerabilities(content: string | null) {
    if (content && content.length > 1) {
      const vulnerabilities = content.split(", ");
      return (
        <div className="flex flex-col gap-1">
          {vulnerabilities.map((vulnerability) => (
            <p className="opacity-50" key={vulnerability}>
              {vulnerability}
            </p>
          ))}
        </div>
      );
    } else {
      return <span className="opacity-50">No Vulnerabilities Found</span>;
    }
}



export default async function DetailsPage({ params }: ParamsProps) {
    const extension = await prisma.extensions.findFirst({
      where: {
        RepositoryName: params.id,
      },
    });
    if(extension) 
        return (
        <div className="flex flex-col gap-3 items-center justify-between">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex gap-1 items-center">
                        <p >{extension.RepositoryName}</p> 
                        {extension.Verified === "1" && <VerifiedIcon className="h-4 w-4" />}
                    </CardTitle>
                    <CardDescription>
                        {extension.InstallCount} Installs,
                        Publisher: {extension.Publisher}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <Badge className="w-fit">Total Vulnerabilities ({extension.TotalVulnerabilities})</Badge>
                    <div>
                        <p>Low Vulnerability ({extension.Low})</p>
                        {Vlnerabilities(extension.LowVulnerabilityNames)}
                    </div>
                    <div>
                        <p>Medium Vulnerability ({extension.Medium})</p>
                        {Vlnerabilities(extension.MediumVulnerabilityNames)}
                    </div>
                    <div>
                        <p>High Vulnerability ({extension.High})</p>
                        {Vlnerabilities(extension.HighVulnerabilityNames)}
                    </div>
                    <div>
                        <p>Critical Vulnerability ({extension.Critical})</p>
                        {Vlnerabilities(extension.CriticalVulnerabilityNames)}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <p></p>
                    <a target="_blank" href={extension.SourceCode || ""}>
                        <Button><GithubIcon/></Button>
                    </a>
                </CardFooter>
            </Card>
        </div>
        );
  else
    return (
      <div className="flex flex-col gap-3 items-center justify-between p-16">
        <Database className="h-20 w-20" />
        <p>({params.id}) not found in the database</p>
      </div>
    );
}

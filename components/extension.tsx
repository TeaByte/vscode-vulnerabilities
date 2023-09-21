import Link from "next/link"

import { ExtensionProps } from "@/types/types"
import { GithubIcon, VerifiedIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card, CardDescription,
  CardFooter,CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Extension(props: ExtensionProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="flex gap-1 items-center">
            <p className="truncate max-w-[200px]">{props.name}</p> {props.isVerified && <VerifiedIcon className="h-4 w-4" />}
        </CardTitle>
        <CardDescription>{props.InstallCount} Installs, {props.totalVulnerabilities} Vulnerabilities</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Link href={'/details/' + props.repoName}>
          <Button variant="outline">More Details</Button>
        </Link>
        <a target="_blank" href={props.repoUrl}>
            <Button><GithubIcon/></Button>
        </a>
      </CardFooter>
    </Card>
  )
}
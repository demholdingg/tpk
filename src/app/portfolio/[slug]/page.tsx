import { Metadata } from "next";
import { generateMetadata } from "./metadata";
import ProjectDetailClient from "./ProjectDetailClient";

export { generateMetadata };

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ProjectDetailClient params={params} />;
}

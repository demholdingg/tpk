import { Metadata } from "next";
import { ALL_PROJECTS } from "@/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = ALL_PROJECTS.find((p) => p.id === slug);

  return {
    title: `${project?.name || "Project"} | Teknika Pesona Kahayan`,
    description: project?.description,
  };
}

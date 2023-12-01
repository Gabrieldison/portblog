import { createClient } from "@/src/prismicio";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SliceZone } from "@prismicio/react";
import { components } from "@/src/slices";

const Project = () => {
  const [project, setProject] = useState<any>(null);
  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();

        const projectUID = query?.uid as string;

        const fetchedProject = await client.getByUID("projects", projectUID);

        console.log(fetchedProject, "EU SOU O CONSOLE LOG DE DENTRO");

        setProject(fetchedProject.data);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, [query?.uid]);

  console.log(project, "EU SOU O CONSOLE LOG DE FORA");

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-5xl">{project.title[0].text}</h1>
      <SliceZone slices={project.slices} components={components} />
    </div>
  );
};

export default Project;

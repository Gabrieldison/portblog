import { createClient } from "@/src/prismicio";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projectsList, setProjectsList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();
        const fetchedProjects = await client.getAllByType("projects");

        setProjectsList(fetchedProjects);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, []);

  console.log(
    projectsList.map((post) => console.log(post.data)),
    "EU SOU O BIG GUY DA PARADA"
  );

  if (!projectsList) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main>
        {projectsList.map((projects) => (
          <Link
            href={`/projects/[uid]`}
            as={`/projects/${projects.uid}`}
            key={projects.uid}
          >
            <div className="flex bg-gray-900 mb-8 rounded-xl">
              <section>
                <h1 className="text-2xl mb-8">{projects.data.title[0].text}</h1>
                <span>{projects.data.description[0].text}</span>
              </section>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}

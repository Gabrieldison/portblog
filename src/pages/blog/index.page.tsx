import { createClient } from "@/src/prismicio";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const [postList, setPostList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();
        const fetchedPost = await client.getAllByType("post1");

        setPostList(fetchedPost);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, []);

  console.log(
    postList.map((post) => console.log(post)),
    "EU SOU O BIG GUY DA PARADA"
  );

  if (!postList) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {postList.map((posts) => (
        <Link href={`/blog/[uid]`} as={`/blog/${posts.uid}`} key={posts.uid}>
          <div className="flex bg-gray-900 mb-8 rounded-xl">
            <Image
              src={posts.data.image.url}
              alt={posts.data.image.alt}
              width={320}
              height={180}
            />

            <section>
              <h1>{posts.data.titulo[0].text}</h1>
              <span>{posts.data.content[0].text}</span>
            </section>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Blog;

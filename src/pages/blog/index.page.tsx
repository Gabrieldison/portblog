import { createClient } from "@/src/prismicio";
import { useState, useEffect } from "react";
import Post from "./[uid]";
import Link from "next/link";
import Image from "next/image";
import { RichTextField, RichTextNodeType } from "@prismicio/client";

const Blog = () => {
  const [post, setPost] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();
        const fetchedPost = await client.getAllByType("post1");

        setPost(fetchedPost);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, []);

  console.log(post, "EU SOU O BIG GUY DA PARADA");

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {post.map((posts) => (
        <Link href="/blog/[uid]" as={`/blog/${posts.uid}`} key={posts.uid}>
          <div className="flex bg-gray-900 mb-8 rounded-xl">
            <Image
              src={posts.data.image.url}
              alt={posts.data.image.alt}
              width={200}
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

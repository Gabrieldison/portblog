import { createClient } from "@/src/prismicio";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Post = () => {
  const [post, setPost] = useState<any>(null);
  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();

        const postUID = query?.uid as string;

        const fetchedPost = await client.getByUID("post1", postUID);

        console.log(fetchedPost, "EU SOU O CONSOLE LOG DE DENTRO");

        setPost(fetchedPost.data);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, [query?.uid]);

  console.log(post, "EU SOU O CONSOLE LOG DE FORA");

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.titulo[0].text}</h1>
      <p>{post.content[0].text}</p>

      <Image
        src={post.image.url}
        alt={post.image.alt}
        width={100}
        height={100}
      />
    </div>
  );
};

export default Post;

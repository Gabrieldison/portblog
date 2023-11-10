import { createClient } from "@/src/prismicio";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Subtitle from "@/src/slices/Subtitle";

const Post = () => {
  const [post, setPost] = useState<any>(null);
  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();

        const postUID = query?.uid as string;

        const fetchedPost = await client.getByUID("posts", postUID);

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
      <h1>{post.title[0].text}</h1>
      <h3>{post.slices[0].primary.subtitle[0].text}</h3>
      <p>{post.slices[1].primary.content[0].text}</p>

      <Image
        src={post.slices[2].primary.image.url}
        alt={post.slices[2].primary.image.alt}
        width={320}
        height={320}
      />
    </div>
  );
};

export default Post;

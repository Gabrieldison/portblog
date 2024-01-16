import { createClient } from "@/src/prismicio";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SliceZone } from "@prismicio/react";
import { components } from "@/src/slices";

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
    <div className="flex flex-col items-center">
      <h1 className="text-5xl">{post.title[0].text}</h1>
      <div className="mx-40 text-center">
        <SliceZone slices={post.slices} components={components} />
      </div>
    </div>
  );
};

export default Post;

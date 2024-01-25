"use client";

import { createClient } from "@/src/prismicio";
import { components } from "@/src/slices";
import { SliceZone } from "@prismicio/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState<any>(null);
  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();

        const postUID = query?.uid as string;

        const fetchedPost = await client.getByUID("posts", postUID);

        setPost(fetchedPost.data);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, [query?.uid]);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">{post.title[0].text}</h1>
      <div className="prose max-w-full mx-auto">
        <SliceZone slices={post.slices} components={components} />
      </div>
    </div>
  );
};

export default Post;

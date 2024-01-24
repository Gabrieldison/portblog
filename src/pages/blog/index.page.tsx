import { useDarkMode } from "@/src/context/DarkModeContext";
import { createClient } from "@/src/prismicio";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [postList, setPostList] = useState<any[]>([]);
  const { isDarkMode } = useDarkMode();
  const t = useTranslations("Blog");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = createClient();
        const fetchedPost = await client.getAllByType("posts");

        setPostList(fetchedPost);
      } catch (error) {
        console.error("Erro ao buscar dados do Prismic:", error);
      }
    };

    fetchData();
  }, []);

  console.log(
    postList.map((post) => console.log(post.data)),
    "EU SOU O BIG GUY DA PARADA"
  );

  if (!postList) {
    return <div>{t("loading")}</div>;
  }

  return (
    <main>
      {postList.map((posts) => (
        <Link href={`/blog/[uid]`} as={`/blog/${posts.uid}`} key={posts.uid}>
          <div
            className={`flex mb-8 rounded-lg ${
              isDarkMode
                ? "border border-zinc-950 hover:bg-zinc-950 hover:bg-opacity-75 transition duration-100 delay-75"
                : "border border-gray-100 hover:bg-gray-50 hover:bg-opacity-75 transition duration-100 delay-75"
            } `}
          >
            <section className="p-2">
              <h1 className="text-2xl mb-2">{posts.data.title[0].text}</h1>
              <span>{posts.data.description[0].text}</span>
            </section>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Blog;

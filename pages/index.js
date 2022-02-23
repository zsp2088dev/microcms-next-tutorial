// pages/index.js
import Link from "next/link";
import { client } from "../libs/microcms";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/articles/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "articles" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
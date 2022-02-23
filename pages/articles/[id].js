import { client } from "../../libs/microcms";
import styles from '../../styles/Home.module.scss';

export default function ArticleId({ article }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{article.title}</h1>
      <p className={styles.publishedAt}>{article.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "articles" });
  const paths = data.contents.map((content) => `/articles/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const article = await client.get({ endpoint: "articles", contentId: id });

  return {
    props: {
      article: article,
    },
  };
};

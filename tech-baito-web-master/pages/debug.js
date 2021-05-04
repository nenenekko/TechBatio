import React from "react";
import Link from "next/link";
import Layout from "@/components/molecules/Layout";

const routes = [
  {
    path: "/",
    title: "最初のページ"
  },
  {
    path: "/levelcheck",
    title: "レベルチェック | TOP"
  },
  {
    path: "/levelcheck/sample",
    title: "レベルチェック | サンプル"
  },
  {
    path: "/mypage",
    title: "マイページ"
  }
];
const Page = () => {
  return (
    <Layout>
      <h1>画面一覧</h1>
      <ul>
        {routes.map(item => (
          <li key={item.title}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Page;

import type { ExtendedLevelType } from "~utils/levels";

import Head from "next/head";
import dynamic from "next/dynamic";

const Game = dynamic(() => import("~components/Game"), { ssr: false });

type StaticProps = {
  levels: ExtendedLevelType[];
};

export default function Home({ levels }: StaticProps) {
  return (
    <>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center h-screen p-2 bg-[#464a4f]">
        <Game levels={levels} />
      </main>
    </>
  );
}

import { GetStaticProps } from "next";

import { getLevels } from "~utils/api";
export const getStaticProps: GetStaticProps<StaticProps> =
  async (/* context */) => {
    const levels = getLevels();
    return { props: { levels }, revalidate: 600 };
  };

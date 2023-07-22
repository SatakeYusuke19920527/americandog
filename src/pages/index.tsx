import { Main } from "next/document";
import {Layout} from "../components/Layout"
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
    <div>
    <main className="center">
    <div className="example">
      {/* タイトルをどうするか決める */}
      あめりかんどっぐ
    </div>
    {/* 利用規約に同意しないと入れないようにする */}
    <Link href="/secondtest"><button>ゲームページに飛ぶ</button></Link>
    </main>
    </div>
    </Layout>
  )
}


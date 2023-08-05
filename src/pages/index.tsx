import { useState } from "react";
import { Main } from "next/document";
import {Layout} from "../components/Layout"
import Link from 'next/link';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false)

  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Layout>
    <div>
    <main className="center">
    <div className="example">
      {/* タイトルをどうするか決める */}
      あめりかんどっぐ
    </div>
    {/* 利用規約に同意しないと入れないようにする */}
    <Link href="/secondtest"><button type="submit" disabled={!isChecked}>ゲームページへ飛ぶ</button></Link>
    <br/><p　className="example">※チェックすると利用規約に同意したことになります</p><input type="checkbox" onChange={toggleCheckbox}></input>
    <br/><Link href=""　className="example">利用規約ページへ飛ぶ</Link>
    </main>
    </div>
    </Layout>
  )
}


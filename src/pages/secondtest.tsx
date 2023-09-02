import Image from 'next/image'
import Front from '@/components/Front'
import {Layout} from "../components/Layout"



export default function About() {
    return (
      <Layout>
        <div>
    <h1 className="example">本番ページ</h1>
    <div className='honban'>
    <Front/>
    </div>
    </div>
      </Layout>　 
    )
  }
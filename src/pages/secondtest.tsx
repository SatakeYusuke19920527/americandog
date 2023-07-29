import Image from 'next/image'
import {Layout} from "../components/Layout"

export default function About() {
    return (
      <Layout>
        <div>
    <h1 className="example">本番ページ</h1>
    <div className='honban'>
    <img className='honbanimg' src="/front.png"/>
    </div>
    </div>
      </Layout> 
    )
  }
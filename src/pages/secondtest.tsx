import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'
import {Layout} from "../components/Layout"

export default function About() {
    return (
      <Layout>
        <div>
    <h1 className="example">本番ページ</h1>
    <div className='honban'>
    {/* <img className='honbanimg' src="/front.png"/> */}
    <img src="/"/>
    </div>
    </div>
      </Layout> 
    )
  }
import { Layout } from "../components/Layout"
import { Handle } from "../components/Hand"
import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
  TwitterIcon,
} from "react-share";

export default function About() {
    const URL = 'https://localhost:3000/';
    const QUOTE = 'みんなに共有してね　#ホラー';

    return (
      <Layout>
        <div>
          <h1 className="example">本番ページ</h1>
          <div className='honban'>
      <FacebookShareButton url={URL} quote={QUOTE}>
      <FacebookIcon size={60} round />
      </FacebookShareButton>
      <TwitterShareButton url={URL} title={QUOTE}>
      <TwitterIcon size={60} round />
      </TwitterShareButton>
      <LineShareButton url={URL} title={QUOTE} >
      <LineIcon size={60} round />
      </LineShareButton>
          </div>
        </div>
      </Layout> 
    )
}
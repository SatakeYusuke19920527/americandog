import { Layout } from "../components/Layout"
import { Handle } from "../components/Hand"
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  FacebookIcon,
  LineIcon,
  TwitterIcon
} from "react-share";



export default function About() {
    const URL = 'https://localhost:3000/';
  const QUOTE = 'あめりかんどっぐ　みんなに共有してね　#ホラー';

  const isBrowser = typeof window !== 'undefined';
  const urlCopyHandler = async (url: string) => {
    // Next.jsを使用している場合はbuild時にコケるので`isBrowser`の条件分岐が必要です
    if (!isBrowser) return;
    try {
      await navigator.clipboard.writeText(url);
      console.log('URLのコピーに成功しました');
    } catch {
      console.error('URLのコピーに失敗しました');
    }
  };

    return (
      <Layout>
        <div>

          <h1 className="example">本番ページ</h1>
          <div className='honban'>
            <div className='sharebox'>
            <div className="share">SNSでシェアしましょう </div>
            <img className="ink" src="ink-303244_1280.png" />
            <div className="snsbutton">
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
            <br/>
           <button type='button' className='urlbutton' onClick={() => urlCopyHandler(location.href)}>
                URLをコピー
           </button>
            </div>
            </div>
       </div>
      </Layout> 

    )
}
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
    const URL = 'https://americandog.vercel.app/';
  const QUOTE = 'あめりかんどっぐ　みんなに共有してね　#ホラー';

  const isBrowser = typeof window !== 'undefined';
  const urlCopyHandler = async (url: string) => {
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
            <img src="gUV2bq53JfFpNux4f44L1699701771-1699701910.gif"></img>
       </div>
      </Layout> 
    )
}
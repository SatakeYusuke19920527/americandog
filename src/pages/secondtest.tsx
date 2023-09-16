import { Layout } from "../components/Layout"
import { Handle } from "../components/Hand"

export default function About() {
  const buttonAlert = () => {
    alert('ボタンがクリックされました。');
  }
    return (
      <Layout>
        <div>
          <h1 className="example">本番ページ</h1>
          <div className='honban'>
            <div className="bg-img">
              <img className="bed" onClick={buttonAlert} src="/bed.png"></img>
              <Handle>
                {/* aaa */}
              </Handle>
              </div>
          </div>
        </div>
      </Layout> 
    )
}

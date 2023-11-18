import Link from "next/link"
export default function Footer() {
    return (
      <>
        <div className="footer">
          <Link href="/" className="homelink">ホーム画面</Link>
          <Link href="/secondtest" className="sharelink">シェア画面</Link>
          <Link href="/termsOfUse" className="riyoulink">利用規約</Link>
        </div>
          <p className="text-white text-center"> ©️americandog</p>
      </>
    )
}
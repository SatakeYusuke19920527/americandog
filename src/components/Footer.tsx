import Link from "next/link"
export default function Footer() {
    return (
      <footer className="footer">
          <ul className="text-center">
           <li><Link href="/">ホーム画面</Link></li>
           <li><Link href="/secondtest">シェア画面</Link></li>
           <li><Link href="/termsOfUse">利用規約</Link></li>
          </ul>
      <p className="text-white text-center"> ©️americandog</p>
      </footer>
    )
}
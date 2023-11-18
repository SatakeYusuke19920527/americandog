import Link from "next/link"
export default function Footer() {
    return (
<<<<<<< HEAD
      <>
        <div className="footer">
          <Link href="/" className="homelink">ホーム画面</Link>
          <Link href="/secondtest" className="sharelink">シェア画面</Link>
          <Link href="/termsOfUse" className="riyoulink">利用規約</Link>
        </div>
          <p className="text-white text-center"> ©️americandog</p>
      </>
||||||| merged common ancestors
      <>
      <div className="text-right align-text-bottom">
      <Link href="/termsOfUse  "　className="text-white w-full">利用規約</Link>
      </div>
      <p className="text-white text-center"> ©️americandog</p>
      </>
=======
      <footer className="absolute bottom-100% ">
      <div className=" text-center">
      <Link href="/  "　className="text-white text-left ">american</Link>
      <Link href="/termsOfUse  "　className="text-white ">利用規約</Link>
      </div>
      <p className="text-white text-center"> ©️americandog</p>
      </footer>
>>>>>>> 1b7b7a54e679adb9e89ec24e06c222a9e72fcdec
    )
}
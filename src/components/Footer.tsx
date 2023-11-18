import Link from "next/link"
export default function Footer() {
    return (
      <footer className="absolute bottom-100% ">
        <div className=" text-center">
        <Link href="/  "　className="text-white text-left ">american</Link>
        <Link href="/termsOfUse  "　className="text-white ">利用規約</Link>
        </div>
        <p className="text-white text-center"> ©️americandog</p>
      </footer>
    )
}
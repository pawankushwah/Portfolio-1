import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Link href="#Bio" className="block bg-gray-500 text-gray-300 text-center p-2 hover:bg-slate-500">Goto Top</Link>
      <div className="bg-gray-600 text-gray-300 text-center p-2">
        <div className="text-2xl">Some Links</div>
        <div className="grid grid-cols-2 justify-center gap-2">
          <div className="flex flex-col justify-center items-center">

          <Link href={"#Bio"}>Bio</Link>
          <Link href={"#About"}>About</Link>
          <Link href={"#Projects"}>Projects</Link>
          <Link href={"#Contact"}>Contact</Link>
          </div>
          <div>
            <div>Connect on Social Media</div>
          </div>
        </div>
      </div>
      <hr className="bg-white" />
      <div className="text-center p-2 text-gray-300">
        Copyright &copy; {new Date().getFullYear()} | Pawan Kushwah
      </div>
    </>
  );
}

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center content-center gap-20 min-h-[100vh]">
      <div className="introduction flex flex-col justify-center self-center gap-10">
        <h1 className="title text-8xl font-bold  text-center">ROY WASWA</h1>
        <h4 className="text-4xl text-center font-medium">Coming Soon</h4>
      </div>
      <div className="socials flex flex-row justify-center content-center self-center gap-10">
        <Link href={"https://www.instagram.com/_.waswa._"} target="_blank"><div className="instagram">
          <FontAwesomeIcon className="w-8 h-8 text-foreground" icon={faInstagram}/>
        </div></Link>
      </div>
    </div>
  );
}

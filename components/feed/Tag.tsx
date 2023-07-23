import solana from "@/public/solana.svg";
import Image from "next/image";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export function Tag({ tag }: { tag: string }) {
  const tagLowerCased = tag.toLowerCase();

  switch (tagLowerCased) {
    case "solana":
      return <Image src={solana} alt="solana" width={50} height={8} className="mt-1"/>;
    case "twitter":
      return <FaTwitter className="text-[12px] mt-[3px]"/>;
    case "discord":
      return <FaDiscord />;
    default:
      return <p className="text-[12px]">{tag}</p>;
  }
}
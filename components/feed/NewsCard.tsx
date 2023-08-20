"use client"
import { Database } from "@/types/supabase"
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai"
import { RxChatBubble } from "react-icons/rx"
import Image from "next/image"
import { Tag } from "./Tag"
import { TwitterShareButton } from "next-share"
 
type NewsCardProps = {
  news: Database["public"]["Tables"]["news_previews"]["Row"]
}

export function NewsCard({ news }: NewsCardProps) {

  const date = new Date(news.created_at)

  return (
    <a 
    href="https://discord.gg/csybktKjnd"
    target='_blank'
    rel='noreferrer'
    className='flex flex-row drop-shadow-xl justify-between rounded-lg overflow-hidden bg-cardWhite cursor-pointer hover:opacity-90'>
      <div className='flex flex-col py-2 pl-4 pr-4 space-y-1 w-full'>
        <p className="text-[12px]">{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</p>
        <h1 className="text-[20px] font-bold">{news.title}</h1>
        <p className="text-[16px]">{news.slug}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-2">
            {news.tags.map((tag) => (
              <div className="bg-[#DADADA] px-2 py-1 rounded-full">
                <Tag tag={tag} />
              </div>
            ))}
          </div>
          <div className="flex flex-row space-x-1 my-auto text-[14px]">
            {news.clicks !== 0 && <div className="flex flex-row ">
              <AiOutlineHeart className="my-auto mr-px" />
              <p className="my-auto">{news.clicks}</p>
            </div>}
            {news.inputs !== 0 && <div className="flex flex-row">
              <RxChatBubble className="my-auto mr-1" />
              <p className="my-auto">{news.inputs}</p>
            </div>}
            <TwitterShareButton
              url={`https://www.syndicatenetwork.io/`}
              title={news.slug}
              >
            <AiOutlineShareAlt className="my-auto text-[16px] hover:opacity-75" />
            </TwitterShareButton>
          </div>
        </div>
      </div>
      <div className="bg-black hidden lg:flex min-w-[200px] min-h-[88px] relative">
        <Image src={news.thumbnail} alt="news" fill style={{objectFit: "cover"}}/>
      </div>
    </a>
  );
}
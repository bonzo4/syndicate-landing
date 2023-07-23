import Image from 'next/image'
import monke from '@/public/monke.png'
import yacht from '@/public/yacht.png'
import skull from '@/public/skull.png'
import ape from '@/public/ape.png'
import ghost from '@/public/ghost.png'

export function LogoBar() {
  return (
    <div className="flex flex-row space-x-3 lg:space-x-5">
      <Image src={monke} alt="monke" width={50} height={50} />
      <Image src={yacht} alt="yacht" width={50} height={50}/>
      <Image src={skull} alt="skull" width={50} height={50}/>
      <Image src={ape} alt="ape" width={50} height={50}/>
      <Image src={ghost} alt="ghost" width={50} height={50}/>
    </div>
  )
}
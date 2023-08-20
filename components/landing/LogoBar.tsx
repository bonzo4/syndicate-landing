import Image from 'next/image'
import solana from '@/public/logos/solana.png'
import monke from '@/public/logos/monke.webp'
import animoca from '@/public/logos/animoca.png'
import polygon from '@/public/logos/polygon.png'
import azuki from '@/public/logos/azuki.png'
import bayc from '@/public/logos/bayc.png'
import aptos from '@/public/logos/aptos.png'

export function LogoBar() {
  return (
    <div className='flex flex-col space-y-3'>
      <div className='flex flex-col space-y-3 lg:flex-row lg:space-x-3'>
        <Image src={solana} alt='Solana Foundation' height={40} className='object-contain'/>
        <Image src={monke} alt='MonkeDAO' height={50} className='object-contain'/>
        <div className='flex flex-row space-x-2'>
          <Image src={animoca} alt='Animoca Brands' height={50} className='object-contain'/>
          <Image src={bayc} alt='Bored Ape Yacht Club' height={70} className='object-contain'/>
        </div>
      </div>
      <div className='flex flex-col space-y-3 lg:flex-row lg:space-x-3'>
        <Image src={polygon} alt='Polygon' height={40} className='object-contain'/>
          <Image src={azuki} alt='Azuki' height={30} className='object-contain'/>
          <Image src={aptos} alt='Aptos' height={30} className='object-contain'/>
      </div>
    </div>
  )
}
import { BiLoaderAlt } from 'react-icons/bi';

export default function Loading() {
  //html loader with spinning animation
  return (
    <div className='flex h-screen flex-col items-center justify-center text-white'>
      <BiLoaderAlt className='animate-spin text-5xl' />
      <p className='text-2xl'>Loading...</p>
    </div>
  );
}

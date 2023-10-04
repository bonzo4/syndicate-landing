'use client';
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      className='absolute left-0 top-0 m-10 text-2xl'
      onClick={() => router.back()}
    >
      <IoMdArrowRoundBack size={48} />
    </button>
  );
}

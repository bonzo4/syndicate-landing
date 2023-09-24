'use client';
import { AiFillCopy } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const copy = async () => {
    if (!text) return;
    console.log('copying');
    await navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <button
      onClick={copy}
      className='h-full items-center justify-center rounded-md border-none bg-cardBlack px-4 py-3  text-lg text-[#DADADA] focus:ring-0'
    >
      <AiFillCopy size={24} />
      <ToastContainer />
    </button>
  );
}

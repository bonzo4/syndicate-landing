'use client';

import NextError from 'next/error';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <NextError statusCode={500} title={error.message} reset={reset} />
    </div>
  );
}

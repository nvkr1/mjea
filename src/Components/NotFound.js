import React from "react";

export default function NotFound() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen w-full'>
      <h1 className='text-xl sm:text-5xl'>404 - Page Not Found</h1>
      <p className='text-lg sm:text-4xl'>
        The page you are looking for does not exist.
      </p>
      <a className='text-lg underline' href='/'>
        Go back to home page
      </a>
    </div>
  );
}

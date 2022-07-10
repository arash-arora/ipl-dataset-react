import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className='w-full text-center mb-5 text-[#706c6c]'>
        <hr />
        <div className='flex items-center justify-center mt-5 gap-5'>
          <div>
            Developed by &nbsp;
            <span className='font-bold animate-pulse'>Arash Arora</span>
          </div>
          <a
            href='https://linkedin.com/in/arash-arora'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-600'>
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    </>
  );
}

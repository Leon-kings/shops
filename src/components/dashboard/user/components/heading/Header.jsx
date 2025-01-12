import React from 'react';
// import { AiOutlineMail } from 'react-icons/ai';
React;
const LandingPage = () => {
  const companyLogos = ['https://tse1.mm.bing.net/th?id=OIP.jpo_ae_tJZig_pL7rt0lpwAAAA&pid=Api&P=0&h=180', 'https://tse3.mm.bing.net/th?id=OIP.g7c41zIXKbjlks7-7PgVggAAAA&pid=Api&P=0&h=180', 'https://tse4.mm.bing.net/th?id=OIP.QKfY2O7ju2OIONBZ3ueuowAAAA&pid=Api&P=0&h=180'];
  const marketerLogos = ['https://i.pravatar.cc/130', 'https://i.pravatar.cc/131', 'https://i.pravatar.cc/132', 'https://i.pravatar.cc/133', 'https://i.pravatar.cc/134','https://i.pravatar.cc/135', 'https://i.pravatar.cc/136', 'https://i.pravatar.cc/137', 'https://i.pravatar.cc/138', 'https://i.pravatar.cc/139', 'https://i.pravatar.cc/140'];
   //const marketerLogos = new Array(10).fill('https://i.pravatar.cc/130');
  return (
    <div className='w-full mx-auto px-4 bg-white'>
      <header className='flex justify-between items-center p-4 bg-indigo-100 shadow-lg mt-2'>
        <h1 className='text-3xl font-bold cursor-pointer text-gray-700'>CompanyLogo</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li className='hover:text-gray-600'>About Us</li>
            <li className='hover:text-gray-600'>Services</li>
            <li className='hover:text-gray-600'>Blog</li>
            <li className='hover:text-gray-600'>Contact</li>
          </ul>
        </nav>
      </header>
      <main className='bg-indigo-300 rounded-lg shadow-lg mt-10 py-20'>
        <section className='flex justify-between items-center p-10 '>
          <div className='space-y-4 flex flex-col gap-6'>
            <h2 className='text-4xl font-bold text-black'>Engage and Innovate</h2>
            <p className='text-md text-gray-800'>Leading creative solutions tailored to meet your needs. Lets build something great together.</p>
            <div className='font-semibold text-gray-700'>Join other <span className='text-blue-700'>3200+ Marketers</span> now</div>
            <div className='flex -space-x-2 overflow-hidden'>
              {marketerLogos.map((logo, index) => (
                <img key={index} src={logo} alt='Marketer logo' className='inline-block h-8 w-8 rounded-full ring-2 ring-white' />
              ))}
            </div>
          </div>
          <div className='w-96 bg-white p-4 rounded-lg'>
            <div className='text-lg font-semibold mb-2'>Stay Updated</div>
            <form className='flex flex-col space-y-2'>
              <input type='email' placeholder='Enter your email' className='border p-2' />
              <button className='bg-blue-800 text-white p-2'>Subscribe</button>
            </form>
            <p className='text-xs mt-2'>We respect your privacy.</p>
          </div>
        </section>
        <section className='flex justify-end px-12'>
          <div className='flex space-x-4'>
            {companyLogos.map((logo, index) => (
              <img key={index} src={logo} alt='Company logo' className='h-[50px] grayscale hover:grayscale-0 transition duration-300 ease-in-out' />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
/** @format */

import userReviewer from "../../assets/user-reviewer.jpg";

const Reviewer = () => {
  return (
    <section className='space-y-2'>
      <div className='flex items-center space-x-3'>
        <img
          src={userReviewer}
          alt='user reviewer'
          className='rounded-full object-cover w-10 md:w-14 2xl:w-16'
        />
        <div>
          <h1 className='text-sm md:text-base 2xl:text-xl'>
            Karyawan 1 - Staff IT
          </h1>
          <p className='text-xs md:text-sm 2xl:text-lg text-gray-500'>
            Hasil Review : 90
          </p>
        </div>
      </div>
      <p>
        <p className='text-justify text-sm md:text-base mx-3 lg:mx-0 md:max-w-[320px] lg:max-w-[400px] 2xl:max-w-[500px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </p>
    </section>
  );
};

export default Reviewer;

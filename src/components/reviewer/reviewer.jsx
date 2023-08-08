/** @format */

import { BiSolidUserCircle } from "react-icons/bi";

const Reviewer = () => {
  return (
    <section className='flex items-center space-x-3'>
      <BiSolidUserCircle className='text-5xl md:text-6xl 2xl:text-6xl' />
      <div>
        <h1 className='text-sm md:text-base 2xl:text-lg'>
          Karyawan 1 - Staff IT
        </h1>
        <p className='text-xs md:text-sm 2xl:text-base text-gray-500'>
          Hasil Review : 90
        </p>
      </div>
    </section>
  );
};

export default Reviewer;

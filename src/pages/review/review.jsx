/** @format */

import { BiSolidUserCircle } from "react-icons/bi";
import Reviewer from "../../components/reviewer/reviewer";

const Review = () => {
  return (
    <section className='mt-32 flex justify-center'>
      <div className='w-11/12 lg:w-9/12 space-y-4 lg:space-y-7 max-w-[1920px]'>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-3 items-center'>
            <BiSolidUserCircle className='text-6xl md:text-8xl 2xl:text-9xl' />
            <div>
              <h1 className='font-semibold text-lg md:text-xl 2xl:text-2xl'>
                Karyawan 1
              </h1>
              <p className='text-sm text-gray-500 md:text-base 2xl:text-lg'>
                Jabatan abcde
              </p>
              <button className='btn btn-info text-white btn-xs w-32 normal-case md:btn-sm'>
                Berikan review
              </button>
            </div>
          </div>

          <div className='text-lg md:text-xl 2xl:text-2xl font-semibold flex flex-col items-center'>
            <h1>Score</h1>
            <p>90</p>
          </div>
        </div>

        <div className='border-b border-black' />

        <div className='space-y-2'>
          <h1 className='text-sm md:text-base 2xl:text-lg'>
            Orang yang mereview
          </h1>
          <div className='grid grid-cols-1 gap-y-3 md:grid-cols-2'>
            <Reviewer />
            <Reviewer />
            <Reviewer />
            <Reviewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

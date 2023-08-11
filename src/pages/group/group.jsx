/** @format */

import { FaUsers, FaPlus } from "react-icons/fa";

const Group = () => {
  return (
    <section className=' mt-32 flex justify-center'>
      <div className='flex justify-center flex-wrap gap-5'>
        <div className='border rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center hover:scale-125'>
          <FaUsers className='text-5xl' />
          <h1>INI TESTING</h1>
        </div>
        <div className='border rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center hover:scale-125 '>
          <FaPlus className='text-5xl' />
          <h1>Tambah Forum</h1>
        </div>
      </div>
    </section>
  );
};

export default Group;

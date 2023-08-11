/** @format */

import { FaUsers, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Group = () => {
  const forumList = [JSON.parse(localStorage.getItem("forum"))];
  return (
    <section className=' mt-32 flex justify-center'>
      <div className='flex justify-center flex-wrap gap-5'>
        {forumList?.map((index, i) => (
          <Link
            to='/forum'
            key={i}
            className='border rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center hover:scale-125 cursor-pointer'
          >
            <FaUsers className='text-5xl' />
            <h1 to='/forum'>{index.forum}</h1>
          </Link>
        ))}
        <div className='border rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center hover:scale-125 '>
          <FaPlus className='text-5xl' />
          <Link to='/tambah-forum'>Tambah Forum</Link>
        </div>
      </div>
    </section>
  );
};

export default Group;

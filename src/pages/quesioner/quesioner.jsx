/** @format */

import { useParams } from "react-router-dom";
import imgUser from "../../assets/img-user.jpg";
import RadioSelect from "../../components/radio-select/radioSelect";
import userData from "../../data-dummy/user-data/user";

const Quesioner = () => {
  const { id } = useParams();
  return (
    <section className='mt-32 flex flex-col items-center space-y-8'>
      <div className='flex space-x-4 items-center'>
        <img
          src={userData[id].foto}
          alt='user image'
          className='rounded-full object-cover w-16 md:w-24'
        />
        <h1 className='font-semibold text-lg md:text-2xl'>
          {userData[id].nama} - {userData[id].posisi}
        </h1>
      </div>

      <form
        action=''
        className='border-2 rounded mx-3 p-6 space-y-5 md:space-y-8 flex flex-col 2xl:p-16 2xl:w-[800px]'
      >
        <ul className='list-decimal text-sm space-y-4'>
          <li className='text-justify space-y-3 md:text-lg'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temp.
            </span>
            <div className='flex space-x-2 md:space-x-5'>
              <RadioSelect label='sangat buruk' name='question-1' />
              <RadioSelect label='buruk' name='question-1' />
              <RadioSelect label='sedang' name='question-1' />
              <RadioSelect label='baik' name='question-1' />
              <RadioSelect label='sangat baik' name='question-1' />
            </div>
          </li>
        </ul>
        <button
          type='button'
          className='btn btn-info btn-xs md:btn-sm md:w-36 text-white'
        >
          Kirim
        </button>
      </form>
    </section>
  );
};

export default Quesioner;

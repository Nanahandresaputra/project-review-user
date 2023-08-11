/** @format */

import ilustrationUser from "../../assets/ilustration/adduser.svg";
import FormAddQuesionare from "./formAddQuesionare";
import FormAddUser from "./formAddUser";

const TambahUser = () => {
  return (
    <section className=' flex justify-center items-center mt-32'>
      <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 lg:w-10/12 2xl:w-9/12'>
        <div className='order-last'>
          <FormAddQuesionare />
        </div>

        <div className=' flex flex-col justify-center items-center w-full space-y-8 md:space-y-12 lg:space-y-10'>
          <h1 className='text-base text-center md:text-start w-72 font-semibold mx-5 md:text-xl md:w-[350px] 2xl:w-[500px] 2xl:text-2xl'>
            BUAT FORUM PENILAIAN UNTUK KARYAWAN
          </h1>
          <FormAddUser />
        </div>
      </div>
    </section>
  );
};

export default TambahUser;

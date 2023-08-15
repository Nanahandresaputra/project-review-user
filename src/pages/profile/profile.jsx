/** @format */

import ModalProfile from "../../components/modal/modalProfile";
import Reviewer from "../../components/reviewer/reviewer";
// import { useNavigate, useParams } from "react-router-dom";
import userData from "../../data-dummy/user-data/user";
import { PiNotePencilFill } from "react-icons/pi";

const Profile = () => {
  const id = localStorage.getItem("auth");
  //   const navigate = useNavigate();
  let posisi = localStorage.getItem("namaForum");
  return (
    <section className='mt-32 mb-10 flex justify-center'>
      <div className='w-11/12 lg:w-9/12 space-y-4 lg:space-y-7 max-w-[1920px]'>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-3 items-center'>
            <img
              src={userData[id].foto}
              alt='image user'
              className='rounded-full w-20 md:w-24 2xl:w-28'
            />

            <div>
              <h1 className='flex space-x-3 items-center font-semibold text-lg md:text-xl 2xl:text-3xl'>
                <span>{userData[id].nama}</span>{" "}
                <PiNotePencilFill
                  className='2xl:text-4xl text-gray-500 cursor-pointer'
                  onClick={() => window.my_modal_17.showModal()}
                />
              </h1>
              <p className='text-sm text-gray-500 md:text-base 2xl:text-xl'>
                {userData[id].posisi === "" ? posisi : userData[id].posisi}
              </p>
              <p className='text-sm text-gray-500 md:text-base 2xl:text-xl'>
                {userData[id].email}
              </p>
            </div>
          </div>
          <ModalProfile />

          <div className='text-lg md:text-xl 2xl:text-2xl font-semibold flex flex-col items-center'>
            <h1>Score</h1>
            <p>90</p>
          </div>
        </div>

        <div className='border-b border-black' />

        <div className='space-y-2'>
          <h1 className='text-sm md:text-base 2xl:text-lg'>
            Orang yang mereview Anda
          </h1>
          <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 2xl:gap-y-7'>
            {userData?.map((index, i) => (
              <Reviewer key={i} user={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

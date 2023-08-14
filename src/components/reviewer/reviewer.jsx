/** @format */

import profilePlaceholer from "../../assets/profile-placeholder.jpg";
import userData from "../../data-dummy/user-data/user";

const Reviewer = ({ user }) => {
  let userId = localStorage.getItem("auth");
  let posisi = localStorage.getItem("namaForum");
  return (
    <section className='space-y-2'>
      <div className='flex items-center space-x-3'>
        <img
          src={
            userData[userId].role === "manajer" ? user.foto : profilePlaceholer
          }
          alt='user reviewer'
          className='rounded-full object-cover w-10 md:w-14 2xl:w-16'
        />
        <div>
          <h1 className='text-sm md:text-base 2xl:text-xl'>
            {userData[userId].role === "manajer"
              ? `${user.nama}  - ${user.posisi === "" ? posisi : user.posisi}`
              : "Anonymus"}
          </h1>
          <p className='text-xs md:text-sm 2xl:text-lg text-gray-500'>
            Hasil Review : 90
          </p>
        </div>
      </div>

      <p className='text-justify text-sm md:text-base mx-3 lg:mx-0 md:max-w-[320px] lg:max-w-[400px] 2xl:max-w-[500px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
};

export default Reviewer;

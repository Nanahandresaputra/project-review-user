/** @format */

import React from "react";
import userData from "../../data-dummy/user-data/user";
import swal from "sweetalert";

const ModalProfile = () => {
  let id = localStorage.getItem("auth");

  const submit = () => {
    swal("Berhasil!", "Data berhasil diedit!", "success");
  };

  return (
    <dialog id='my_modal_17' className='modal'>
      <form method='dialog' className='modal-box'>
        <label className='flex flex-col space-y-2 md:space-y-5 w-full'>
          <span className='md:text-xl 2xl:text-xl'>Nama</span>
          <input
            type='text'
            className={
              "input input-bordered w-full md:text-xl 2xl:input-group-lg  2xl:text-xl"
            }
            defaultValue={userData[id].nama}
          />
        </label>

        <label className='flex flex-col space-y-2 md:space-y-5 w-full'>
          <span className='md:text-xl 2xl:text-xl'>Posisi</span>
          <input
            type='text'
            className={
              "input input-bordered w-full md:text-xl 2xl:input-group-lg  2xl:text-xl"
            }
            defaultValue={userData[id].posisi}
          />
        </label>

        <label className='flex flex-col space-y-2 md:space-y-5 w-full'>
          <span className='md:text-xl 2xl:text-xl'>Email</span>
          <input
            type='email'
            className={
              "input input-bordered w-full md:text-xl 2xl:input-group-lg  2xl:text-xl"
            }
            defaultValue={userData[id].email}
          />
        </label>

        <label className='flex flex-col space-y-2 md:space-y-5 w-full'>
          <span className='md:text-xl 2xl:text-xl'>Email</span>
          <input
            type='email'
            className={
              "input input-bordered w-full md:text-xl 2xl:input-group-lg  2xl:text-xl"
            }
            defaultValue={userData[id].email}
          />
        </label>

        <label className='flex flex-col space-y-2 md:space-y-5 w-full'>
          <span className='md:text-xl 2xl:text-xl'>Password</span>
          <input
            type='password'
            className={
              "input input-bordered w-full md:text-xl 2xl:input-group-lg  2xl:text-xl"
            }
            defaultValue='sfssfdsdf'
          />
        </label>

        <div className='modal-action'>
          <button
            className='btn btn-info text-white md:text-xl'
            onClick={submit}
          >
            Edit
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default ModalProfile;

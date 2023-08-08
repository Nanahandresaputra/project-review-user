/** @format */

import React from "react";
import Table from "../../components/table/table";
import { useNavigate } from "react-router-dom";

const Forum = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full flex justify-center'>
      <div className='relative  mt-28 mx-3 space-y-5 flex flex-col items-center md:w-9/12 md:space-y-7 2xl:space-y-10 max-w-[1920px]'>
        <div className='flex justify-between items-center w-full lg:w-6/12'>
          <h1 className='font-semibold text-lg lg:text-xl 2xl:text-2xl'>
            Forum Penilaian Karyawan
          </h1>
          <button
            type='button'
            className='btn btn-info text-white btn-sm md:btn-md 2xl:btn-lg'
            onClick={() => navigate("tambah-user")}
          >
            Tambah User +
          </button>
        </div>
        <Table />
      </div>
    </section>
  );
};

export default Forum;

/** @format */

import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import userData from "../../data-dummy/user-data/user";

const Forum = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [user, setUser] = useState(userData);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setQuery(data.search);
  };

  useEffect(() => {
    if (query.length) {
      let find = userData.filter((usr) => usr.nama.includes(query));
      setUser(find);
    } else {
      setUser(userData);
    }
  }, [query]);

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

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-9/12 flex space-x-5'
        >
          <input
            type='text'
            placeholder='cari nama karyawan'
            className='input input-bordered w-full md:text-xl 2xl:input-group-lg  2xl:text-xl'
            {...register("search")}
          />
          <button type='submit' className='btn btn-info text-white'>
            Cari
          </button>
        </form>

        <Table user={user} query={query} />
      </div>
    </section>
  );
};

export default Forum;

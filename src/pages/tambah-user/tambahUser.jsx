/** @format */

import InputText from "../../components/input-text/inputText";

const TambahUser = () => {
  return (
    <section className='mt-32 md:mt-36 flex flex-col justify-center items-center space-y-3 md:space-y-5'>
      <h1 className='text-lg font-semibold md:text-xl'>
        Tambah User untuk di review
      </h1>

      <form className='border shadow- p-5 flex flex-col space-y-5 md:w-96'>
        <InputText label='Nama Karyawan' type='text' />
        <InputText label='Jabatan' type='text' />
        <label className='space-y-2 md:space-y-4'>
          <span className='md:text-xl'>foto</span>
          <input
            type='file'
            className='file-input file-input-bordered w-full max-w-xs'
          />
        </label>
        <button type='button' className='btn btn-info text-white md:text-xl'>
          Tambah User +
        </button>
      </form>
    </section>
  );
};

export default TambahUser;

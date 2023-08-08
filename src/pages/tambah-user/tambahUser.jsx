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
        <button type='button' className='btn btn-info text-white md:text-xl'>
          Tambah User +
        </button>
      </form>
    </section>
  );
};

export default TambahUser;

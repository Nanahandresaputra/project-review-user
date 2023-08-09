/** @format */

import { useForm } from "react-hook-form";
import InputText from "../../components/input-text/inputText";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className='mt-32 mx-5 mb-10 md:mx-0 md:mt-36 flex flex-col justify-center items-center space-y-3 md:space-y-5'>
      <h1 className='text-lg font-semibold md:text-xl'>REGISTER</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border shadow- p-5 flex flex-col space-y-5 md:w-[700px]'
      >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <InputText
            label='nama karyawan'
            type='text'
            register={register}
            name='nama'
          />
          <InputText
            label='password'
            type='password'
            register={register}
            name='password'
          />
          <InputText
            label='email'
            type='email'
            register={register}
            name='email'
          />
          <InputText
            label='posisi'
            type='text'
            register={register}
            name='posisi'
          />
          <InputText label='role' type='text' register={register} name='role' />
          <InputText
            label='reveral'
            type='text'
            register={register}
            name='reveral'
          />
          <label className='flex flex-col space-y-2 md:space-y-4 md:col-span-2'>
            <span className='md:text-xl'>foto</span>
            <input
              type='file'
              className='file-input file-input-bordered w-full max-w-xs'
              {...register("foto")}
            />
          </label>
        </div>
        <button type='submit' className='btn btn-info text-white md:text-xl'>
          REGISTER
        </button>
      </form>
    </section>
  );
};

export default Register;

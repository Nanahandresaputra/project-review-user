/** @format */

import { useForm } from "react-hook-form";
import InputText from "../../components/input-text/inputText";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const schemaValidation = yup.object().shape({
    nama: yup.string().required("masukan nama karyawan"),
    password: yup.string().required("masukan password"),
    email: yup.string().required("masukan email"),
    posisi: yup.string().required("masukan posisi"),
    role: yup.string().required("masukan role"),
    reveral: yup.string().required("masukan reveral"),
    foto: yup
      .mixed()
      .test("required", "masukan foto", (file) => {
        return file.length;
      })
      .test("type", "hanya masukan gambar", (file) => {
        let typeImage = ["image/png", "image/jpg", "image/jpeg"];
        if (file.length > 0) {
          return file && typeImage.includes(file[0].type);
        }
      }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

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
            errors={errors.nama?.message}
            errorStyle={errors.nama ? "text-red-500" : "hidden"}
          />
          <InputText
            label='password'
            type='password'
            register={register}
            name='password'
            errors={errors.password?.message}
            errorStyle={errors.password ? "text-red-500" : "hidden"}
          />
          <InputText
            label='email'
            type='email'
            register={register}
            name='email'
            errors={errors.email?.message}
            errorStyle={errors.email ? "text-red-500" : "hidden"}
          />
          <InputText
            label='posisi'
            type='text'
            register={register}
            name='posisi'
            errors={errors.posisi?.message}
            errorStyle={errors.posisi ? "text-red-500" : "hidden"}
          />
          <InputText
            label='role'
            type='text'
            register={register}
            name='role'
            errors={errors.role?.message}
            errorStyle={errors.role ? "text-red-500" : "hidden"}
          />
          <InputText
            label='reveral'
            type='text'
            register={register}
            name='reveral'
            errors={errors.reveral?.message}
            errorStyle={errors.reveral ? "text-red-500" : "hidden"}
          />
          <label className='flex flex-col space-y-2 md:space-y-4 md:col-span-2'>
            <span className='md:text-xl'>foto</span>
            <input
              type='file'
              className='file-input file-input-bordered w-full max-w-xs'
              {...register("foto")}
            />
            <span className={errors.foto ? "text-red-500" : "hidden"}>
              {errors.foto?.message}
            </span>
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

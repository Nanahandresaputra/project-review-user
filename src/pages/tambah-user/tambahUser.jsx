/** @format */

import { useForm } from "react-hook-form";
import InputText from "../../components/input-text/inputText";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const schemaValidation = yup.object().shape({
    nama: yup.string().required("masukan email"),
    posisi: yup.string().required("masukan password"),
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
    <section className='mt-32 md:mt-36 flex flex-col justify-center items-center space-y-3 md:space-y-5'>
      <h1 className='text-lg font-semibold md:text-xl'>LOGIN</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='border shadow- p-5 flex flex-col space-y-5 md:w-96'
      >
        <InputText
          label='nama'
          type='text'
          register={register}
          name='nama'
          errors={errors.nama?.message}
          errorStyle={errors.nama ? "text-red-500" : "hidden"}
        />
        <InputText
          label='posisi'
          type='text'
          register={register}
          name='posisi'
          errors={errors.posisi?.message}
          errorStyle={errors.posisi ? "text-red-500" : "hidden"}
        />
        <button type='submit' className='btn btn-info text-white md:text-xl'>
          LOGIN
        </button>
      </form>
    </section>
  );
};

export default Login;

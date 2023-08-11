/** @format */

import InputText from "../../components/input-text/inputText";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormAddUser = () => {
  const schemaValidation = yup.object().shape({
    nama: yup.string().required("masukan nama"),
    posisi: yup.string().required("masukan posisi"),
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='border shadow-lg p-5 w-full flex flex-col space-y-5 md:w-96 2xl:w-[500px] 2xl:py-12'
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
        Tambahkan +
      </button>
    </form>
  );
};

export default FormAddUser;

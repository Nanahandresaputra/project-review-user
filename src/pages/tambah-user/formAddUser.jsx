/** @format */

import InputText from "../../components/input-text/inputText";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onClose } from "../../app/redux/forum/action";
import userData from "../../data-dummy/user-data/user";

const FormAddUser = () => {
  const schemaValidation = yup.object().shape({
    nama: yup.string().required("masukan nama"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let userFind = userData.find((user) => data.nama === user.nama);
    if (userFind) {
      dispatch(onClose(false));
      // data
      swal("Berhasil!", "User Baru Telah Ditambahkan!", "success");
      // navigate(-1);
    } else {
      setError("nama", {
        type: "manual",
        message: "Pilih Nama karyawan",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='border rounded-lg shadow-lg p-5 w-full flex flex-col space-y-5 md:w-96 2xl:w-[500px] 2xl:py-12 bg-white h-96'
    >
      <button
        type='button'
        className='btn btn-xs w-10 lg:btn-sm self-end'
        onClick={() => dispatch(onClose(false))}
      >
        X
      </button>

      <label className='flex flex-col space-y-5'>
        <span>Nama Karyawan</span>
        <select
          defaultValue='Pilih Nama Karyawan...'
          className='select select-bordered w-full'
          {...register("nama")}
        >
          <option value='Pilih Nama Karyawan...' disabled>
            Pilih Nama Karyawan...
          </option>
          {userData?.map((index, i) => (
            <option value={index.nama} key={i}>
              {index.nama}
            </option>
          ))}
        </select>
        <span className={errors.nama ? "text-red-500" : "hidden"}>
          {errors.nama?.message}
        </span>
      </label>

      <button
        type='submit'
        className=' w-full btn btn-info text-white md:text-xl'
      >
        Tambahkan +
      </button>
    </form>
  );
};

export default FormAddUser;

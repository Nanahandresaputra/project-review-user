/** @format */

import { useForm } from "react-hook-form";
import InputText from "../../components/input-text/inputText";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import ilustrationForum from "../../assets/ilustration/add-forum.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addForum } from "../../app/redux/forum/action";

const AddForum = () => {
  const schemaValidation = yup.object().shape({
    nama_forum: yup.string().required("masukan nama forum"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // localStorage.setItem("forum", JSON.stringify(data));
    dispatch(addForum(data));
    swal("Berhasil!", "Forum Telah Ditambahkan!", "success");
    navigate("/");
  };

  const [increment, setIncrement] = useState(1);
  const [fields, setFields] = useState([0]);

  const handleAdd = () => {
    let values = [...fields];
    setIncrement(increment + 1);
    fields.length > 9 ? fields.splice(9) : values.push(increment);
    setFields(values);
  };

  const handleRemove = (idx) => {
    const index = fields.indexOf(idx);
    let values = [...fields];
    if (index > -1) {
      values.splice(index, 1);
      setFields(values);
    }
  };

  return (
    <section className='mb-10 flex justify-center items-center mt-32'>
      <div className='lg:grid lg:grid-cols-2 lg:w-10/12 2xl:w-9/12'>
        <div className='hidden lg:flex items-center justify-center'>
          <img
            src={ilustrationForum}
            alt='login image'
            className='w-[400] h-[500px] 2xl:w-[500px] 2xl:h-[600px]'
          />
        </div>

        <div className=' flex flex-col justify-center items-center space-y-8 md:space-y-12 lg:space-y-10'>
          <h1 className='text-base text-center md:text-start w-72 font-semibold mx-5 md:text-xl md:w-[350px] 2xl:w-[500px] 2xl:text-2xl'>
            BUAT FORUM UNTUK UNTUK PENILAIAN KARYAWAN
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='border shadow-lg p-5 flex flex-col space-y-5 md:w-96 2xl:w-[500px] 2xl:py-12'
          >
            <InputText
              label='Nama forum'
              type='text'
              register={register}
              name='nama_forum'
              errors={errors.nama_forum?.message}
              errorStyle={errors.nama_forum ? "text-red-500" : "hidden"}
            />
            <div>
              <div className='flex justify-between items-center'>
                <h1 className='md:text-xl 2xl:text-xl'>Tambah pertanyaan</h1>
                <button
                  type='button'
                  className='btn btn-info btn-sm md:btn-md w-20 text-white md:text-xl md:w-32'
                  onClick={handleAdd}
                >
                  +
                </button>
              </div>
              <div className='flex space-x-5'>
                <div className='flex flex-col w-full'>
                  {fields?.map((index) => (
                    <div key={index} className='flex space-x-5 items-center'>
                      <InputText
                        type='text'
                        register={register}
                        name={`pertanyaan${index}`}
                      />
                      <button
                        type='button'
                        className='btn btn-error text-white md:text-xl'
                        onClick={() => handleRemove(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='btn btn-info text-white md:text-xl'
            >
              Tambah Forum
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddForum;

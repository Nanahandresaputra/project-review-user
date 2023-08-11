/** @format */

import { useState } from "react";
import InputText from "../../components/input-text/inputText";
import { useForm } from "react-hook-form";

const FormAddQuesionare = () => {
  const { register, handleSubmit } = useForm();
  const [increment, setIncrement] = useState(1);
  const [fields, setFields] = useState([0]);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAdd = () => {
    let values = [...fields];
    setIncrement(increment + 1);
    values.push(increment);
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

  console.log(fields);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='border shadow-lg p-5 flex flex-col space-y-5 md:w-96 2xl:w-[500px] 2xl:py-12'
    >
      <div className='flex justify-between items-center'>
        <h1 className='font-semibold '>Tambah pertanyaan</h1>
        <button
          type='button'
          className='btn btn-info text-white md:text-xl w-32'
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div className='flex space-x-5'>
        <div className='flex flex-col'>
          {fields?.map((index) => (
            <div key={index} className='flex space-x-3 items-center'>
              <InputText
                type='text'
                register={register}
                name={`pertanyaan ${index}`}
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
      <button type='submit' className='btn btn-info text-white md:text-xl'>
        Tambahkan +
      </button>
    </form>
  );
};

export default FormAddQuesionare;

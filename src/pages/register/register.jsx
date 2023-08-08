/** @format */

import { Link } from "react-router-dom";
import InputText from "../../components/input-text/inputText";

const Register = () => {
  return (
    <section className='mt-32 mx-5 mb-5 md:mx-0 md:mb-0 md:mt-36 flex flex-col justify-center items-center space-y-3 md:space-y-5'>
      <h1 className='text-lg font-semibold md:text-xl'>REGISTER</h1>

      <form className='border shadow- p-5 flex flex-col space-y-5 md:w-96'>
        <InputText label='username' type='text' />
        <InputText label='password' type='password' />
        <InputText label='email' type='email' />
        <InputText label='reveral' type='text' />
        <label className='space-y-2 md:space-y-4'>
          <span className='md:text-xl'>foto</span>
          <input
            type='file'
            className='file-input file-input-bordered w-full max-w-xs'
          />
        </label>
        <button type='button' className='btn btn-info text-white md:text-xl'>
          REGISTER
        </button>
      </form>
    </section>
  );
};

export default Register;

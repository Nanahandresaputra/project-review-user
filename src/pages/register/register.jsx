/** @format */

import { Link } from "react-router-dom";
import InputText from "../../components/input-text/inputText";

const Register = () => {
  return (
    <section className='mt-32 md:mt-36 flex flex-col justify-center items-center space-y-3 md:space-y-5'>
      <h1 className='text-lg font-semibold md:text-xl'>REGISTER</h1>

      <form className='border shadow- p-5 flex flex-col space-y-5 md:w-96'>
        <InputText label='username' type='text' />
        <InputText label='password' type='password' />
        <InputText label='email' type='email' />
        <Link
          to='login'
          className='italic text-blue-500 cursor-pointer hover:text-blue-800'
        >
          Sudah punya akun
        </Link>
        <button type='button' className='btn btn-info text-white md:text-xl'>
          REGISTER
        </button>
      </form>
    </section>
  );
};

export default Register;

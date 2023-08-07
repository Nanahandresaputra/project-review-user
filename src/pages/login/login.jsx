/** @format */

import { Link } from "react-router-dom";
import InputText from "../../components/input-text/inputText";

const Login = () => {
  return (
    <section className='mt-32 md:mt-36 flex flex-col justify-center items-center space-y-3 md:space-y-5'>
      <h1 className='text-lg font-semibold md:text-xl'>LOGIN</h1>

      <form className='border shadow- p-5 flex flex-col space-y-5 md:w-96'>
        <InputText label='username' type='text' />
        <InputText label='password' type='password' />
        <Link
          to='register'
          className='italic text-blue-500 cursor-pointer hover:text-blue-800'
        >
          Buat akun
        </Link>
        <button type='button' className='btn btn-info text-white md:text-xl'>
          LOGIN
        </button>
      </form>
    </section>
  );
};

export default Login;

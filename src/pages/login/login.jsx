/** @format */

import InputText from "../../components/input-text/inputText";

const Login = () => {
  return (
    <section className='mt-32 flex flex-col justify-center items-center space-y-3'>
      <h1 className='text-lg font-semibold'>LOGIN</h1>

      <form className='border shadow- p-5 flex flex-col space-y-5 md:w-72'>
        <InputText label='username' type='text' />
        <InputText label='password' type='password' />
        <button type='button' className='btn btn-info text-white'>
          LOGIN
        </button>
      </form>
    </section>
  );
};

export default Login;

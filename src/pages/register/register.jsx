/** @format */

import InputText from "../../components/input-text/inputText";

const Register = () => {
  return (
    <section className='mt-32 flex flex-col justify-center items-center space-y-3'>
      <h1 className='text-lg font-semibold'>REGISTER</h1>
      <form className='border shadow- p-5 flex flex-col space-y-5'>
        <InputText label='username' type='text' />
        <InputText label='password' type='password' />
        <button type='button' className='btn btn-info text-white'>
          REGISTER
        </button>
      </form>
    </section>
  );
};

export default Register;

/** @format */

import { useForm } from "react-hook-form";
import InputText from "../../components/input-text/inputText";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import userData from "../../data-dummy/user-data/user";
import { useNavigate } from "react-router-dom";
import ilustrationLogin from "../../assets/ilustration/login.svg";

const Login = () => {
  const schemaValidation = yup.object().shape({
    email: yup.string().required("masukan email").email("masukan email yang valid"),
    password: yup.string().required("masukan password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(schemaValidation) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    let userLogin = userData.find((user) => data.email === user.email && data.password === user.password);
    if (userLogin) {
      console.log(userLogin);
      localStorage.setItem("auth", userLogin.id);
      alert("login berhasil");
      navigate("/");
    } else {
      setError("password", {
        type: "manual",
        message: "email atau password salah",
      });
    }
  };

  return (
    <section className="mt-32 mb-10 flex justify-center">
      <div className="lg:grid lg:grid-cols-2 lg:w-10/12">
        <div className="hidden lg:flex items-center justify-center">
          <img src={ilustrationLogin} alt="login image" className="w-[400] h-[500px] 2xl:w-[500px] 2xl:h-[600px]" />
        </div>

        <div className=" flex flex-col justify-center items-center space-y-8 md:space-y-12 lg:space-y-10">
          <h1 className="text-base text-center md:text-start w-72 font-semibold mx-5 md:text-xl md:w-[350px] 2xl:w-[500px] 2xl:text-2xl">SELAMAT DATANG SILAKAN MASUK UNTUK MELANJUTKAN</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="border shadow-lg p-5 flex flex-col space-y-5 md:w-96 2xl:w-[500px] 2xl:py-12">
            <InputText label="email" type="email" register={register} name="email" errors={errors.email?.message} errorStyle={errors.email ? "text-red-500" : "hidden"} />
            <InputText label="password" type="password" register={register} name="password" errors={errors.password?.message} errorStyle={errors.password ? "text-red-500" : "hidden"} />
            <button type="submit" className="btn btn-info text-white md:text-xl">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

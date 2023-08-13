/** @format */

import { useNavigate, useParams } from "react-router-dom";
import userData from "../../data-dummy/user-data/user";
import ListSelect from "./listSelect";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { detailForum } from "../../app/redux/forum/action";

const Quesioner = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { forumDetail } = useSelector((state) => state.forum);
  let posisi = localStorage.getItem("namaForum");

  useEffect(() => {
    dispatch(detailForum());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleSend = () => {
    alert("Terimakasih telah memberikan review");
    navigate(-1);
  };

  return (
    <section className="mt-32 mb-16 flex flex-col items-center space-y-8">
      <div className="flex space-x-4 items-center">
        <img src={userData[id].foto} alt="user image" className="rounded-full object-cover w-16 md:w-24" />
        <h1 className="font-semibold text-lg md:text-2xl">
          {userData[id].nama} - {userData[id].posisi === "" ? posisi : userData[id].posisi}
        </h1>
      </div>

      <form action="" className="border-2 rounded mx-3 p-6 space-y-5 md:space-y-8 flex flex-col 2xl:p-16 lg:w-[800px]">
        <ul className="list-decimal text-sm space-y-4">
          {forumDetail.pertanyaan0 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan0}</span>
              <ListSelect name="question-1" />
            </li>
          ) : null}

          {forumDetail.pertanyaan1 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan1}</span>
              <ListSelect name="question-2" />
            </li>
          ) : null}

          {forumDetail.pertanyaan2 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan2}</span>
              <ListSelect name="question-3" />
            </li>
          ) : null}

          {forumDetail.pertanyaan3 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan3}</span>
              <ListSelect name="question-4" />
            </li>
          ) : null}

          {forumDetail.pertanyaan4 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan4}</span>
              <ListSelect name="question-5" />
            </li>
          ) : null}

          {forumDetail.pertanyaan5 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan5}</span>
              <ListSelect name="question-6" />
            </li>
          ) : null}

          {forumDetail.pertanyaan6 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan6}</span>
              <ListSelect name="question-7" />
            </li>
          ) : null}

          {forumDetail.pertanyaan7 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan7}</span>
              <ListSelect name="question-8" />
            </li>
          ) : null}

          {forumDetail.pertanyaan8 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan8}</span>
              <ListSelect name="question-9" />
            </li>
          ) : null}

          {forumDetail.pertanyaan9 ? (
            <li className="text-justify space-y-3 md:text-lg">
              <span>{forumDetail.pertanyaan9}</span>
              <ListSelect name="question-10" />
            </li>
          ) : null}
        </ul>
        <label className="flex flex-col space-y-3">
          <span>Komentar</span>
          <textarea className="textarea textarea-bordered" placeholder="Berikan komentar"></textarea>
        </label>
        <button type="button" className="btn btn-info btn-xs md:btn-sm md:w-36 text-white" onClick={handleSend}>
          Kirim
        </button>
      </form>
    </section>
  );
};

export default Quesioner;

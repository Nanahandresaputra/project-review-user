/** @format */

import Reviewer from "../../components/reviewer/reviewer";
import { useNavigate, useParams } from "react-router-dom";
import userData from "../../data-dummy/user-data/user";

const Review = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="mt-32 mb-10 flex justify-center">
      <div className="w-11/12 lg:w-9/12 space-y-4 lg:space-y-7 max-w-[1920px]">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img src={userData[id].foto} alt="image user" className="rounded-full w-20 md:w-24 2xl:w-28" />

            <div>
              <h1 className="font-semibold text-lg md:text-xl 2xl:text-3xl">{userData[id].nama}</h1>
              <p className="text-sm text-gray-500 md:text-base 2xl:text-xl">{userData[id].posisi}</p>
              <button className="btn btn-info text-white btn-xs w-32 normal-case md:btn-sm 2xl:w-40 2xl:text-base" onClick={() => navigate(`quesioner/${id}`)}>
                Berikan review
              </button>
            </div>
          </div>

          <div className="text-lg md:text-xl 2xl:text-2xl font-semibold flex flex-col items-center">
            <h1>Score</h1>
            <p>90</p>
          </div>
        </div>

        <div className="border-b border-black" />

        <div className="space-y-2">
          <h1 className="text-sm md:text-base 2xl:text-lg">Orang yang mereview</h1>
          <div className="grid grid-cols-1 gap-y-5 md:grid-cols-2 2xl:gap-y-7">
            {userData?.map((index, i) => (
              <Reviewer key={i} user={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

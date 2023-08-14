/** @format */

import { useNavigate } from "react-router-dom";
import userData from "../../data-dummy/user-data/user";

const Table = ({ user }) => {
  const navigate = useNavigate();
  let posisi = localStorage.getItem("namaForum");
  let userId = localStorage.getItem("auth");

  const handleReview = (reviewId) => {
    userData[userId].role != "manajer" ? navigate(`review/${reviewId}/quesioner/${reviewId}`) : navigate(`review/${reviewId}`);
  };

  let reviewed = JSON.parse(localStorage.getItem("reviewed"));

  return (
    <section className="overflow-x-auto flex justify-center w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text bg-gray-400 text-black md:text-base lg:text-lg 2xl:text-xl">
            <th>Nama Karyawan</th>
            <th>Jabatan</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => {
            return (
              <tr key={index} className="md:text-base lg:text-lg 2xl:text-xl">
                <td className="flex justify-start space-x-2 items-center mx-0 px-0 lg:justify-start lg:space-x-10">
                  <img src={item.foto} alt="image user" className="rounded-full w-10 md:w-14" />
                  <span className="truncate">{item.nama}</span>
                </td>
                <td>{item.posisi === "" ? posisi : item.posisi}</td>
                <td>{item.score}</td>
                <td>
                  <button type="button" className="btn btn-info btn-xs md:btn-sm lg:btn-md text-white lg:w-32" onClick={() => handleReview(item.id)}>
                    {reviewed?.find((id) => parseInt(id) === item.id) ? "Edit Review" : "Review"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;

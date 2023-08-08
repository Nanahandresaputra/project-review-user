/** @format */

import { useNavigate } from "react-router-dom";

const Table = () => {
  const dummyData = [
    {
      nama: "Karyawan 5",
      jabatan: "staff",
      score: 90,
    },
    {
      nama: "Karyawan 1",
      jabatan: "staff",
      score: 90,
    },
    {
      nama: "Karyawan 2",
      jabatan: "staff",
      score: 90,
    },
    {
      nama: "Karyawan 3",
      jabatan: "staff",
      score: 90,
    },
    {
      nama: "Karyawan 4",
      jabatan: "staff",
      score: 90,
    },
  ];

  const navigate = useNavigate();

  return (
    <section className='overflow-x-auto flex justify-center w-full'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr className='text bg-gray-400 text-black md:text-base lg:text-lg 2xl:text-xl'>
            <th>Nama Karyawan</th>
            <th>Jabatan</th>
            <th>Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, index) => {
            return (
              <tr
                key={index}
                className="className='md:text-base lg:text-lg 2xl:text-xl"
              >
                <td>{item.nama}</td>
                <td>{item.jabatan}</td>
                <td>{item.score}</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-info btn-xs md:btn-sm lg:btn-md text-white lg:w-32'
                    onClick={() => navigate("review")}
                  >
                    Review
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

/** @format */

import { useEffect } from "react";
import { FaUsers, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getForumList } from "../../app/redux/forum/action";

const Group = () => {
  const { forumList } = useSelector((state) => state.forum);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForumList());
  }, [dispatch]);

  return (
    <section className=" mt-32 flex flex-col space-y-5 md:space-y-8 lg:space-y-10 items-center justify-center">
      <h1 className="w-10/12 md:w-7/12 text-lg md:text-xl text-center font-semibold">FORUM PENILAIAN KARYAWAN PT CERBERUS SINERGI DATASISTEM</h1>
      <div className="flex justify-center flex-wrap gap-5">
        {forumList?.map((index, i) => (
          <Link to={`forum/${index._id}`} key={i} className="border rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center hover:scale-125 cursor-pointer transition">
            <FaUsers className="text-5xl" />
            <h1 className="text-center">{index.nama_forum}</h1>
          </Link>
        ))}
        <Link to="/tambah-forum" className="border rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center hover:scale-125 hover:cursor-pointer transition">
          <FaPlus className="text-5xl" />
          <h1>Tambah Forum</h1>
        </Link>
      </div>
    </section>
  );
};

export default Group;

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
    <section className=" mt-32 flex justify-center">
      <div className="flex justify-center flex-wrap gap-5">
        {forumList?.map((index, i) => (
          <Link to={`forum/${index._id}`} key={i} className="border rounded-lg shadow-lg w-32 h-32 flex flex-col items-center justify-center hover:scale-125 cursor-pointer transition">
            <FaUsers className="text-5xl" />
            <h1>{index.nama_forum}</h1>
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

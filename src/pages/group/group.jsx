/** @format */

import { useEffect } from "react";
import { FaUsers, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getForumList, removeForum } from "../../app/redux/forum/action";
import userData from "../../data-dummy/user-data/user";
import swal from "sweetalert";

const Group = () => {
  const { forumList } = useSelector((state) => state.forum);
  const dispatch = useDispatch();
  let userId = localStorage.getItem("auth");

  useEffect(() => {
    dispatch(getForumList());
  }, [dispatch]);

  const handleRemove = (forumId) => {
    swal({
      title: "Apakah kamu yakin ingin menghapus Forum?",
      text: "Setelah menghapus forum maka data didalam nya akan hilang sepenuhnya!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Forum telah berhasil dihapus!", {
          icon: "success",
        });
        dispatch(removeForum(forumId));
        // alert("forum berhasil dihapus");
        setTimeout(() => window.location.reload(false), 2000);
      } else {
        swal("Forum tidak jadi dihapus tidak ada data yang hilang!");
      }
    });
  };

  return (
    <section className='space-y-5 md:space-y-8 mt-32 lg:space-y-12 flex flex-col items-center justify-center'>
      <h1 className='font-semibold text-lg md:text-xl'>
        Forum Penilaian Karyawan
      </h1>
      <div className='flex justify-center flex-wrap gap-5'>
        {forumList?.map((index, i) => (
          <div
            key={i}
            className='relative border rounded-lg shadow-lg w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center hover:scale-125 cursor-pointer transition'
          >
            {userData[userId].role != "manajer" ? null : (
              <button
                className='absolute top-0 justify-self-start self-end btn btn-xs md:btn-sm btn-error text-white text-base md:text-lg'
                onClick={() => handleRemove(index._id)}
              >
                X
              </button>
            )}
            <Link
              to={`forum/${index._id}`}
              className='flex flex-col items-center'
            >
              <FaUsers className='text-5xl' />
              <h1 className='text-center text-xs md:text-base md:mx-1'>
                {index.nama_forum}
              </h1>
            </Link>
          </div>
        ))}
        {userData[userId].role != "manajer" ? null : (
          <Link
            to='/tambah-forum'
            className='border rounded-lg shadow-lg w-32 h-32 md:w-36 md:h-36 flex flex-col items-center justify-center hover:scale-125 hover:cursor-pointer transition'
          >
            <FaPlus className='text-5xl' />
            <h1 className='text-xs md:text-base md:mx-1'>Tambah Forum</h1>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Group;

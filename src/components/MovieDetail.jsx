import { useContext } from "react";
import { ToggleContext } from "../Context/ToggleProvider";
import { useGetMovieDetailQuery } from "../redux/api/movieApi";

const MovieDetail = () => {

  const { toggleModal, modal, clickedId } = useContext(ToggleContext); 
  const { data: detail } = useGetMovieDetailQuery({clickedId});
  console.log(clickedId);
  console.log(detail);
  

  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 bg-black bg-opacity-50  backdrop-blur-sm flex justify-center items-center z-[1005]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] h-40 rounded-lg bg-white relative p-4 "
      >
        <p>Detail ID : {clickedId}</p>
        <button
          onClick={toggleModal}
          className="w-28 absolute right-3 bottom-3 h-8text-center px-3 py-1 rounded bg-red-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;

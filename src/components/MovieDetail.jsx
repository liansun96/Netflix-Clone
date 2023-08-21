import { useContext, useEffect, useState } from "react";
import { ToggleContext } from "../Context/ToggleProvider";
import {
  useGetDetailRecommendationsQuery,
  useGetDetailVideoQuery,
  useGetMovieDetailQuery,
} from "../redux/api/movieApi";
import { RxCross1 } from "react-icons/rx";
import YouTube from "react-youtube";

const MovieDetail = () => {
  const [trailer, setTrailer] = useState([]);

  const { toggleModal, modal, id } = useContext(ToggleContext);
  const { data } = useGetMovieDetailQuery({ id });
  const { data: recData } = useGetDetailRecommendationsQuery({ id });
  const { data: video } = useGetDetailVideoQuery({ id });
  console.log(id);
  console.log(data);
  console.log(recData?.results);
  console.log(video?.results);

  const lastRoom = video?.results[video?.results?.length - 1]?.key;

  useEffect(() => {
    setTrailer(lastRoom);
  });

  console.log(trailer);

  const opts = {
    height: "455",
    width: "850",
    playerVars: {
      // https:"www.youtube.com/watch?v=74Ie5QZC3Mc" ,
      autoplay: 0,
    },
  };

  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 bg-black bg-opacity-50 overflow-y-scroll transition-all backdrop-blur-sm flex justify-center items-center z-[1005]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[880px] min-h-full rounded-lg bg-white relative top-[230px] p-4 "
      >
        <p>Detail ID : {id}</p>

        <YouTube videoId={trailer} opts={opts} />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          fugiat, eius animi veniam quisquam eos? Tempore ipsum quasi dicta
          recusandae itaque! Obcaecati delectus vel impedit voluptas, aliquam
          ratione reprehenderit soluta quas, enim quaerat, rerum suscipit!
          Voluptatum ea suscipit ex sequi omnis? Quidem aliquam quis aliquid
          repudiandae rerum nisi sapiente quae! Id quia, sunt quas consectetur
          explicabo hic doloribus et tenetur dolorum! Id aperiam rerum
          perspiciatis laborum? Neque quisquam ipsum dolores nemo magnam nobis
          facere, dolore molestias. Voluptatibus doloremque, amet illo
          repudiandae incidunt ipsam architecto quo! Mollitia, molestiae fugit
          quae enim consequatur obcaecati animi exercitationem, ratione libero
          at modi incidunt iusto cupiditate, culpa eius totam veniam debitis?
          Optio ad hic nemo? Doloribus unde asperiores alias sunt laborum
          voluptatum ea ab numquam aut tenetur non itaque reprehenderit natus
          recusandae at assumenda corrupti obcaecati repellat, ipsum dolor.
          Accusamus fuga dolorum commodi id ut velit dolor. Ratione nam quos
          officiis minus dolores quas porro saepe architecto non dicta ipsa
          cumque dolore laboriosam, quam expedita harum aut, libero asperiores
          suscipit. A officiis tempora vitae corrupti corporis omnis iure et
          veritatis neque. Maiores nemo molestiae vitae magni praesentium
          adipisci veritatis recusandae, tempore quod laboriosam facilis
          obcaecati numquam eos ad! Reprehenderit vero recusandae repellat quam
          fugit blanditiis expedita possimus, neque esse laboriosam odio quasi
          dolore ipsa aspernatur nihil eaque asperiores? Illo nostrum et
          perspiciatis quam accusantium! Harum autem officia eaque at nesciunt!
          Corporis harum qui non repellat ducimus nihil quo, nesciunt soluta
          voluptatibus quaerat, doloremque aliquid alias corrupti rem ut sint
          eligendi, nisi repudiandae, eius modi molestiae quo iure cum excepturi
          eum! Quasi laborum omnis tempore eligendi ratione earum ipsa, sapiente
          aspernatur quisquam consequuntur, accusantium, voluptatibus doloribus
          quas molestias architecto fuga unde adipisci. Sunt asperiores
          exercitationem magni mollitia laudantium repellat doloremque fugiat
          distinctio alias similique, suscipit fuga possimus accusantium
          perferendis reiciendis. Suscipit eligendi et, doloremque quisquam
          incidunt animi. Beatae consequatur alias nam quos, fugit possimus
          laborum odio. Asperiores ratione praesentium deleniti minima
          necessitatibus. Quis eos beatae temporibus assumenda nobis. Qui,
          accusantium laborum. Aut itaque quis explicabo unde deserunt impedit,
          eos vitae a hic, exercitationem asperiores maxime neque! Veritatis,
          voluptatibus incidunt ratione repellat culpa sint itaque perferendis,
          dolorum quis, maiores deleniti consequuntur ad libero minus voluptatum
          ut harum dicta veniam? Consequuntur placeat asperiores consectetur
          ipsa similique sed culpa nisi quia magni laboriosam dolorem, rem ea
          assumenda ad ratione blanditiis?
        </p>
        <button
          onClick={toggleModal}
          className="w-10 h-10 rounded-full flex justify-center items-center absolute right-3 top-3 text-center bg-black bg-opacity-50 hover:bg-opacity-70 duration-150"
        >
          <RxCross1 className="text-white font-bold scale-150" />
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;

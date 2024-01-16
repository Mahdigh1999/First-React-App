import { Theme } from "../../App";
import { useContext, useEffect, useState } from "react";
import { getGenres } from "../../services/fakeGenreServises";
import { getImageUrl } from "../../utils/image-utils";
// import Icon from "../common/Icon";
// import Icon from "../common/Icon";
interface Props {
  onGenreSelect: (genre: string) => void;
  currentGenre: string;
}

function Sidebar({ onGenreSelect, currentGenre }: Props) {
  const { isDark } = useContext(Theme);
  const [genres, setGenres] = useState(getGenres());
  useEffect(() => {
    setGenres(getGenres());
  });
  const hoverColor = isDark
    ? " flex items-center text-xs space-x-3 w-full md:px-4 pl-1 py-2 border-b border-gray-500 select-none  " +
      " hover:bg-slate-800 "
    : " flex items-center text-xs space-x-3 w-full md:px-4 pl-1  py-2 border-b border-gray-300 select-none  " +
      " hover:bg-gray-300 ";
  // const img = "../../FakeData/GenreImages/Action.jpg"
  return (
    <ul className="md:basis-1/6 basis-1/8  h-[fit-content]  font-medium font-serif border border-gray-300 rounded-md  overflow-hidden">
      <li
        onClick={() => onGenreSelect("All Genre")}
        className={
          "All Genre" == currentGenre.trim()
            ? " bg-blue-500 justify-center " + hoverColor
            : hoverColor + "justify-center"
        }
      >
        All Genre
      </li>

      {genres.map((genre) => (
        <li
          onClick={() => onGenreSelect(genre.genreName)}
          key={genre.genreId}
          className={
            genre.genreName.trim() == currentGenre.trim()
              ? " bg-blue-500 " + hoverColor
              : hoverColor
          }
        >
          <img
            src={getImageUrl(genre.genreIconImage)}
            alt=""
            className="h-6 w-6 rounded-md md:mr-5 mr-1 "
          />
          {genre.genreName}
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;

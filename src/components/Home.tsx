import GameCard from "./common/GameCard";
import { getAllGames } from "../services/fakeGameServices";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar/Sidebar";
import Pagination from "./Pagination";
import { useSearch , usePage } from "../App";
import { paginate } from "../utils/paginate";
import DropDown from "./common/DropDown";
type Game = {
  id: string;
  name: string;
  company: string;
  type: string;
  platforms: string[];
  stock: number;
  genres: string[];
  image: string;
  price: number;
  like: boolean;
};
type Games = Game[];
const filteredData = (
  allGames: Games,
  searchValue: string,
  currentGenre: string,
  platform: string,
  sortMethod: string
) => {
  const searchResult = allGames.filter(
    (game) =>
      game.name
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase().trim()) ||
      game.company
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase().trim())
  );
  const filteredByGenre =
    currentGenre === "All Genre"
      ? searchResult
      : searchResult.filter((game) =>
          game.genres.includes(currentGenre.trim())
        );
  const filteredByPlatform =
    platform === "All"
      ? filteredByGenre
      : filteredByGenre.filter((game) =>
          game.platforms.includes(platform.trim())
        );
  const sortResult = filteredByPlatform.sort((game1, game2) => {
    const orderBy = sortMethod.toLocaleLowerCase().trim().toString();
    const condition =
      (orderBy === "name" ||
        orderBy === "price" ||
        orderBy === "stock") 
    if (condition) {
      if (game1[orderBy] > game2[orderBy]) return 1;
      if (game1[orderBy] < game2[orderBy]) return -1;
      else return 0;
    }
    else return 0;
  });
  return sortResult;
};

function Home() {
  const [allGames, setAllGames] = useState<Games>(getAllGames());
  const pageSize = 12;
  const {currentPage, handlePage} = usePage();
  const [currentGenre, setCurrentGenre] = useState<string>("All Genre");
  const { seacrhValue } = useSearch();
  const [sortMethod, setSortMethod] = useState("none");
  const [platform, setPlatform] = useState("All");
  useEffect(()=>{

    return () =>  handlePage(1);
  },[])
  const handleLike = (id: string) => {
    const games = [...allGames];
    const gameIndex = games.findIndex((game) => game.id === id);
    games[gameIndex].like = !games[gameIndex].like;
    // console.log("liked" ,id);
    setAllGames(games);
  };

  const handleNextPage = () => {
    let c = currentPage;
    c++;
    handlePage(c);
  };
  const handlePreviousPage = () => {
    let c = currentPage;
    c--;
    handlePage(c);
  };
  const handleSelectGenre = (genreName: string) => {
    setCurrentGenre(genreName);
  };
  const handleSort = (orderBy: string) => {
    setSortMethod(orderBy);
  };
  const handlePlatform = (platformBy: string) => {
    setPlatform(platformBy);
  };

  const final = filteredData(
    allGames,
    seacrhValue,
    currentGenre,
    platform,
    sortMethod
  );
  const renderItems = paginate(final, currentPage, pageSize);
  return (
    <>
      <div className="flex space-x-3 w-[65%] mx-auto">
        <DropDown
          onSelect={handleSort}
          label="Order By"
          lst={["None", "Name", "Price", "Stock"]}
        />
        <DropDown
          onSelect={handlePlatform}
          label="Platforms"
          lst={[
            "All",
            "Windows",
            "MacOs",
            "Android",
            "Linux",
            "Ps",
            "Xbox",
            "Ios",
          ]}
        />
      </div>

      <div className="flex my-2">
        <Sidebar
          currentGenre={currentGenre}
          onGenreSelect={handleSelectGenre}
        />
        <div className="relative mb-40 basis-5/6  grid min-[1400px]:grid-cols-4 min-[1000px]:grid-cols-3  min-[480px]:grid-cols-2 gap-2 ml-2 ">
          {renderItems.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              company={game.company}
              price={game.price}
              imageUrl={game.image}
              like={game.like}
              platforms={game.platforms}
              stock={game.stock}
              name={game.name}
              onLike={handleLike}
            />
          ))}
          <Pagination
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
            count={final.length}
            currentPage={currentPage}
            onPage={handlePage}
            pageSize={pageSize}
          />
        </div>{" "}
      </div>
    </>
  );
}

export default Home;

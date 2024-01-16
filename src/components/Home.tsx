import GameCard from "./common/GameCard";
import { getAllGames } from "../services/fakeGameServices";
import { useState } from "react";
import Sidebar from "./SideBar/Sidebar";
import Pagination from "../Pagination";
import { paginate } from "../utils/paginate";
function Home() {
  const [allGames, setAllGames] = useState(getAllGames());
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentGenre, setCurrentGenre] = useState<string>("All Genre");
  const handlePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
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
    setCurrentPage(c);
  };
  const handlePreviousPage = () => {
    let c = currentPage;
    c--;
    setCurrentPage(c);
  };
  const handleSelectGenre = (genreName: string) => {
    setCurrentGenre(genreName);
  };
  const filteredByGenre =
    currentGenre === "All Genre"
      ? allGames
      : allGames.filter((game) => game.genres.includes(currentGenre.trim()));

  const renderItems = paginate(filteredByGenre, currentPage, pageSize);
  return (
    <>
      <Sidebar currentGenre={currentGenre} onGenreSelect={handleSelectGenre} />
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
          count={filteredByGenre.length}
          currentPage={currentPage}
          onPage={handlePage}
          pageSize={pageSize}
        />
      </div>{" "}
    </>
  );
}

export default Home;

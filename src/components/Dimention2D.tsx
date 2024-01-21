import { useEffect, useState } from "react";
import { get2DGames } from "../services/fakeGameServices";
import GameCard from "./common/GameCard";
import { useSearch } from "../App";
const Dimention2D = () => {
  const [_2DGames, set_2DGamges] = useState(get2DGames());
    useEffect(() => {
        set_2DGamges(get2DGames());
    },[]);
    const {seacrhValue} = useSearch();
    const searchResult = _2DGames.filter(
        (game) =>
          game.name
            .toLocaleLowerCase()
            .includes(seacrhValue.toLocaleLowerCase().trim()) ||
          game.company
            .toLocaleLowerCase()
            .includes(seacrhValue.toLocaleLowerCase().trim())
      );
      const handleLike = (id: string) => {
        const games = [..._2DGames];
        const gameIndex = games.findIndex((game) => game.id === id);
        games[gameIndex].like = !games[gameIndex].like;
        // console.log("liked" ,id);
        set_2DGamges(games);
      };
  return (
    <div className="flex flex-wrap justify-center m-8  mt-3 gap-4">
      {searchResult.map((game) => (
        <GameCard
          key={game.id}
          company={game.company}
          id={game.id}
          imageUrl={game.image}
          like={game.like}
          name={game.name}
          platforms={game.platforms}
          price={game.price}
          stock={game.stock}
          onLike={handleLike}
        />
      ))}
      <div></div>
    </div>
  );
};

export default Dimention2D;

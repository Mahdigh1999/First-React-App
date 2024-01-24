import { useState, useEffect } from "react";
import { get3DGames } from "../services/fakeGameServices";
import GameCard from "./common/GameCard";
import { useSearch } from "../App";
type Props = {
  open:() => void
}

const Dimention3D = ({open}:Props) => {
  open();
  const [_3DGames, set_3DGamges] = useState(get3DGames());
  const { seacrhValue } = useSearch();
  useEffect(() => {
    set_3DGamges(get3DGames());
  }, []);
  const handleLike = (id: string) => {
    const games = [..._3DGames];
    const gameIndex = games.findIndex((game) => game.id === id);
    games[gameIndex].like = !games[gameIndex].like;
    // console.log("liked" ,id);
    set_3DGamges(games);
  };

  const renderSearchTo3DGames = _3DGames.filter((game) =>
    game.name
      .toLocaleLowerCase()
      .trim()
      .includes(seacrhValue.toLocaleLowerCase().trim())
  );
  return (
    <div className="flex flex-wrap justify-center m-8   mt-3 gap-4 mx-auto">
      {renderSearchTo3DGames.map((game) => (
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

export default Dimention3D;

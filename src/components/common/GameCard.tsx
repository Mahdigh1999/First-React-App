import { getImageUrl } from "../../utils/image-utils";
import { ImWindows8 } from "react-icons/im";
import { GrApple } from "react-icons/gr";
import { FcLinux } from "react-icons/fc";
import { FaPlaystation } from "react-icons/fa";
import { BsXbox } from "react-icons/bs";
import { AiFillAndroid } from "react-icons/ai";
import { Theme } from "../../App";
import { useContext } from "react";
import Like from "./Like";
import { Fragment } from "react";


type Props = {
  imageUrl: string;
  platforms: string[];
  stock: number;
  name: string;
  price: number;
  like: boolean;
  company: string;
  onLike:(id:string) => void;
  id:string;
};
const getPlatformIcons = (list: string[]) => {
  const listOfPlatforIcons = [];
  for (let i of list) {
    switch (i.trim().toLocaleLowerCase()) {
      case "windows":
        listOfPlatforIcons.push(<ImWindows8 />);
        break;
      case "macos":
        listOfPlatforIcons.push(<GrApple />);
        break;
      case "ios":
        listOfPlatforIcons.push(<GrApple />);
        break;
      case "android":
        listOfPlatforIcons.push(<AiFillAndroid />);
        break;
      case "linux":
        listOfPlatforIcons.push(<FcLinux />);
        break;
      case "xbox":
        listOfPlatforIcons.push(<BsXbox />);
        break;
      case "ps":
        listOfPlatforIcons.push(<FaPlaystation />);
        break;
    }
  }
  return listOfPlatforIcons;
};

function GameCard({
    id,
    onLike,
  imageUrl,
  platforms,
  stock,
  name,
  like,
  price,
  company,
}: Props) {
  const listOfPlatforIcons = getPlatformIcons(platforms);
  const { isDark } = useContext(Theme);
  return (
    <div
      className={
        (isDark ? "gameCardShadow " : "shadow-lg ") +
        " min-[720px]:h-[350px] min-[720px]:w-[280px] min-[480px]:h-[fit-content] min-[480px]:w-[180px]  h-[330px] w-[250px]   overflow-hidden rounded-md"
      }
    >
      <div className="h-[50%] w-full border-b border-gray-500  overflow-hidden ">
        <img
          src={getImageUrl(imageUrl)}
          alt="Sorry"
          className="h-full w-full"
        />
      </div>
      <div className="p-2">
        <div>
          <div className="float-left flex items-center p-1 space-x-4 w-[fit-content] ">
            {listOfPlatforIcons.map((icon) => (
              <Fragment key={listOfPlatforIcons.indexOf(icon)}>{icon}</Fragment>
            ))}
          </div>
          <span
            className={
              (isDark ? " bg-gray-800 " : " bg-gray-300 ") +
              " float-right border border-gray-500 px-2 rounded-md py-1 text-xs select-none"
            }
          >
            {stock}
          </span>
        </div>
        <div className="clear-both nameOfGames  flex items-center pt-1 ">{name}</div>
        <div className="  mb-1"> {price ? price + " $ " : "Free"} </div>
        <div className="  mb-1"> {company} </div>

        <Like id={id} onLike={onLike} like={like} />
      </div>
    </div>
  );
}

export default GameCard;

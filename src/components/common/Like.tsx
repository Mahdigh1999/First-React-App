import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
interface Props{
    id:string;
    like:boolean;
    onLike:(id:string) => void;
}
function Like({like , onLike ,id}:Props) {
  return <div onClick={() => onLike(id)}>{like ? <GoHeart /> : <GoHeartFill />}</div>;
}

export default Like;

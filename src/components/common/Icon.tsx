
interface Props {
    imageUrl:string;
}


function Icon({imageUrl}:Props) {
    return (
        <div>
            <img src={imageUrl} alt="" />
        </div>
    );
}

export default Icon;
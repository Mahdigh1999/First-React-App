type GamesObj ={
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
}[]
export function paginate(list:GamesObj,currentPage:number , pageSize:number){
    const startIndex = (currentPage - 1) *pageSize;
    const finalIndex = (currentPage - 1)*pageSize + pageSize;
    const lst = list.slice(startIndex , finalIndex);
    return lst;
}
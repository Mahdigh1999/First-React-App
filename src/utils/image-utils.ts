export function getImageUrl(vanilaUrl:string){
    return new URL(vanilaUrl,import.meta.url).href;
}

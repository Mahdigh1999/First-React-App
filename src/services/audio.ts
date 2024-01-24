import AngryBirdsAudio from "../FakeData/GameMusic/AngryBirds/AngryBirds.mp3"
import AngryBirdsImage from "../FakeData/MainImages/AngryBirds.jpg"
import generals1Audio from "../FakeData/GameMusic/Generals/01 - Chopper's Coming.mp3"
import generals1Image from "../FakeData/MainImages/GeneralCapture1.jpg"
import generals2Image from "../FakeData/MainImages/GeneralCapture2.jpg"
import generals2Audio from "../FakeData/GameMusic/Generals/02 - The Admiral.mp3"
import Dota2 from "../FakeData/GameMusic/Dota2/1. DOTA2.mp3"
import FirstBlood from "../FakeData/GameMusic/Dota2/18. First Blood.mp3"
import Dota2Image from "../FakeData/MainImages/Dota2.jpg"
import stranghold1 from "../FakeData/GameMusic/StrangHold/05 - Honor Medley.mp3"
import stranghold2 from "../FakeData/GameMusic/StrangHold/10 - Stix & Stones Medley.mp3"
import stranghold1Image from "../FakeData/MainImages/StrangholdLegends.jpg"
import stranghold2Image from "../FakeData/MainImages/StrangholdCrusader.jpg"
import gtaSanAudio from "../FakeData/GameMusic/GtaSan/2004 - Grand Theft Auto - San Andreas - Main Theme.mp3"
import gtaSanImage from "../FakeData/MainImages/GtaSan.jpg"
import gtaVAudio from "../FakeData/GameMusic/GtaV/2013 - Grand Theft Auto V - Main Theme.mp3"
import gtaVImage from "../FakeData/MainImages/GtaV.jpg"
import Pacman1Audio from "../FakeData/GameMusic/Pacman/08. Pacman Classic Victory.mp3"
import Pacman2Audio from "../FakeData/GameMusic/Pacman/09. Pacmania Level.mp3"
import PacmanImage from "../FakeData/MainImages/PacMan.jpg"
const Musics = [
    {name:'AngryBirds1' , content:AngryBirdsAudio , image:AngryBirdsImage},
    {name:"Chopper's Coming" , content:generals1Audio , image:generals1Image},
    {name:"The Admiral" , content:generals2Audio , image:generals2Image},
    {name:"DOTA2" , content:Dota2 , image:Dota2Image},
    {name:"FirstBlood" , content:FirstBlood , image:Dota2Image},
    {name:"Honor Medley" , content:stranghold1 , image:stranghold1Image},
    {name:"Stix & Stones Medley" , content:stranghold2 , image:stranghold2Image},
    {name:"Grand Theft Auto - San Andreas - Main Theme" , content:gtaSanAudio , image:gtaSanImage},
    {name:"Gta V" , content:gtaVAudio , image:gtaVImage},
    {name:"Pacman Classic Victory" , content:Pacman1Audio , image:PacmanImage},
    {name:"Pacmania Level" , content:Pacman2Audio , image:PacmanImage},

]




export function getMusics() {
    return Musics;
}
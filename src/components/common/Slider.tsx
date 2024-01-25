import {  useState } from "react";
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { useTheme } from "../../App";
const Slider = () => {
  const { isDark } = useTheme();
  const Slides = [
    {
      name: "Gta V",
      image:
        "https://www.trustedreviews.com/wp-content/uploads/sites/54/2013/07/GTA-5-Lamar-2.jpg",
    },
    {
      name: "Stranghold",
      image:
        "https://images.cgames.de/images/gsgp/287/stronghold-historie-teaser_2246877.jpg",
    },
    {
      name: "Call Of duty mw3",
      image:
        "https://cutewallpaper.org/22/call-of-duty-modern-warfare-hd-wallpapers/2215425697.jpg",
    },
    {
      name: "Pubg",
      image:
        "https://prcdn.freetls.fastly.net/release_image/82433/48/82433-48-e8d49b7ec3ca7358c3704de29040c668-1920x1080.jpg?format=jpeg&auto=webp&quality=85%2C65&width=1950&height=1350&fit=bounds",
    },
    {
      name: "Asterix and Obelix",
      image:
        "https://www.gamewallpapers.com/wallpapers_members_png_source/wallpaper_asterix_and_obelix_xxl3_the_crystal_menhir_01_2560x1440.png&wallpaper_id=6968",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const isActiveColor = isDark ? " bg-gray-50 " : " bg-gray-950 ";


  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(Slides.length - 1);
    } else {
      setCurrentSlide((currentSlide) => --currentSlide);
    }
  };
  const nextSlide = () => {
    if (currentSlide >= Slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((currentSlide) => ++currentSlide);
    }
  };
  const playSlider = () => {
    console.log("playSlider")

  }
  const pauseSlider = () => {
    console.log("pauseSlider")
  }
  console.log(currentSlide)
  return (
    <div onMouseEnter={pauseSlider} onMouseOut={playSlider} className="w-[60%] mx-auto">
      <div className="overflow-hidden w-[100%] relative mx-auto h-[500px] rounded-xl">
        <div
          className={"flex  transition ease-out duration-500  h-full"}
          style={{
            transform:
              "translateX(" + -(currentSlide * (100 / Slides.length)) + "%)",
            width: 100 * Slides.length + "%",
          }}
        >
          {Slides.map((slide) => (
            <div
              key={slide.name}
              className={" h-full "}
              style={{ width: 100 / Slides.length + 10 + "%" }}
            >
              <img
                src={slide.image}
                className="h-full w-full"
                alt={Slides.indexOf(slide).toString()}
              />
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute top-[45%] left-[0] ">
          <FaHandPointLeft
            className={
              (isDark ? "border-gray-100" : "border-gray-950") +
              " border  rounded-full p-2 h-12 w-12"
            }
            style={{
                fill:"black",
                backgroundColor:"rgba(255,255,255,0.4)"
            }}
          />
        </button>
        <button onClick={nextSlide} className="absolute top-[45%] right-[0] ">
          <FaHandPointRight
            className={
              (isDark ? "border-gray-100" : "border-gray-950") +
              " border  rounded-full p-2 h-12 w-12"
            }
            style={{
                fill:"black",
                backgroundColor:"rgba(255,255,255,0.4)"
            }}
          />
        </button>
      </div>
      <div className=" w-[fit-content] mx-auto flex justify-around my-1">
        {Slides.map((slide) => (
          <div
            onClick={() => {setCurrentSlide(Slides.indexOf(slide))}}
            key={slide.image}
            className={
              (currentSlide === Slides.indexOf(slide)
                ? isActiveColor
                : " bg-gray-500 ") +
              "cursor-pointer mx-1 w-4 h-4 rounded-full opacity-50"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import myImage from "../../public/biscuits.jpg";


export default function FeatureCategoriesSection() {
  const categories = [
    {
      image: myImage,
      name: "Biscuits",
    },

    {
      image: myImage,
      name: "Biscuits 2",
    },
    {
      image: myImage,
      name: "Biscuits 3",
    },
    {
      image: myImage,
      name: "Biscuits 4",
    },
    {
      image: myImage,
      name: "Biscuits 5",
    },
    {
      image: myImage,
      name: "Biscuits 6",
    },
    {
      image: myImage,
      name: "Biscuits 7",
    },
    {
      image: myImage,
      name: "Biscuits 8",
    },
  ];

  return (
    <div className="w-8/12 mx-auto space-y-8 mt-24">
      <p className=" text-3xl font-semibold ">Featured Categories</p>

      <div>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          {categories.map((eachItem, index) => (
            <SwiperSlide key={index}>
              <div className=" space-y-2 overflow-hidden border border-gray-300 rounded-2xl flex flex-col items-center justify-center  hover:border-green-500 hover:shadow-2xl duration-500 ">
                <img
                  src={eachItem.image}
                  alt=""
                  height={150}
                  width={150}
                />
                <p className="font-semibold">{eachItem.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
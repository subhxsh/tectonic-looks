import { useState } from "react";
import { Keyboard, Mousewheel } from "swiper/modules";
import type { SwiperClass } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Look } from "../mock-data/types";
import { LookViewer } from "./look-viewer";

interface LookbookProps {
  looks: Look[];
}

export function Lookbook({ looks }: LookbookProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (s: SwiperClass) => {
    setActiveIndex(s.activeIndex);
  };

  return (
    <div className="h-screen w-screen bg-black">
      <Swiper
        direction="vertical"
        mousewheel={true}
        keyboard={{ enabled: true }}
        modules={[Mousewheel, Keyboard]}
        onSlideChange={handleSlideChange}
        className="h-full w-full"
        speed={300}
      >
        {looks.map((look, index) => (
          <SwiperSlide key={look.id}>
            <LookViewer look={look} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

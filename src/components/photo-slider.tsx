import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

const photos = [
  { src: "/images/images.jpeg", caption: "Our first date" },
  { src: "/images/images.jpeg", caption: "Vacation together" },
  { src: "/images/images.jpeg", caption: "Cherished moments" },
];

export default function PhotoSlider() {
  return (
    <Carousel className="rounded-lg overflow-hidden shadow-lg h-full">
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index} className="relative h-64">
            <div className="relative w-full h-full">
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-2 text-center">
              {photo.caption}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
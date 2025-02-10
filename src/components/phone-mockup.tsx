"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

type MediaItem = {
  type: "image" | "video" | "gif";
  src: string;
  objectFit: "cover" | "contain";
};

const DEFAULT_MEDIA: MediaItem[] = [
  { type: "image", src: "/images/default-2.webp", objectFit: "cover" },
  { type: "image", src: "/images/default-1.webp", objectFit: "cover" },
  { type: "image", src: "/images/default-3.webp", objectFit: "cover" },
  { type: "video", src: "/videos/default-1.mp4", objectFit: "cover" },
];

export default function PhoneMockup() {
  const [media, setMedia] = useState<MediaItem[]>(DEFAULT_MEDIA);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 5) {
      alert("You can only upload up to 5 media files.");
      return;
    }

    const newMedia = acceptedFiles
      .map((file) => {
        const fileURL = URL.createObjectURL(file);
        let fileType: "image" | "video" | "gif";

        if (file.type.startsWith("image")) {
          fileType = file.type === "image/gif" ? "gif" : "image";
        } else if (file.type.startsWith("video")) {
          fileType = "video";
        } else {
          return null;
        }

        return { type: fileType, src: fileURL, objectFit: "cover" };
      })
      .filter((item): item is MediaItem => item !== null);

    setMedia(newMedia.length > 0 ? newMedia : DEFAULT_MEDIA);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [], "video/*": [], "image/gif": [] },
    multiple: true,
  });

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative w-[320px] h-[640px] bg-black rounded-[3rem] shadow-2xl border-[6px] border-gray-300 overflow-hidden">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full shadow-md border border-gray-800 z-10"></div>

        <div className="relative w-full h-full">
          <Carousel
            responsive={responsive}
            infinite
            showDots={media.length > 1}
            arrows={media.length > 1}
            containerClass="carousel-container"
            itemClass="carousel-item"
          >
            {media.map((item, index) => (
              <div key={index} className="relative w-full h-[640px]">
                {item.type === "image" || item.type === "gif" ? (
                  <Image
                    src={item.src}
                    alt={`Uploaded ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    style={{ objectFit: item.objectFit }}
                    className="rounded-[2rem]"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="rounded-[2rem] w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <label className="text-gray-700 text-sm font-medium">
          Upload Your Photos, Videos, and GIFs (Max 5)
        </label>
        <div
          {...getRootProps()}
          className="bg-gray-100 text-gray-700 font-semibold py-2 px-6 rounded-lg shadow-md border border-gray-300 hover:bg-gray-200 transition-all duration-200 cursor-pointer"
        >
          <input {...getInputProps()} />
          📸 Choose Media
        </div>
      </div>
    </div>
  );
}

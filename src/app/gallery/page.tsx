"use client";

import { useState, useEffect, useCallback } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";

interface ImageData {
  id: number;
  url: string;
  title: string;
  width?: number;
  height?: number;
}

const Gallery = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const fetchImages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/images.json", {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ImageData[] = await response.json();

      if (
        !Array.isArray(data) ||
        !data.every((img) => img.id && img.url && img.title)
      ) {
        throw new Error("Invalid image data format");
      }

      // Sort images by height if available, or randomly shuffle to balance
      const sortedImages = data.sort(
        (a, b) =>
          (b.height || Math.random() * 1000) -
          (a.height || Math.random() * 1000)
      );
      setImages(sortedImages);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Failed to fetch images:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const breakpointColumns = {
    default: 5,
    1280: 4,
    1024: 3,
    768: 2,
    480: 1,
  };

  const handleImageClick = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (isLoading) {
    return (
      <div className="p-4 flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-600 text-center">
        <p>Error loading gallery: {error}</p>
        <button
          onClick={fetchImages}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 py-8 bg-gray-800 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        Our Gallery
      </h1>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-2 sm:gap-4 -mx-2 sm:-mx-4 masonry-grid"
        columnClassName="masonry-column px-2 sm:px-4"
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="mb-2 sm:mb-4 break-inside-avoid"
            onClick={() => handleImageClick(image)}
          >
            <div className="group relative rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer">
              <Image
                src={image.url}
                alt={image.title}
                width={300}
                height={0}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI+wN4o3/pAAAAAElFTkSuQmCC"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium drop-shadow-md">
                  {image.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Masonry>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              width={1200}
              height={0}
              sizes="100vw"
              quality={90}
              className="w-full h-auto object-contain max-h-[90vh]"
            />
            <p className="text-white text-lg font-medium mt-2 text-center drop-shadow-md">
              {selectedImage.title}
            </p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Inline CSS for better column balancing */}
      <style jsx>{`
        .masonry-grid {
          display: flex;
          width: auto;
        }
        .masonry-column {
          display: flex;
          flex-direction: column;
          gap: inherit;
        }
        @media (min-width: 480px) {
          .masonry-column {
            gap: 1rem; /* sm:gap-4 equivalent */
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;

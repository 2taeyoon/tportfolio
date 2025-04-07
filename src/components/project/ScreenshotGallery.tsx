import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import ImageModal from "@/components/modal/ImageModal";
import { ScreenshotGalleryProps } from "@/types/projectProps";

export default function ScreenshotGallery({ project, title, images, modalProps, onImageClick }: ScreenshotGalleryProps) {
  return (
    <div className="screenshot_container">
      <div className="screenshot_title" style={{ color: project?.fontColor }}>{title}</div>
      <Swiper
        loop={false}
        slidesPerView={3.5}
        spaceBetween={10}
        freeMode={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="screenshot_image" onClick={() => onImageClick(index)}>
              <Image 
                src={image.src} 
                alt={image.alt} 
                draggable={false} 
                fill
                sizes="100%"
                style={{ objectFit: 'cover' }}
                onDragStart={(e) => e.preventDefault()}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ImageModal
        isOpen={modalProps.isModalOpen}
        onClose={modalProps.handleCloseModal}
        screenshots={images.map(img => img.src)}
        currentImageIndex={modalProps.currentImageIndex}
        onPrev={modalProps.handlePrevImage}
        onNext={modalProps.handleNextImage}
      />
    </div>
  );
}
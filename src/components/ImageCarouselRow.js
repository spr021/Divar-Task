import React from "react"

const ImageCarouselRow = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center">
      {items.map((item) => (
        <img
          key={item.image_url}
          className="p-6"
          src={item.image_url}
          alt="car"
        />
      ))}
    </div>
  )
}

export default ImageCarouselRow

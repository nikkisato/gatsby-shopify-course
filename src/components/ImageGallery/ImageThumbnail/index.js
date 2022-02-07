import React from 'react';
import Image from 'gatsby-image';
import { ImageThumbnailWrapper } from './styles';

export default function ImageThumbnail({ isActive, onClick, image }) {
  const handleClick = () => {
    onClick(image);
  };
  return (
    <ImageThumbnailWrapper isActive={isActive} onClick={handleClick}>
      <Image fluid={image.localFile.childImageSharp.fluid} />
    </ImageThumbnailWrapper>
  );
}

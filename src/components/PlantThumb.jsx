import { useState } from 'react';
import PlantIcon from './PlantIcon';

function PlantThumb({ image, alt, color, size = 64 }) {
  const [failed, setFailed] = useState(false);

  if (!image || failed) {
    return <PlantIcon color={color} size={size} />;
  }

  return (
    <img
      src={image}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{
        width: size,
        height: size,
        objectFit: 'cover',
        borderRadius: '8px',
      }}
    />
  );
}

export default PlantThumb;

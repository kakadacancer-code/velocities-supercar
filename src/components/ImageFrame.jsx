import { useState } from 'react'
import { commons, editorialImage } from '../data/media'

export default function ImageFrame({ file, alt, className = '', imageClassName = '', eager = false, documentary = false, width = 1600, children, position = 'center' }) {
  const src = documentary ? commons(file, width) : editorialImage(file, width)
  const [failedSource, setFailedSource] = useState(null)
  return <div className={`image-frame ${className}`}>
    <img src={failedSource === src ? '/car-outline.svg' : src}
      alt={failedSource === src ? 'Photograph unavailable' : alt} className={`image-frame__image ${imageClassName}`}
      loading={eager ? 'eager' : 'lazy'} decoding="async" fetchPriority={eager ? 'high' : 'auto'}
      style={{ objectPosition: position }} onError={() => setFailedSource(src)}
    />
    {children}
  </div>
}

import Image from 'next/image'
import React from 'react'

interface Props {
  src: string;
  alt: string;
}

export default function BookImage({src, alt}: Props) {
  return (
    <div className="rounded-md overflow-hidden bg-gray-300 transition-all shadow-sm hover:shadow-2xl">
      <Image 
        src={src}
        alt={alt}
        layout="responsive"
        width={400}
        height={600}
      />
    </div>
  )
}

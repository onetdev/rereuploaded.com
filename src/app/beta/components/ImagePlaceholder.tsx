'use client';

import { useMemo } from "react";

type ImagePlaceholderProps = {
  blobCount: number;
}

export default function ImagePlaceholder({ blobCount }: ImagePlaceholderProps) {
  const blobMeta = useMemo(() => {
    const blobs = [];
    for (let i = 0; i < blobCount; i++) {
      blobs.push({
        id: i,
        size: Math.random() * 100 + 10,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      });
    }
    return blobs;
  }, [blobCount]);

  return (
    <div className="w-full h-full blur-3xl">
      {blobMeta.map((blob, i) => (
        <div
          suppressHydrationWarning
          key={blob.id}
          className="animate-full-rotate absolute rounded-b-full overflow-clip"
          style={{
            width: `${blob.size}%`,
            height: `${blob.size}%`,
            left: `${-50 + blob.x}%`,
            top: `${-50 + blob.y}%`,
            transitionDelay: `${i * 150}ms`,
          }}>
          <div
            suppressHydrationWarning
            className="animate-hue-quarter-rotate w-full h-full"
            style={{
              backgroundColor: blob.color,
              transitionDelay: `${i * 150}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

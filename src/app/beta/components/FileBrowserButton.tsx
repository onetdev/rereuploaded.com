'use client';

import { PaperClipIcon } from '@heroicons/react/24/solid';
import { Button } from '@heroui/react';
import { useState } from 'react';

interface FileBrowserButtonProps {
  onFileChanged?: (file?: File) => void;
  label: string;
  accept?: string;
}

export default function FileBowserButton({ onFileChanged, label, accept = "image/*" }: FileBrowserButtonProps) {
  // We nned to proxy states because of the custom visuals of the file input :(
  const [isHover, setIsHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="relative cursor-pointer">
      <Button color="primary" variant='shadow' data-hover={isHover} data-pressed={isPressed}>
        <PaperClipIcon className="h-5 w-5" aria-hidden="true" />
        {label}
      </Button>
      <input
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}
        id="file-upload"
        name="file-upload"
        type="file"
        accept={accept}
        className="absolute inset-0 w-full h-full opacity-100 cursor-pointer text-[0px]"
        onChange={(e) => {
          const file = e.target.files?.[0];
          onFileChanged?.(file);
        }}
      />
    </div>
  )
}

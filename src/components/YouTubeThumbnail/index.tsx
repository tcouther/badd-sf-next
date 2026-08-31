"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

type YouTubeThumbnailProps = {
  videoId: string;
  title: string;
  thumbnailSrc: string;
  buttonPositionBottom: boolean;
};

export default function YouTubeThumbnail({ videoId, title, thumbnailSrc, buttonPositionBottom }: YouTubeThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${videoId}?si=gFTLFDB19vvy1V5-&start=1&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={styles.thumbnailButton}
      onClick={() => setIsPlaying(true)}
      aria-label={`Play ${title}`}
    >
      <Image
        src={thumbnailSrc}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 66vw"
        className={styles.thumbnailImage}
        priority
      />
      <span className={styles.thumbnailOverlay} aria-hidden="true" />
      <span
        className={`${styles.playButton}${buttonPositionBottom ? ` ${styles["playButton-bottom-right"]}` : ""}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
          <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.29-6.86a1 1 0 0 0 0-1.66L9.53 4.29A1 1 0 0 0 8 5.14Z" />
        </svg>
      </span>
    </button>
  );
}

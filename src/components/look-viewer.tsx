import { useState } from "react";
import type { Look } from "../mock-data/types";
import { ImagePreview } from "./image-preview";
import { ProgressSegments } from "./progress-segments";
import { VideoPreview } from "./video-preview";

interface LookViewerProps {
  look: Look;
  isActive: boolean;
}

export function LookViewer({ look, isActive }: LookViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleComplete = () => {
    if (currentIndex < look.previews.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    }
  };

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const containerWidth = e.currentTarget.offsetWidth;
    const clickX = e.clientX;
    const clickPosition = clickX / containerWidth;

    if (clickPosition < 0.4 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    } else if (clickPosition > 0.6 && currentIndex < look.previews.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    }
  };

  const currentPreview = look.previews[currentIndex];

  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <div
      className="h-full w-full bg-black flex flex-col overflow-hidden relative"
      onClick={handleTap}
    >
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <ProgressSegments
          total={look.previews.length}
          current={currentIndex}
          progress={progress}
          isPaused={!isActive}
        />
      </div>

      <div className="absolute top-12 left-0 right-0 z-20 px-4 pointer-events-none">
        <div className="flex items-center gap-3">
          {look.creator.avatar && (
            <img
              src={look.creator.avatar}
              alt={look.creator.name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          )}
          <div className="flex-1">
            <p className="text-white font-semibold text-sm drop-shadow-lg">
              {look.creator.name}
            </p>
            <p className="text-white/80 text-xs drop-shadow-lg">
              {timeAgo(look.createdAt)}
            </p>
          </div>
        </div>
      </div>

      {currentPreview.type === "image" ? (
        <ImagePreview
          key={currentPreview.url}
          imageUrl={currentPreview.url}
          duration={5000}
          onProgress={setProgress}
          onComplete={handleComplete}
          isPaused={!isActive}
          annotations={currentPreview.annotations}
        />
      ) : (
        <VideoPreview
          key={currentPreview.url}
          videoUrl={currentPreview.url}
          onProgress={setProgress}
          onComplete={handleComplete}
          isPaused={!isActive}
        />
      )}
    </div>
  );
}

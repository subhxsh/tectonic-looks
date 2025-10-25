import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface VideoPreviewProps {
  videoUrl: string;
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
  isPaused?: boolean;
}

export function VideoPreview({
  videoUrl,
  onProgress,
  onComplete,
  isPaused = false,
}: VideoPreviewProps) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onProgressRef = useRef(onProgress);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onProgressRef.current = onProgress;
    onCompleteRef.current = onComplete;
  }, [onProgress, onComplete]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPaused) video.pause();
    else video.play();
  }, [isPaused]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    if (!isPaused) video.play();
  }, [videoUrl, isPaused]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const progress = (video.currentTime / video.duration) * 100;
    onProgressRef.current?.(progress);
  };

  const handleEnded = () => {
    onCompleteRef.current?.();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  return (
    <div className="w-full h-full relative bg-black">
      <video
        ref={videoRef}
        src={videoUrl}
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="w-full h-full object-cover pointer-events-none"
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-20 right-4 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors z-10 pointer-events-auto"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}

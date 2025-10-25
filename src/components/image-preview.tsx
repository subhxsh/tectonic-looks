import { useEffect, useRef } from "react";
import type { Annotation } from "../mock-data/types";
import { AnnotationOverlay } from "./annotation-overlay";

interface ImagePreviewProps {
  imageUrl: string;
  duration?: number;
  onProgress?: (progress: number) => void;
  onComplete?: () => void;
  isPaused?: boolean;
  annotations?: Annotation[];
}

export function ImagePreview({
  imageUrl,
  duration = 5000,
  onProgress,
  onComplete,
  isPaused = false,
  annotations = [],
}: ImagePreviewProps) {
  const startTimeRef = useRef<number>(Date.now());
  const elapsedRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);
  const onProgressRef = useRef(onProgress);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onProgressRef.current = onProgress;
    onCompleteRef.current = onComplete;
  }, [onProgress, onComplete]);

  useEffect(() => {
    elapsedRef.current = 0;
    startTimeRef.current = Date.now();
  }, [imageUrl]);

  useEffect(() => {
    if (isPaused) {
      elapsedRef.current += Date.now() - startTimeRef.current;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    startTimeRef.current = Date.now();

    const updateProgress = () => {
      const elapsed = elapsedRef.current + (Date.now() - startTimeRef.current);
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      onProgressRef.current?.(newProgress);
      if (newProgress >= 100) onCompleteRef.current?.();
      else animationFrameRef.current = requestAnimationFrame(updateProgress);
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPaused, duration, imageUrl]);

  return (
    <div className="w-full h-full relative">
      <img
        src={imageUrl}
        alt="Preview"
        className="w-full h-full object-cover"
      />
      {annotations.length > 0 && (
        <AnnotationOverlay annotations={annotations} />
      )}
    </div>
  );
}

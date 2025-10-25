import * as ProgressPrimitive from "@radix-ui/react-progress";

interface ProgressSegmentsProps {
  total: number;
  current: number;
  progress: number;
  isPaused?: boolean;
}

export function ProgressSegments({
  total,
  current,
  progress,
}: ProgressSegmentsProps) {
  return (
    <div className="flex gap-1 w-full px-2 py-2">
      {Array.from({ length: total }).map((_, index) => {
        const segmentValue =
          index < current ? 100 : index === current ? progress : 0;

        return (
          <ProgressPrimitive.Root
            key={index}
            value={segmentValue}
            className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
          >
            <ProgressPrimitive.Indicator
              className="h-full bg-white rounded-full transition-transform duration-100 ease-linear"
              style={{ transform: `translateX(-${100 - segmentValue}%)` }}
            />
          </ProgressPrimitive.Root>
        );
      })}
    </div>
  );
}

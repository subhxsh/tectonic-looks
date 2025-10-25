import type { Annotation } from "../mock-data/types";

interface AnnotationDotProps {
  annotation: Annotation;
  onClick: (annotation: Annotation) => void;
}

export function AnnotationDot({ annotation, onClick }: AnnotationDotProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(annotation);
  };

  return (
    <button
      onClick={handleClick}
      className="absolute pointer-events-auto"
      style={{
        left: `${annotation.position.x}%`,
        top: `${annotation.position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
        <div className="w-2 h-2 rounded-full bg-black" />
      </div>
    </button>
  );
}

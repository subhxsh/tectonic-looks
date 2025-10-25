import { useState } from "react";
import type { Annotation } from "../mock-data/types";
import { AnnotationDot } from "./annotation-dot";
import { ProductCard } from "./product-card";

interface AnnotationOverlayProps {
  annotations: Annotation[];
  onProductView?: (productId: string) => void;
}

export function AnnotationOverlay({
  annotations,
  onProductView,
}: AnnotationOverlayProps) {
  const [selectedAnnotation, setSelectedAnnotation] =
    useState<Annotation | null>(null);

  const handleAnnotationClick = (annotation: Annotation) => {
    setSelectedAnnotation(annotation);
  };

  const handleClose = () => {
    setSelectedAnnotation(null);
  };

  const handleShop = (productId: string) => {
    onProductView?.(productId);
    console.log("Navigate to product:", productId);
  };

  return (
    <>
      <div className="absolute inset-0 pointer-events-none z-10">
        {annotations.map((annotation) => (
          <AnnotationDot
            key={annotation.id}
            annotation={annotation}
            onClick={handleAnnotationClick}
          />
        ))}
      </div>
      {selectedAnnotation && (
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm z-30 flex items-end pointer-events-auto"
          onClick={handleClose}
        >
          <div className="w-full animate-slide-up">
            <ProductCard
              product={selectedAnnotation.product}
              onClose={handleClose}
              onShop={handleShop}
            />
          </div>
        </div>
      )}
    </>
  );
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  brand: string;
  description?: string;
}

export interface Annotation {
  id: string;
  product: Product;
  position: {
    x: number;
    y: number;
  };
}

export interface Preview {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  // In seconds, only for videos
  duration?: number;
  // Only for images
  annotations?: Annotation[];
}

export interface Look {
  id: string;
  title: string;
  creator: {
    name: string;
    avatar?: string;
    type: "customer" | "celebrity" | "influencer";
  };
  previews: Preview[];
  createdAt: Date;
}

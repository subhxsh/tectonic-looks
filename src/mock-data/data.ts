import type { Look } from "./types";

export const looks: Look[] = [
  {
    id: "1",
    title: "Summer Essentials",
    creator: {
      name: "Emma Johnson",
      avatar: "https://i.pravatar.cc/150?img=1",
      type: "influencer",
    },
    previews: [
      {
        id: "1-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a1",
            product: {
              id: "p1",
              name: "White Cotton T-Shirt",
              price: 29.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
              brand: "Zara",
              description:
                "Classic white cotton t-shirt, perfect for everyday wear",
            },
            position: { x: 45, y: 35 },
          },
          {
            id: "a2",
            product: {
              id: "p2",
              name: "High-Waisted Denim Jeans",
              price: 79.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
              brand: "Levi's",
              description: "Vintage high-waisted denim with a relaxed fit",
            },
            position: { x: 50, y: 60 },
          },
        ],
      },
      {
        id: "1-2",
        type: "image",
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a3",
            product: {
              id: "p3",
              name: "Designer Sunglasses",
              price: 149.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
              brand: "Ray-Ban",
              description: "Classic aviator sunglasses with UV protection",
            },
            position: { x: 48, y: 25 },
          },
        ],
      },
      {
        id: "1-3",
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1080&h=1920&fit=crop",
        duration: 15,
      },
    ],
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Streetwear Vibes",
    creator: {
      name: "Marcus Chen",
      avatar: "https://i.pravatar.cc/150?img=12",
      type: "celebrity",
    },
    previews: [
      {
        id: "2-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a4",
            product: {
              id: "p4",
              name: "Oversized Hoodie",
              price: 89.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
              brand: "Nike",
              description: "Comfortable oversized hoodie in premium cotton",
            },
            position: { x: 50, y: 40 },
          },
          {
            id: "a5",
            product: {
              id: "p5",
              name: "Cargo Pants",
              price: 119.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
              brand: "Carhartt",
              description: "Tactical cargo pants with multiple pockets",
            },
            position: { x: 48, y: 70 },
          },
        ],
      },
      {
        id: "2-2",
        type: "image",
        url: "https://images.unsplash.com/photo-1558769132-cb1aea564c8f?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a6",
            product: {
              id: "p6",
              name: "Sneakers",
              price: 159.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
              brand: "Adidas",
              description: "Limited edition streetwear sneakers",
            },
            position: { x: 50, y: 85 },
          },
        ],
      },
    ],
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "3",
    title: "Elegant Evening",
    creator: {
      name: "Sofia Martinez",
      avatar: "https://i.pravatar.cc/150?img=5",
      type: "influencer",
    },
    previews: [
      {
        id: "3-1",
        type: "video",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail:
          "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1080&h=1920&fit=crop",
        duration: 15,
      },
      {
        id: "3-2",
        type: "image",
        url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a7",
            product: {
              id: "p7",
              name: "Silk Evening Dress",
              price: 299.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=400&fit=crop",
              brand: "Versace",
              description: "Elegant silk evening dress with flowing silhouette",
            },
            position: { x: 50, y: 50 },
          },
          {
            id: "a8",
            product: {
              id: "p8",
              name: "Statement Necklace",
              price: 189.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
              brand: "Tiffany & Co.",
              description: "Gold-plated statement necklace with crystals",
            },
            position: { x: 50, y: 30 },
          },
        ],
      },
      {
        id: "3-3",
        type: "image",
        url: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a9",
            product: {
              id: "p9",
              name: "Leather Clutch",
              price: 129.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop",
              brand: "Michael Kors",
              description: "Compact leather clutch with gold hardware",
            },
            position: { x: 35, y: 55 },
          },
        ],
      },
    ],
    createdAt: new Date("2024-01-25"),
  },
  {
    id: "4",
    title: "Casual Weekend",
    creator: {
      name: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?img=8",
      type: "customer",
    },
    previews: [
      {
        id: "4-1",
        type: "image",
        url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a10",
            product: {
              id: "p10",
              name: "Flannel Shirt",
              price: 49.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
              brand: "Uniqlo",
              description: "Cozy flannel shirt perfect for layering",
            },
            position: { x: 50, y: 45 },
          },
        ],
      },
      {
        id: "4-2",
        type: "image",
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=1080&h=1920&fit=crop",
        annotations: [
          {
            id: "a11",
            product: {
              id: "p11",
              name: "Canvas Backpack",
              price: 69.99,
              currency: "USD",
              image:
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
              brand: "Herschel",
              description: "Durable canvas backpack with laptop sleeve",
            },
            position: { x: 55, y: 40 },
          },
        ],
      },
    ],
    createdAt: new Date("2024-01-28"),
  },
];

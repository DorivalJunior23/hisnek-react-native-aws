export interface Product {
    id: string;
    title: string;
    image: string;
    images: string[];
    description?: string;
    avgRating: number;
    ratings: number;
    price: number;
}


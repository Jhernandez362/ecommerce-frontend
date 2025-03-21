export type ProductType = {
    id: number;
    name: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    taste: string;
    origin: string;
    price: number;
    images: {
        id: number;
        url: string;
    }[];
    category: {
        slug: string;
        name: string;
    };

}
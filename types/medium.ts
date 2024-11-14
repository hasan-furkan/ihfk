export interface MediumPost {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    categories: string[];
}

export interface MediumFeed {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
}

export interface MediumResponse {
    status: string;
    feed: MediumFeed;
    items: MediumPost[];
} 
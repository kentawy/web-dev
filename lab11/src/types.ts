export interface Post {
    id: number;
    title: string;
    body: string; 
    createdAt: Date;
    author?: string; 
    category?: string;
}
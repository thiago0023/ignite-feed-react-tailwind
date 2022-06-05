import { CommentType } from "../components/Comment/Comment";
import { authors } from "./authors";

export const comments: CommentType[] = [
    {
        id: 1,
        author: authors[1],
        content: [{type: "text", content: 'O outro é o supermercado'}],
        likes: 10,
        publishedAt: new Date(),
        postID: 1
    },
    {
        id: 2,
        author: authors[0],
        content: [{type: "text", content: 'Vish mano, seu trampo parece estar bem regrado'}],
        likes: 10,
        publishedAt: new Date(),
        postID: 2
    }
]
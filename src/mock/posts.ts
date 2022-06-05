import { PostType } from "../components/Post/Post"
import { authors } from "./authors"

export const posts: PostType[] = [
    {
        id: 1,
        publishedAt: new Date(),
        content: 'Tinham dois mercados, eles estavam voando.\nUm deles caiu, porque o outro é?',
        author: authors[0],
    },
    {
        id: 2,
        publishedAt: new Date(),
        content: 'Cansado de fazer regrinha...',
        author: authors[1],
    },
]
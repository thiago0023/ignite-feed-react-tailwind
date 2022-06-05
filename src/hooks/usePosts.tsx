import React from 'react'
import { CommentType } from '../components/Comment/Comment';
import { PostType } from '../components/Post/Post';
import { posts as mockPosts } from '../mock/posts';
import { comments as mockComments } from '../mock/comments';

interface PostContextData {
    onDeleteComment: (commentID: number | string) => void;
    onUpdateComments: (newComment: CommentType) => void;
    getCommentsByPostID: (postID: number | string) => CommentType[];
    posts?: PostType[];
}

interface PostProviderProps {
    children: React.ReactNode;
}

export default function PostProvider({ children }: PostProviderProps) {
    const [posts, setPosts] = React.useState<PostType[]>([...mockPosts]);
    const [comments, setComments] = React.useState<CommentType[]>([...mockComments]);

    const getCommentsByPostID = (postID: number | string): CommentType[] => {
        const commentsFromPost = comments.filter(comment => comment.postID == postID);
        return commentsFromPost;
    }

    const onDeleteComment = (commentID: number | string): void => {
        const newComments = comments.filter(comment => comment.id != commentID);
        setComments([...newComments]);
    }

    const onUpdateComments = (newComment: CommentType): void => {
        setComments([...comments, newComment]);
    }

    return (
        <PostContext.Provider value={{posts, getCommentsByPostID, onDeleteComment, onUpdateComments}}>
            {children}
        </PostContext.Provider>
    )
}

const PostContext = React.createContext<PostContextData>(null as any);
export const usePosts = () => React.useContext(PostContext);


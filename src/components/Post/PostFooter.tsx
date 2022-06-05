import { FormEvent, useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import { CommentType } from "../Comment/Comment";
import { Author } from "./Post";

interface PostFooterProps {
  author: Author;
  postID: number | string;
}

export default function PostFooter({ author, postID }: PostFooterProps) {
  const [newComment, setNewComment] = useState<string>("");
  const { onUpdateComments } = usePosts();

  const handCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    const newCommentObject: CommentType = {
      id: new Date().getTime(),
      content: [{type: "text", content: newComment}],
      author,
      publishedAt: new Date(),
      likes: 0,
      postID
    };

    onUpdateComments(newCommentObject);
    setNewComment("");
  }

  return (
    <form onSubmit={handCreateNewComment} className='w-full mt-6 pt-6 border-t-[1px] border-solid border-gray-500 group'>
      <strong className='leading-relaxed text-gray-100'>
        Deixe seu feedback
      </strong>
      <textarea
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)} 
        className='w-full bg-gray-700 border-0 resize-none h-24 p-4 rounded-lg text-gray-100 leading-snug mt-4' 
        placeholder='Deixe um comentário' 
      />
      <footer className='invisible max-h-0 group-focus-within:visible group-focus-within:max-h-[none]'>
        <button className='py-4 px-6 mt-4 rounded-lg bg-primary-base text-white cursor-pointer font-bold transition-colors duration-150 hover:bg-primary-light' type='submit'>
          Comentar
        </button>
      </footer>
    </form>
  )
}

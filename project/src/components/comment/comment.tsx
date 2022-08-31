import {ResponseComment} from '../../types/film';
import {humanizeCommentDate} from '../../utils';

type CommentType = {
  item: ResponseComment
};

export function Comment ({item}: CommentType) : JSX.Element{
  const {comment, date, rating, user} = item;
  const {name} = user;
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>{humanizeCommentDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}


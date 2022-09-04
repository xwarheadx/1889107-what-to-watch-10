import {ChangeEvent, FormEvent, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ReviewTextValidation, NUMBER_OF_STARS} from '../../const';
import RatingStar from '../rating-star/rating-star';
import {useAppDispatch} from '../../hooks';
import {addComment} from '../../store/api-action';

export default function CommentForm () {
  const dispatch = useAppDispatch();
  const {id} = useParams();

  const [inputData, setInputData] = useState({
    id: id ? id : '0',
    rating: 0,
    comment: '',
    isDisabled: false,
  });

  const isSubmitBtnDisabled = !(inputData.rating !== 0
    && inputData.comment !== null
    && inputData.comment.length >= ReviewTextValidation.MinLength
    && inputData.comment.length <= ReviewTextValidation.MaxLength);

  function onFieldChange(evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) {
    const {name, value} = evt.target;
    setInputData({...inputData, [name]: value});
  }

  const values = [...Array(NUMBER_OF_STARS).keys()].map((value) => (value += 1)).reverse();

  const ratingStars = values.map((value: number) => (
    <RatingStar
      key={`star-${value}`}
      value={value}
      onFieldChange={onFieldChange}
      rating={inputData.rating}
      disabled={inputData.isDisabled}
    />
  ));

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isSubmitBtnDisabled) {
      return;
    }

    dispatch(addComment(inputData));
    setInputData({...inputData, rating: 0, comment: '', isDisabled: false});
  };

  return (
    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmitForm}
    >
      <div className="rating">
        <div className="rating__stars" >
          {ratingStars}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className={'add-review__textarea'}
          name="comment"
          id="review-text"
          placeholder="Review text"
          minLength={ReviewTextValidation.MinLength}
          maxLength={ReviewTextValidation.MaxLength}
          value={inputData.comment}
          onChange={onFieldChange}
          disabled={inputData.isDisabled}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className={`add-review__btn $disabled {
              cursor: not-allowed;
            }}`}
            type="submit"
            disabled={isSubmitBtnDisabled || inputData.isDisabled}
          >
              Post
          </button>
        </div>
      </div>
    </form>
  );
}


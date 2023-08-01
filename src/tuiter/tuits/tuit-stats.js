import React from 'react';
import { AiOutlineComment, AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GoShare } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { tuitLikeToggle } from '../reducers/tuits-reducer';

const TuitStats = ({ liked, replies, retuits, likes, id }) => {

    const dispatch = useDispatch();

    const toggleTuitLike = () => {
        dispatch(tuitLikeToggle({ _id: id }))
    }

    return (
        <div className="row">
            <div className="col-3">
                <AiOutlineComment />
                {replies}
            </div>
            <div className="col-3">
                <AiOutlineRetweet />
                {retuits}
            </div>
            <div className="col-3" onClick={toggleTuitLike}>
                {liked ? <AiFillHeart color='red' /> : <AiOutlineHeart />}
                {likes}
            </div>
            <div className="col-3">
                <GoShare />
            </div>
        </div>
    )

}

export default TuitStats;

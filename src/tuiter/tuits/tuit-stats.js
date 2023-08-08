import React from 'react';
import { AiOutlineComment, AiOutlineRetweet, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsHandThumbsDownFill, BsHandThumbsDown } from 'react-icons/bs';
import { GoShare } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from '../services/tuits-thunks';

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch();

    const toggleTuitLike = () => {
        if (tuit.liked) {
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1, liked: false}))
        } else {
            dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: true}))
        }
    }

    const toggleTuitDislike = () => {
        if (tuit.disliked) {
            dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes - 1, disliked: false}))
        } else {
            dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + 1, disliked: true}))
        }

    }

    return (
        <div className="row">
            <div className="col-3">
                <AiOutlineComment />
                {tuit.replies}
            </div>
            <div className="col-3">
                <AiOutlineRetweet />
                {tuit.retuits}
            </div>
            <div className="col-3" onClick={toggleTuitLike}>
                {tuit.liked ? <AiFillHeart color='red' /> : <AiOutlineHeart />}
                {tuit.likes}
            </div>
            <div className="col-2" onClick={toggleTuitDislike}>
                {tuit.disliked ? <BsHandThumbsDownFill color='blue' /> : <BsHandThumbsDown />}
                {tuit.dislikes}
            </div>
            <div className="col-1">
                <GoShare />
            </div>
        </div>
    )

}

export default TuitStats;

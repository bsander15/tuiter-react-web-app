import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuitThunk } from "../services/tuits-thunks";

const TuitItem = ({ tuit }) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 d-flex justify-content-center">
                    <img width={50} height={50} className="rounded-circle" src={`${tuit.image}`} />
                </div>
                <div className="col-11">
                    <i className="bi bi-x float-end"
                        onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div>{tuit.userName} <BsFillPatchCheckFill color="blue" /> . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <div><TuitStats
                        tuit={tuit}
                    />
                    </div>

                </div>
            </div>
            <div className="row">
            </div>
        </li>
    );
};
export default TuitItem;
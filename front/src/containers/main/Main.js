import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postLink} from "../../store/actions";

const Main = (props) => {
    const dispatch = useDispatch();
    const Url = useSelector(state => state.shortUrl);

    const [input, setInput] = useState({
        Url: ""
    });

    const post = async (e) => {
        e.preventDefault();
        await dispatch(postLink(input));
    };

    const inputHandler = (e) => {
        const {value} = e.target;
        setInput(prevState => ({
            ...prevState,
            Url: value
        }));
    };


    return (
        <div className='container'>
            <h1>link shortener</h1>
            <form onSubmit={e => post(e)}>
                <input type="text" value={input.Url} onChange={e =>inputHandler(e)}/>
                <button>Submit</button>
            </form>
            <div>
                <p>result:</p>
                <p>
                    <a href={`http://localhost:8002/links/${Url}`}>
                        {`http://localhost:8002/links/${Url}`}
                    </a>
                </p>
            </div>
        </div>
    )
};

export default Main;
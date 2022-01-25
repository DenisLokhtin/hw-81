import axios from "axios";

export const POST_LINK_SUCCESS = "POST_LINK_SUCCESS";

export const postLinkSuccess = (shortUrl) => ({type: POST_LINK_SUCCESS, payload: shortUrl});

export const postLink = (link) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post('http://localhost:8002/links', link);
            dispatch(postLinkSuccess(data.shortUrl));
        } catch (e) {
            console.log(e)
        }
    }
};

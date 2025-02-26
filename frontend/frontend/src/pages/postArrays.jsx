
import axios from "axios"

export const PostFeedback = async ({feedback, rating, feedback_author, feedback_author_email }) =>{
    try{
        const feed = await axios.post('http://127.0.0.1:8000/api/feedback-and-rating/create/', {feedback, rating, feedback_author, feedback_author_email },{
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert('feedback uploaded successfully!')
        return feed.data;
    }catch(err){
        alert(`Error in uploading feedback: ${err.message} `)
    }
}
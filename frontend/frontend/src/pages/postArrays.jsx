
import axios from "axios"

export const PostFeedback = async ({feedback, rating, feedback_author, feedback_author_email }) =>{
    try{
        const feed = await axios.post('http://127.0.0.1:8000/api/feedback-rating/', {feedback, rating, feedback_author, feedback_author_email },{
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert('feedback uploaded successfully!')
        return feed.data;
    }catch(err){
        alert(`Error uploading feedback: ${err.message} `)
    }
}

export const PostFaq = async ({ question }) => {
    try{
        const questions = await axios.post('http://127.0.0.1:8000/api/faq-question/', { question }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert(`Question uploaded successfully!`)
    }catch(err){ 
        alert(`Error posting the question: ${err.message}`)
    }
}

export const PostIncident = async ({ incident }) => {
    try{
        const incidence = await axios.post('http://127.0.0.1:8000/api/report-incidence/', { incident }, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        alert(`Incident reported successfully!`)
    }catch(err){ 
        alert(`Error posting incident: ${err.message}`)
    }
}

export const PostMessage = async ({ name, email, subject, phone, message }) => {
    try{
        const messaging = await axios.post('http://127.0.0.1:8000/api/message/', { name, email, subject, phone, message }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        alert(`Message sent successfully, We will get back to you shortly!`)
    }catch(err){ 
        alert(`Error posting the message: ${err.message}`)
    }
}

export const PostSubscriber = async ({ email }) => {
    try{
        const emailing = await axios.post('http://127.0.0.1:8000/api/subscriber/', { email }, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        alert(`You will now get the latest news once they are out`)
    }catch(err){ 
        alert(`Error subscribing: ${err.message}`)
    }
}

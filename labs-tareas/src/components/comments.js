import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Comment from './comment';
import CommentsList from './commentsList'
function Comments() {
    const [commentsList, setcommentsList] = useState([]);
    const addComments = (usuario) => {
        setcommentsList(commentsList.concat(usuario));
    }

    const loadingComments = async () => {
        console.log('Get all comments');
        let datos = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json());
        setcommentsList(datos);
        console.log('datos-->',datos)
    }

    useEffect(() => {
        loadingComments();
    }, []);
    return <div>
        <Menu />
        <div className="row">
            <div className="col-lg-4">
                <Comment addComments={addComments} />
            </div>
            <div className="col-lg-8">
                <CommentsList commentsList={commentsList} />
            </div>
        </div>
    </div>
}
export default Comments;
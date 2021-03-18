import React, { useState } from 'react';
function Comment(props) {
    const [comment, setComment] = useState({
        postId: 0,
        id: 0,
        name: "",
        email: "",
        body: ""
    })

    const cambiarValor = (e) => {
        const { name, value, type } = e.target;
        setComment({ ...comment, [name]: (type === 'number') ? parseInt(value) : value });
        //limpiar();
    }

    const limpiar = () => {
        setComment({
            postId: 0,
            id: 0,
            name: "",
            email: "",
            body: ""
        })
    }
    return <div>
        <div className="card">
            <div className="card-header">Datos Usuario</div>
            <div className="card-body">


                <input type="number"
                    name="postId"
                    id="postId"
                    placeholder="Digite el User Id"
                    onChange={cambiarValor}
                    value={comment.postId} />
                <input
                    type="number"
                    name="id"
                    id="id"
                    placeholder="Digite el Id"
                    onChange={cambiarValor}
                    value={comment.id} />
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite el titulo"
                    onChange={cambiarValor}
                    value={comment.name} />
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Digite el texto"
                    onChange={cambiarValor}
                    value={comment.email} />
                <input
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Digite el texto"
                    onChange={cambiarValor}
                    value={comment.body} />
            </div>
            <div className="card-footer">
                <button
                    className="btn btn-primary"
                    onClick={() => { props.addComments(comment) }}
                >Guardar</button>
                <button
                    className="btn btn-default"
                    onClick={limpiar}
                >Cancelar</button>
            </div>
        </div>
    </div>
}
export default Comment;
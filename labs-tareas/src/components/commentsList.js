function CommentsList(props){
const mostrarFilas=()=>{
    return props.commentsList.map((comment,index)=>{
        return <tr key={index}>
            <td>{comment.postId}</td>
            <td>{comment.id}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
        </tr>
    })
}
return <div>
    <table className="table">
        <thead>
            <tr>
                <th>PostId</th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Texto</th>
            </tr>
        </thead>
        <tbody>
            {props.commentsList.length===0?<tr><td colSpan={4}>Cargando...</td></tr>:
            mostrarFilas()}
        </tbody>
    </table>
</div>
}
export default CommentsList;
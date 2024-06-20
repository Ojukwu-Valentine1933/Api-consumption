import { Link } from "react-router-dom"
const TodoCard = ({todoTitle, todoId}) => {
    return <div className="col-lg-4 mb-3">
        <div className="card" style={{width:"100%"}}>

<div className="card-body">
  <h5 className="card-title">{todoTitle}</h5>
 
  {/* <a  Link to="/id"></a> */}
  <Link to={`/todos/${todoId}`} className="btn btn-primary">Go somewhere</Link>
</div>
</div>
    </div>
}

export default TodoCard
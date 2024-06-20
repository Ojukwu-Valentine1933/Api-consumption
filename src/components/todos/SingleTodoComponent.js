import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useHttp from "../../hooks/useHttp"



const SingleTodoComponent = () => {
const params = useParams()

const {id} = params;


    const [getTodosData, singleTodo, errorMessage, isLoading] = useHttp()
    

    useEffect(() => {
        getTodosData(`todos/${id}`, "GET")
    }, [id])



return <>{singleTodo.id && <div className="col-lg-8">
    <h1>{singleTodo.title}</h1>
</div>}</>

}

export default SingleTodoComponent
import { useEffect } from "react"
import TodoCard from "./TodoCard"
import useHttp from "../../hooks/useHttp"

const AllTodoComponent = () => {

    const [getTodosData, todos, errorMessage, isLoading] = useHttp()

    useEffect(() => {
        getTodosData("todos", "GET")
    }, [])


return <>
{ todos.length > 0 && todos.map(todo => <TodoCard  key={todo.id} todoTitle={todo.title} todoId={todo.id}/>) }
</>
}

export default AllTodoComponent;
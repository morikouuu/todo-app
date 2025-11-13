import type { Todo } from "../../types/todo";
import TodoCard from "../TodoCard";
import "./style.css";

type TodoListProps = {
	tasks: Todo[];
	onDelete: (id: number) => void;
	onCheck: (id: number) => void;
};

const TodoList = ({ tasks, onDelete, onCheck }: TodoListProps) => {
	return (
		<div className="todo-list">
			{tasks.map((task) => (
				<TodoCard
					key={task.id}
					task={task}
					onDelete={onDelete}
					onCheck={onCheck}
				/>
			))}
		</div>
	);
};

export default TodoList;

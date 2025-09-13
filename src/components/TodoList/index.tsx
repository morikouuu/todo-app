import type { Todo } from "../../types/todo";
import "./style.css";

type TodoListProps = {
	tasks: Todo[];
	onDelete: (id: number) => void;
	onCheck: (id: number) => void;
};

const TodoList = ({ tasks, onDelete, onCheck }: TodoListProps) => {
	return (
		<div className="todo-list">
			<ul>
				{tasks.map((task) => (
					<div className="task-content">
						<li key={task.id}>
							<span className={`task-text ${task.done ? "checked" : ""}`}>
								{task.task}
							</span>
							<input
								type="checkbox"
								checked={task.done}
								onChange={() => onCheck(task.id)}
								className="task-check"
							/>

							<span className="tag">{task.tag}</span>
							{task.deadline && (
								<span
									className={`deadline ${
										new Date(task.deadline) < new Date() ? "overdue" : ""
									}`}
								>
									期限: {new Date(task.deadline).toLocaleDateString("ja-JP")}
								</span>
							)}
							<button onClick={() => onDelete(task.id)}>削除</button>
						</li>
					</div>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

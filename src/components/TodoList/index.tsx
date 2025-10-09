import type { Todo } from "../../types/todo";
import { PRIORITY_LABELS } from "../../types/todo";
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
					<li key={task.id} className={task.done ? "checked" : ""}>
						<input
							type="checkbox"
							checked={task.done}
							onChange={() => onCheck(task.id)}
							className="task-check"
						/>
						<div className="task-content">
							<div className="task-header">
								<span className={`task-text ${task.done ? "checked" : ""}`}>
									{task.task}
								</span>
								<button onClick={() => onDelete(task.id)}>削除</button>
							</div>
							<div className="task-meta">
								<span className="tag">{task.tag}</span>
								<span className={`priority priority-${task.priority}`}>
									{PRIORITY_LABELS[task.priority]}
								</span>
								{task.deadline && (
									<span
										className={`deadline ${
											new Date(task.deadline) < new Date() ? "overdue" : ""
										}`}
									>
										期限: {new Date(task.deadline).toLocaleDateString("ja-JP")}
									</span>
								)}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;

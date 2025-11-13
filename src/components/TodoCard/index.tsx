import type { Todo } from "../../types/todo";
import { PRIORITY_LABELS } from "../../types/todo";
import "./style.css";

type TodoCardProps = {
	task: Todo;
	onDelete: (id: number) => void;
	onCheck: (id: number) => void;
};

const TodoCard = ({ task, onDelete, onCheck }: TodoCardProps) => {
	const renderDeadline = (deadline: string) => {
		if (!deadline || !deadline.trim()) {
			return null;
		}
		const deadlineDate = new Date(deadline);
		const isValidDate = !isNaN(deadlineDate.getTime());
		if (!isValidDate) {
			return null;
		}
		const isOverdue = deadlineDate < new Date();
		return (
			<div className={`deadline ${isOverdue ? "overdue" : ""}`}>
				期限: {deadlineDate.toLocaleDateString("ja-JP")}
			</div>
		);
	};

	return (
		<div className={`todo-card ${task.done ? "checked" : ""}`}>
			<div className="card-header">
				<input
					type="checkbox"
					checked={task.done}
					onChange={() => onCheck(task.id)}
					className="card-checkbox"
				/>
				<h3 className={`card-title ${task.done ? "checked" : ""}`}>
					{task.task}
				</h3>
			</div>
			<div className="card-body">
				<div className="card-meta">
					<span className="card-tag">{task.tag}</span>
					<span className={`card-priority priority-${task.priority}`}>
						{PRIORITY_LABELS[task.priority]}
					</span>
				</div>
				{renderDeadline(task.deadline)}
			</div>
			<div className="card-footer">
				<button
					className="card-delete-button"
					onClick={() => onDelete(task.id)}
				>
					削除
				</button>
			</div>
		</div>
	);
};

export default TodoCard;

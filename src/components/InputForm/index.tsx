import { useState } from "react";
import type { Todo, Tag, Priority } from "../../types/todo";
import "./style.css";

type addTaskProps = {
	addTask: (todo: Todo) => void;
};

const InputForm = ({ addTask }: addTaskProps) => {
	const [task, setTask] = useState("");
	const [deadline, setDeadline] = useState("");
	const [selectedTag, setSelectedTag] = useState<Tag>("その他");
	const [selectedPriority, setSelectedPriority] = useState<Priority>("medium");
	const handlesubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!task.trim()) {
			return;
		}

		const newTask: Todo = {
			id: Date.now(),
			task: task.trim(),
			done: false,
			deadline,
			tag: selectedTag,
			priority: selectedPriority,
			createdat: new Date(),
		};

		addTask(newTask);

		setTask("");
		setDeadline("");
		setSelectedTag("その他");
		setSelectedPriority("medium");
	};
	return (
		<form onSubmit={handlesubmit}>
			<input
				type="text"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				placeholder="Todo"
			/>
			<input
				type="date"
				value={deadline}
				onChange={(e) => setDeadline(e.target.value)}
			/>
			<select
				value={selectedTag}
				onChange={(e) => setSelectedTag(e.target.value as Tag)}
			>
				<option value="仕事">仕事</option>
				<option value="プライベート">プライベート</option>
				<option value="健康">健康</option>
				<option value="買い物">買い物</option>
				<option value="趣味">趣味</option>
				<option value="家事">家事</option>
				<option value="勉強">勉強</option>
				<option value="その他">その他</option>
			</select>
			<select
				value={selectedPriority}
				onChange={(e) => setSelectedPriority(e.target.value as Priority)}
			>
				<option value="high">高</option>
				<option value="medium">中</option>
				<option value="low">低</option>
			</select>
			<button type="submit" disabled={!task.trim()}>
				追加する
			</button>
		</form>
	);
};

export default InputForm;

import { useState } from "react";

import "./App.css";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList/";
import type { Todo, Tag, Priority } from "./types/todo";

function App() {
	const [tasks, setTasks] = useState<Todo[]>([]);
	const [filterTag, setFilterTag] = useState<Tag | "すべて">("すべて");
	const [filterPriority, setFilterPriority] = useState<Priority | "すべて">(
		"すべて"
	);
	const addTask = (newTask: Todo) => {
		setTasks([...tasks, newTask]);
	};

	const deleteTask = (id: number) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const checkTask = (id: number) => {
		setTasks((tasks) => {
			return tasks.map((task) => {
				if (task.id === id) {
					return {
						...task,
						done: !task.done,
					};
				}
				return task;
			});
		});
	};

	const filteredTasks = tasks.filter((task) => {
		const tagMatch = filterTag === "すべて" || task.tag === filterTag;
		const priorityMatch =
			filterPriority === "すべて" || task.priority === filterPriority;
		return tagMatch && priorityMatch;
	});

	return (
		<div className="app">
			<h1>Todoリスト</h1>
			<p>テスト表示</p>
			<InputForm addTask={addTask} />
			<div className="filter-section">
				<label htmlFor="tag-filter">タグで絞り込み:</label>
				<select
					id="tag-filter"
					value={filterTag}
					onChange={(e) => setFilterTag(e.target.value as Tag | "すべて")}
				>
					<option value="すべて">すべて</option>
					<option value="仕事">仕事</option>
					<option value="プライベート">プライベート</option>
					<option value="健康">健康</option>
					<option value="買い物">買い物</option>
					<option value="趣味">趣味</option>
					<option value="家事">家事</option>
					<option value="勉強">勉強</option>
					<option value="その他">その他</option>
				</select>

				<label htmlFor="priority-filter">優先度で絞り込み:</label>
				<select
					id="priority-filter"
					value={filterPriority}
					onChange={(e) =>
						setFilterPriority(e.target.value as Priority | "すべて")
					}
				>
					<option value="すべて">すべて</option>
					<option value="high">高</option>
					<option value="medium">中</option>
					<option value="low">低</option>
				</select>
			</div>
			<TodoList
				tasks={filteredTasks}
				onDelete={deleteTask}
				onCheck={checkTask}
			/>
		</div>
	);
}

export default App;

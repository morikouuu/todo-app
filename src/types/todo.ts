export type Tag =
	| "仕事"
	| "プライベート"
	| "健康"
	| "買い物"
	| "趣味"
	| "家事"
	| "その他"
	| "勉強";

export type Priority = "high" | "medium" | "low";

export type Todo = {
	id: number;
	task: string;
	done: boolean;
	deadline: string;
	tag: Tag;
	priority: Priority;
	createdat: Date;
};

export const PRIORITY_LABELS = {
	high: "高",
	medium: "中",
	low: "低",
} as const;

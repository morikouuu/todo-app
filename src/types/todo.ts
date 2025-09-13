export type Tag =
	| "仕事"
	| "プライベート"
	| "健康"
	| "買い物"
	| "趣味"
	| "家事"
	| "その他"
	| "勉強";

export type Todo = {
	id: number;
	task: string;
	done: boolean;
	deadline: string;
	tag: Tag;
};

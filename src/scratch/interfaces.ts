export interface IScratchpadItem {
	id: string;
	created: number;
	title: string;
	type: ScratchpadItemType;
	message: string;
	image?: string;
}

export enum ScratchpadItemType {
	Text,
	Link,
}

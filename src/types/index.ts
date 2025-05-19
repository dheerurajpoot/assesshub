export interface Candidate {
	_id: string;
	name: string;
	email: string;
	phone: string;
	position: string;
	status: 'invited' | 'in_progress' | 'completed';
	score: number;
	createdAt: string;
}

export interface Test {
	id: string;
	title: string;
	description?: string;
	status: string;
	dueDate?: string;
	createdAt: string;
	// Add other relevant fields based on your data structure
}

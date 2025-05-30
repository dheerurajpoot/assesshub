import type { Metadata } from "next";

import { TestTaking } from "@/components/test-taking";

export const metadata: Metadata = {
	title: "Take Test | AssessHub",
	description: "Take an assessment test",
};

export default async function TakeTestPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	return (
		<div className='container mx-auto py-8'>
			<TestTaking testId={(await params).id} />
		</div>
	);
}

import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { WEBHOOK_URL } from '$env/static/private';

export const actions: Actions = {
	create: async (event) => {
		const data = await event.request.formData();
		console.log('here');
		const body = {
			content: data.get('name')
		};
		if (body.content === 'fail') {
			return fail(500, { name: 'you failed', incorrect: true });
		}
		const res = await fetch(WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		if (!res.ok) {
			return {
				status: 500,
				body: 'error'
			};
		}
		return {
			success: true
		};
	}
};

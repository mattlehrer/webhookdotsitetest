<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<form method="POST" action="?/create">
	<input name="name" type="text" />
	<button>Submit</button>
</form>
{#if form?.success}
	<p>Success</p>
{/if}

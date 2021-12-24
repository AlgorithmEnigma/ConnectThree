<script>
	import { user } from '$lib/stores/sessionStore';
	import supabase from '$lib/utils/supabaseClient';
	import Auth from '$lib/components/Auth.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<h1 class="text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

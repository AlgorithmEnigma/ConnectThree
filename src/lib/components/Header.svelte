<script>
	import { page } from '$app/stores';
	import { user } from '$lib/stores/sessionStore';

	console.log(user);
</script>

<ul>
	<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
	<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>

	{#if $user}
		<li class:active={$page.path === '/profile'}>
			<a sveltekit:prefetch href="/profile">Profile</a>
		</li>
	{:else}
		<li class:active={$page.path === '/login'}><a sveltekit:prefetch href="/login">Login</a></li>
	{/if}
</ul>

<style>
	ul {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 100vw;
		margin: 1rem;
		position: absolute;
		margin-bottom: 2rem;
	}
</style>

<script>
	import supabase from '$lib/utils/supabaseClient.js';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) {
				throw error;
			}
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="flex flex-col justify-center items-center h-screen w-screen">
	<h1 class="text-3xl m-2 ">ConnectThree Login</h1>
	<p class="mb-6">Sign in via magic link with your email below</p>
	<form on:submit|preventDefault={handleLogin}>
		<label for="email">Email</label>
		<input id="email" type="email" bind:value={email} />
		<div class="btn">
			<input type="submit" value={loading ? 'Loading' : 'Send magic link'} disabled={loading} />
		</div>
	</form>
</div>

<style>
</style>

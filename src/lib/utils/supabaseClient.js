import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_API_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;

// const ENCRYPTION_SECRET = process.env['ENCRYPTION_SECRET'];
// const SESSION_LENGTH_MS = 604800000;
// export const SESSION_NAME = 'session';

// async function encrypt(data) {
// 	return data && Iron.seal(data, ENCRYPTION_SECRET, Iron.defaults);
// }

// async function decrypt(data) {
// 	return data && Iron.unseal(data, ENCRYPTION_SECRET, Iron.defaults);
// }

// export async function createSessionCookie(data) {
// 	const encrypted_data = await encrypt(data);

// 	return serialize(SESSION_NAME, encrypted_data, {
// 		maxAge: SESSION_LENGTH_MS / 1000,
// 		expires: new Date(Date.now() + SESSION_LENGTH_MS),
// 		httpOnly: true,
// 		secure: process.env['NODE_ENV'] === 'production',
// 		path: '/',
// 		sameSite: 'lax'
// 	});
// }

// export async function getSession(cookie) {
// 	return await decrypt(cookie);
// }

// export function removeSessionCookie() {
// 	return serialize(SESSION_NAME, '', {
// 		maxAge: -1,
// 		path: '/'
// 	});
// }

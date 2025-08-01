import type { LayoutServerLoad } from './$types';
import { loadFlash } from 'sveltekit-flash-message/server';
import { getFilamentDatabase } from '$lib/dataCacher';

export const load: LayoutServerLoad = loadFlash(async (event) => {
  const filamentData = await getFilamentDatabase();

  return { filamentData };
});

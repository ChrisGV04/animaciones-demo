// register vue composition api globally
import { ViteSSG } from 'vite-ssg';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import App from './App.vue';

import '~/assets/css/tailwind.css'; // Tailwind CSS Styles
const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // Install the modules inside the "modules" folder.
  Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.(ctx));
});

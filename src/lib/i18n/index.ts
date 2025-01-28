import { addMessages, init } from 'svelte-i18n';
import { translations } from './translations';

// Add messages for each locale
addMessages('en', translations.en);
addMessages('al', translations.al);

// Initialize with English as default
init({
  fallbackLocale: 'en',
  initialLocale: 'en'
});
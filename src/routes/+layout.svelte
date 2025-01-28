<script>
  import "../app.css";
  import { Menu, X, Globe } from "lucide-svelte";
  import { inject } from '@vercel/analytics';
  import { onMount } from "svelte";
  import { locale, _ } from 'svelte-i18n';
  import '../lib/i18n';
  
  let isMenuOpen = false;
  
  onMount(() => {
    inject();
  });
  
  const navigation = [
    { name: $_('nav.home'), href: '#home' },
    { name: $_('nav.about'), href: '#about' },
    { name: $_('nav.experience'), href: '#experience' },
    { name: $_('nav.skills'), href: '#skills' },
    { name: $_('nav.contact'), href: '#contact' }
  ];

  const toggleLanguage = () => {
    $locale = $locale === 'en' ? 'al' : 'en';
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      isMenuOpen = false;
    }
  };
</script>

<header class="fixed w-full bg-navy/90 backdrop-blur-sm z-50">
  <nav class="container py-4">
    <div class="flex items-center justify-between">
      <!-- Language Toggle - Far Left -->
      <div class="flex-none">
        <button 
          class="flex items-center gap-2 text-sm hover:text-gold transition-colors"
          on:click={toggleLanguage}
        >
          <Globe class="w-4 h-4" />
          <span>{$locale === 'al' ? 'AL' : 'EN'}</span>
        </button>
      </div>

      <!-- Logo - Center -->
      <div class="flex-1 flex justify-center">
        <a href="/" class="text-2xl font-bold text-gold flex items-center gap-2">
          JK
          <img src="/logo.svg" alt="JK Logo" class="w-8 h-8" />
        </a>
      </div>
      
      <!-- Navigation - Right -->
      <div class="flex-1 flex justify-end items-center gap-4">
        <button class="md:hidden" on:click={() => isMenuOpen = !isMenuOpen}>
          {#if isMenuOpen}
            <X class="w-6 h-6" />
          {:else}
            <Menu class="w-6 h-6" />
          {/if}
        </button>
        
        <ul class="hidden md:flex items-center gap-8">
          {#each navigation as item}
            <li>
              <a
                href={item.href}
                class="hover:text-gold transition-colors"
                on:click={(e) => handleScroll(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
    {#if isMenuOpen}
      <div class="md:hidden absolute inset-x-0 top-16 bg-navy/95 backdrop-blur-sm">
        <ul class="container py-4 flex flex-col gap-4">
          {#each navigation as item}
            <li>
              <a
                href={item.href}
                class="block hover:text-gold transition-colors"
                on:click={(e) => handleScroll(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="bg-charcoal mt-20">
  <div class="container py-8">
    <div class="flex flex-col md:flex-row justify-between items-center gap-4">
      <p>&copy; {new Date().getFullYear()} Jon Kola. All rights reserved.</p>
      <div class="flex gap-4">
        <a href="https://www.linkedin.com/in/jon-kola/" target="_blank" rel="noopener noreferrer" class="hover:text-gold">
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</footer>
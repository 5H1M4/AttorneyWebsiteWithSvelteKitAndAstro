<script>
  import { ArrowRight } from "lucide-svelte";
  import { _, json } from 'svelte-i18n';
  import { enhance } from '$app/forms';

  let formSuccess = false;
  let formError = false;

  const handleSubmit = () => {
    return async ({ result }) => {
      if (result.type === 'success') {
        formSuccess = true;
        formError = false;
      } else {
        formSuccess = false;
        formError = true;
      }
    };
  };
</script>

<div class="flex flex-col">
  <section id="home" class="min-h-screen flex items-center justify-center bg-navy relative">
    <div class="container grid md:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gold">
          {$_('home.title')}
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-offwhite/80">
          {$_('home.subtitle')}
        </p>
        <div class="flex flex-col md:flex-row gap-4">
          <a href="#about" class="btn btn-primary">
            {$_('home.cta.primary')}
            <ArrowRight class="ml-2 w-5 h-5" />
          </a>
          <a href="#contact" class="btn btn-secondary">
            {$_('home.cta.secondary')}
          </a>
        </div>
      </div>
      
      <!-- Profile Image -->
      <div class="hidden md:block">
        <img
        
          src="https://media.licdn.com/dms/image/v2/D4D22AQE38LTjEfu9qA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729598824837?e=1741219200&v=beta&t=8CC3nBubkr_v56AH0TiY86uFjdkPVacd7qNUiQavlkQ"
          alt="Jon Kola"
          class="rounded-lg shadow-2xl object-cover w-full aspect-[3/4] max-w-md mx-auto"
        />
      </div>
    </div>
  </section>

  <section id="about" class="py-20 bg-charcoal">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQGov8qjweqh4g/feedshare-shrink_1280/feedshare-shrink_1280/0/1728134793054?e=1741219200&v=beta&t=_a5aei2zOZ2hl1REoRQkbckZ0SE3-SVegdmdPaSDYkY"
            alt="Jon Kola"
            class="rounded-lg shadow-xl object-cover aspect-[4/3]"
          />
        </div>
        <div>
          <h2 class="text-4xl font-bold mb-6">{$_('about.title')}</h2>
          <p class="text-lg mb-6 text-offwhite/80">
            {$_('about.paragraph1')}
          </p>
          <div class="space-y-4 text-offwhite/80">
            <p>{$_('about.paragraph2')}</p>
            <p>{$_('about.paragraph3')}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="experience" class="py-20">
    <div class="container">
      <h2 class="text-4xl font-bold text-center mb-12">{$_('experience.title')}</h2>
      <div class="grid gap-8">
        {#each Object.entries($json('experience.positions')) as [key, position]}
          <div class="bg-charcoal rounded-lg p-8 hover:shadow-xl transition-shadow">
            <div class="flex flex-col md:flex-row gap-6 items-start">
            
              

              
              
              <!-- commented and removed the small pictures in the expertise section
              <img
                src={`https://source.unsplash.com/random/200x200?${key}`}
                alt={position.org}
                class="w-24 h-24 object-cover rounded"
              />-->

              <div>
                <h3 class="text-xl font-bold text-gold">{position.title}</h3>
                <p class="text-emerald mb-2">{position.org}</p>
                <p class="text-offwhite/80">{position.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="skills" class="py-20 bg-charcoal">
    <div class="container">
      <h2 class="text-4xl font-bold text-center mb-12">{$_('skills.title')}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each Object.entries($json('skills.categories')) as [key, category]}
          <div class="bg-navy rounded-lg p-8 hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold text-gold mb-4">{category.title}</h3>
            <ul class="space-y-2 text-offwhite/80">
              {#each category.items as item}
                <li>• {item}</li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="contact" class="py-20">
    <div class="container">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12">{$_('contact.title')}</h2>
        
        <form 
          method="POST" 
          class="space-y-6"
          use:enhance={handleSubmit}
        >
          {#if formSuccess}
            <div class="bg-emerald/20 text-emerald border border-emerald/20 rounded-lg p-4 mb-6">
              {$_('contact.success')}
            </div>
          {/if}

          {#if formError}
            <div class="bg-red-500/20 text-red-500 border border-red-500/20 rounded-lg p-4 mb-6">
              {$_('contact.error')}
            </div>
          {/if}

          <div>
            <label for="name" class="block text-sm font-medium mb-2">{$_('contact.form.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium mb-2">{$_('contact.form.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium mb-2">{$_('contact.form.message')}</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary w-full">
            {$_('contact.form.submit')}
          </button>
        </form>
      </div>
    </div>
  </section>
</div>
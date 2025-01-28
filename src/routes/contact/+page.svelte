<script>
  import { Mail, Phone, MapPin, Linkedin } from "lucide-svelte";
</script>

<svelte:head>
  <title>Contact - Jon Kola</title>
</svelte:head>

<section class="py-20">
  <div class="container">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12">Get in Touch</h1>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div>
            <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
            <div class="space-y-4">
              <a href="mailto:contact@jonkola.com" class="flex items-center gap-3 text-offwhite/80 hover:text-gold">
                <Mail class="w-5 h-5" />
                <span>contact@jonkola.com</span>
              </a>
              <a href="tel:+355123456789" class="flex items-center gap-3 text-offwhite/80 hover:text-gold">
                <Phone class="w-5 h-5" />
                <span>+355 123 456 789</span>
              </a>
              <div class="flex items-center gap-3 text-offwhite/80">
                <MapPin class="w-5 h-5" />
                <span>Tirana, Albania</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/jon-kola/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-offwhite/80 hover:text-gold"
              >
                <Linkedin class="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows="4"
              class="w-full px-4 py-2 bg-charcoal border border-gold/20 rounded-lg focus:outline-none focus:border-gold"
            ></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
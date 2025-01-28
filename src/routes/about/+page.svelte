<script>
  import { ArrowRight } from "lucide-svelte";
</script>

<svelte:head>
  <title>About - Jon Kola</title>
</svelte:head>

<section class="py-20">
  <div class="container">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <img
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&q=80&w=1000"
          alt="Jon Kola"
          class="rounded-lg shadow-xl"
        />
      </div>
      <div>
        <h1 class="text-4xl font-bold mb-6">About Jon Kola</h1>
        <p class="text-lg mb-6 text-offwhite/80">
          As a dedicated law student with a focus on International Law, Human Rights, and Political Sciences, I am passionate about creating positive change through diplomacy and advocacy.
        </p>
        <div class="space-y-4 text-offwhite/80">
          <p>
            My journey in international relations and policy development has been shaped by various roles, from representing youth interests at the Council of Europe to contributing to OSCE initiatives.
          </p>
          <p>
            I believe in the power of youth engagement and education to build stronger, more inclusive societies. Through my work with various organizations, I strive to bridge gaps between policy makers and young people.
          </p>
        </div>
        <div class="mt-8">
          <a href="/experience" class="btn btn-primary">
            View Experience <ArrowRight class="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
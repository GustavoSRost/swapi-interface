<template>
  <main class="container" id="home">
    <section class="grid">
      <div class="content-text">
        <h1>Discover the Epic World of Star Wars</h1>
        <p>
          Welcome to the world of Star Wars, where the galaxy is in constant conflict
          between good and evil. Explore the vast universe of Star Wars, from the classic
          films to the latest adventures. Meet the Jedi and the Sith, learn about the
          Force, and discover the secrets of distant galaxies. Join us on an epic journey
          to a galaxy far, far away. May the Force be with you!
        </p>
        <button key="button" disabled="disabled">
          <a href="sobre">See more</a>
        </button>
      </div>
    </section>

    <section id="video-section" class="grid">
      <iframe
        width="100%"
        height="400px"
        src="https://www.youtube.com/embed/sGbxmsDFVnE?autoplay=1&mute=1&controls=0&loop=1&playlist=sGbxmsDFVnE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div>
        <h2>The Force Awakens</h2>
        <p>
          In 2015, the highly anticipated seventh installment of the Star Wars saga, "The
          Force Awakens," was released. Set thirty years after the events of "Return of
          the Jedi," the film follows a new generation of heroes, including scavenger Rey
          and stormtrooper Finn, as they team up with classic characters like Han Solo and
          Chewbacca to fight against the evil First Order and uncover the mystery of Luke
          Skywalker's disappearance. "The Force Awakens" received critical and commercial
          success, bringing back the beloved franchise with new energy and excitement.
        </p>
      </div>
    </section>
    <section id="about">
      <h2>About</h2>
      <p>
        The Star Wars saga is a series of epic space fantasy films created by filmmaker
        George Lucas. It began with the release of "Star Wars" (later retitled "A New
        Hope") in 1977 and has since expanded into a multi-billion dollar franchise that
        includes films, television shows, books, comics, and more.
      </p>
      <p>
        The saga is set in a fictional galaxy far, far away and follows the struggle
        between the heroic Rebel Alliance and the evil Galactic Empire. Along the way, we
        are introduced to iconic characters such as Luke Skywalker, Princess Leia, Han
        Solo, Darth Vader, and many more. The films are known for their groundbreaking
        special effects, sweeping orchestral score, and engaging storytelling.
      </p>
      <p>
        The Star Wars saga has captured the hearts and imaginations of generations of
        fans, with its themes of hope, redemption, and the power of the human spirit
        resonating with audiences around the world. It has become a cultural touchstone
        and continues to inspire new generations of storytellers and creatives.
      </p>
    </section>
  </main>
</template>

<script>
export default {
  components: "",
  name: "HomeView",
  methods: {
    addBodyClass() {
      document.body.classList.add("home");
    },
  },
};
</script>

<style></style>

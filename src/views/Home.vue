<template>
  <main class="container" id="home">
    <section class="grid">
      <div class="content-text">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti
          assumenda commodi quaerat molestiae cumque doloremque beatae vitae, rerum fugiat
          itaque iure eaque dolor praesentium. Dolor ipsam blanditiis sunt fuga.
        </p>
        <button key="button" :class="dark ? btnDarkMode : btn - light">
          <a :href="sobre">See more</a>
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
        <h2>Video</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe, molestias
          nihil numquam minus eveniet, deserunt dolore illo pariatur incidunt odit sed
          enim iusto possimus iure recusandae voluptate officia dignissimos?
        </p>
      </div>
    </section>
    <section id="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fugit culpa
        praesentium nulla! Repudiandae, labore voluptate laudantium fugiat ipsa debitis
        sapiente cupiditate, illum veniam, facere cum placeat hic magnam eligendi! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Mollitia et quam iste
        asperiores fugit neque repellendus molestiae laborum nobis pariatur, quae commodi
        sapiente consequatur adipisci distinctio sint magni dignissimos aut? Lorem ipsum
        dolor
      </p>
    </section>
  </main>
</template>

<script>
export default {
  components: "",
  name: "HomeView",
};
</script>

<style></style>

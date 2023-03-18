<template>
  <div className="404-page">
    <h1>Oops!</h1>
    <div>
      <h3>It seems we can't locate that page.</h3>
      <p>Let's go back to safety</p>
      <router-link className="link active" to="/">"Home"</router-link>
      <p>and try from there.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "404Page",
};
</script>

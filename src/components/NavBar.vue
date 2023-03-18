<template>
  <div className="nav">
    <router-link className="link" exact-active-class="active" to="/"
      >Home</router-link
    >
    <router-link className="link" exact-active-class="active" to="/counter"
      >Counter</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
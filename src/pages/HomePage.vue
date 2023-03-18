<template>
  <NavBar />
  <section>
    <div className="info">
      <h3>This is an exam for fullfillment of Altschool Africa Sem 3.</h3>
      <p>
        This App is a Vue application using the cli. That has a counter
        composable with increment, decrement, reset, setValue functions. The app
        uses vuex for state management. The functionality is housed in a page
        with route - ‘/counter’ any other route redirects the user to a 404
        page.
      </p>
      <p>Prepared by Moses S Musoki - FrontEnd Student</p>
    </div>
  </section>
</template>

<script>
import { NavBar } from "../components";
export default {
  name: "HomePage",
  components: {
    NavBar,
  },
};
</script>
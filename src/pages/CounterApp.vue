<template>
  <NavBar />
  <section>
    <h1 className="title">Altschool Counter App</h1>
    <div className="info">
      <p>
        Play in my counter sandbox. Increment, Decrement, Set Values and Reset
        values as you wish.
      </p>
    </div>
    <div className="count">Count: {{ count }}</div>
    <div className="card">
      <div>
        <input class="input-field" type="number" v-model="value" />
        <input
          class="submit"
          type="submit"
          @click="setValue(value)"
          value="Set Value"
        />
      </div>
      <button className="button" @click="increment">+</button>
      <button className="button" @click="decrement">-</button>
      <button className="reset" @click="reset">Reset</button>
    </div>
  </section>
</template>

<script>
import useCounter from "@/composables/counter";
import { NavBar } from "../components";

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();

    return {
      count,
      increment,
      decrement,
      reset,
      setValue,
      value: 0,
    };
  },
  components: {
    NavBar
  },
};
</script>
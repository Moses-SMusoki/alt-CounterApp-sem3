import { computed } from "vue";
import { useStore } from "vuex";

export default function useCounter() {
  const countStore = useStore();

  const count = computed(() => countStore.state.count);

  const increment = () => {
    countStore.commit("increment");
  };

  const decrement = () => {
    countStore.commit("decrement");
  };

  const reset = () => {
    countStore.commit("reset");
  };

  const setValue = (value) => {
    countStore.commit("setValue", value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  };
}

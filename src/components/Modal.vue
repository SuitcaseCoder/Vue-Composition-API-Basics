<template>
  <teleport to=".modals-container">
    <div 
      v-if="modelValue"
      class="modal"
    >
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
      <div>
        username is: {{ userData.username }}
      </div>
    </div>
  </teleport>
</template>

<script setup>
/* imports */
import { inject } from 'vue'

/* props */

// we don't have to import `defineProps()` it's just available
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "No title specified",
  }
});

/* emits - this helps us change information 'upward' from child to parent*/
const emit = defineEmits(["update:modelValue"]);

/* handle button click */
// const handleButtonclick = () => {
//   emit('update:modelValue', false);
// };

/* userData */
// this is where we pass in the placeholder name from the 'provide' method in APP.vue. this allows us to hold data at the most parent level and pass info down to grandchildren without having to pass props to all the parents in between
const userData = inject('userData')

</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
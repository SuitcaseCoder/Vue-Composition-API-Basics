<template>
  <teleport to=".modals-container">
    <div 
      v-if="modelValue"
      class="modal-dark"
    >
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide Modal</button>
    </div>
  </teleport>
</template>

<script setup>
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
  },
});

/* emits - this helps us change information 'upward' from child to parent*/
const emit = defineEmits(["update:modelValue"]);

/* handle button click */
// const handleButtonclick = () => {
//   emit('update:modelValue', false);
// };
</script>

<style>
.modal-dark {
  background: #333;
  color: white;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
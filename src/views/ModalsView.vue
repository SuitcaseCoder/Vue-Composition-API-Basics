<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <teleport to=".modals-container">
      <div v-if="showModal" class="modal">
        <h1>This is a model</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cum
          laboriosam mollitia sunt ad facere officia soluta ex ipsam nulla sed,
          recusandae esse, labore odio. Exercitationem, neque! Ipsam, pariatur
          voluptatem?
        </p>
        <button @click="showModal = false">Hide Modal</button>
      </div>
    </teleport>
  </div>
</template>

<script setup>
/* imports */
import { ref } from "vue";

/* modals */

const showModal = ref(false);
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
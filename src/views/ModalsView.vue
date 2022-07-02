<template>
  <div class="modals">
    <h1>Modals</h1>
    <div>
      <label for="">
        Show dark modals?
        <input v-model="showDarkModals" type="checkbox" />
      </label>
    </div>
    <button @click="showModal = true">Show modal</button>
    <component
      v-model="showModal"
      :is="showDarkModals ? ModalDark : Modal"
      title="My modal title via prop"
    >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cum
        laboriosam mollitia sunt ad facere officia soluta ex ipsam nulla sed,
        recusandae esse, labore odio. Exercitationem, neque! Ipsam, pariatur
        voluptatem?
      </p>
    </component>
  </div>
</template>

<script setup>
/* imports */
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import ModalDark from "@/components/ModalDark.vue";

/* modals */

const showDarkModals = ref(false);
const showModal = ref(false);
</script>


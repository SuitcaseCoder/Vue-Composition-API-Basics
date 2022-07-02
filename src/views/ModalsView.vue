<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal 
      v-if="showModal"
      title="My modal title via prop"
    >
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam cum
        laboriosam mollitia sunt ad facere officia soluta ex ipsam nulla sed,
        recusandae esse, labore odio. Exercitationem, neque! Ipsam, pariatur
        voluptatem?
      </p>
    </Modal>
  </div>
</template>

<script setup>
/* imports */
import { ref } from "vue"
import Modal from '@/components/Modal.vue'

/* modals */
const showModal = ref(false);

</script>


<template>
  <div class="home">
    <h2>{{ appTitle }}</h2>

    <h3> {{ counterData.title }}:  </h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<script setup>

/*
IMPORTS 
*/

import { reactive, computed, watch, onMounted } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
/*
  APP TITLE
*/

  const appTitle = 'My Amazing Counter App'

    onMounted(()=>{
      console.log("do stuff related to App title")
    })
    // const counter = ref(0)
    // const counterTitle = ref('My Counter')


/*
  COUNTER
*/
    const counterData = reactive({
      count: 0, 
      title: 'My Counter'
    })

    watch(() => counterData.count, (newCount, oldCount)=>{
      console.log('newCount: ', newCount )
      console.log('oldCount: ', oldCount )

      if( newCount === 20){
        alert('Way to go loser! you made it to 20')
      }
    } )

    const oddOrEven = computed(() => {
      if (counterData.count % 2 === 0){
        return 'even'
      } else { 
        return 'odd' 
        }
    })

    const increaseCounter = (amount, e) => {
      counterData.count += amount
    }

    const decreaseCounter = (amount) => {
      counterData.count -= amount
    }

    onMounted(()=>{
      console.log("do stuff related to counter")
    })


    // onBeforeUpdate(() => {
    //   console.log("onBeforeUpdate")
    // })

    // onUpdated(() => {
    //   console.log("onUpdated")
    // })




// // lifecycle hooks
//     onBeforeMount(() => {
//       console.log("onBeforeMount");
//     })

//     onMounted(() => {
//       console.log("onMounted");
//     })

//     onBeforeUnmount(() => {
//       console.log("onBeforeUnmount");
//     })

//     onUnmounted(() => {
//       console.log("onUnmounted");
//     })

//     onActivated(() => {
//       console.log("onActivated");
//     })

//     onDeactivated(() => {
//       console.log("onDeactivated");
//     })

</script>

<!--
<script>
import { ref } from 'vue'

export default {
  setup(){
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }

    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter, 
      increaseCounter, 
      decreaseCounter
    }
  }
}
</script>
-->

<!--
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter(){
      this.counter++;
    }, 
    decreaseCounter(){
      this.counter--;
    }
  }
};
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px;
}
</style>

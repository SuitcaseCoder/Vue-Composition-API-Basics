import { reactive, computed, watch, onMounted, nextTick } from 'vue'

const counterData = reactive({
    count: 0, 
    title: 'My Counter'
  })
  
export function useCounter(){
    /* counter */

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

// can do with or without the async/await
  const increaseCounter = async (amount, e) => {
    counterData.count += amount

    await nextTick(() => {
      console.log("do something when counter has updated on dom")
    })
  }

  const decreaseCounter = (amount) => {
    counterData.count -= amount
  }

  onMounted(()=>{
    console.log("do stuff related to counter")
  })

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter
  }
}
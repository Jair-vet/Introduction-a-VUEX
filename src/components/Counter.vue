<template>
  <h1>Counter usando VUEX</h1>
  <h2>Direct access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment"> +1</button>
  <button @click="incrementBy"> +5</button>
  <button @click="randomInt" :disabled="isLoading"> random</button>

  <h1>MapState</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>

  <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from "vuex";
// mapState => Trae los datos del State
// mapActions => Realiza Acciones Async

export default {

    // computed: mapState(['count'])
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState( 'counter',  ['count', 'lastMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.count,  state.counter.count,
        //     lastMutation: state => state.lastMutation
        // })
    },

    methods: {
        increment(){
            this.$store.commit('counter/increment')
        },
        incrementBy(){
            this.$store.commit('counter/incrementBy', 5)
        },
        // ...mapActions( 'counter', ['incrementRandomInt'])
        ...mapActions( 'counter', {
            randomInt: 'incrementRandomInt'
        }),

        // Manda a llamar algo del Store
        // incrementRandomInt(){
        //     this.$store.dispatch( 'incrementRandomInt' )
        // },
    },



}
</script>


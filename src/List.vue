<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input type="text" v-model="filterText">
        <ul>
            <li v-for="item in filteredFruits">{{  item }}</li>
        </ul>
    </div>
</template>


<script>
    import { fruitMixin } from './fruitMixin';
    export default {
        mixins: [fruitMixin],
        created(){
            console.log('inside list created hook');
        }
    }
</script>
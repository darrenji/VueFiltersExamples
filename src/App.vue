<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <input type="text" v-model="filterText"> <button @click="fruits.push('Berries')">Add New Item</button>
                <ul>
                    <li v-for="item in filteredFruits">{{  item }}</li>
                </ul>
                <hr>
                <app-list></app-list>
                
                <hr>
                <p>{{ 'Some Text' | reverse}}</p>
                <hr>
                <p>{{ 'Test' | calculateLength}}</p>
                <hr>
                <p>{{ reversed }}</p>
                <p>{{ calculateLength }}</p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import { fruitMixin } from './fruitMixin';
    import { lengthAwareMixin } from './lengthAwareMixin';
    export default {
        mixins: [fruitMixin,lengthAwareMixin],
        data(){
            return {
                text: 'hello',
                firstText: 'Some Text',
                secondText: 'Darren'
            }
        },
        filters: {
            toUppercase(value){
                return value.toUpperCase();
            },
            reverse(value){
                return value.split("").reverse().join("");
            }
        },
        components: {
            appList: List
        },
        computed: {
            reversed(){
                return this.firstText.split("").reverse().join("");
            }
        }
        
    }
</script>

<style>

</style>

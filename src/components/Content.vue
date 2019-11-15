<!-- Content Template -->
<template>
    <div class="content">
        <!-- Picture List Component -->
        <pictures-list v-bind:pictures="pictures"> </pictures-list>
        <!-- Pagination Component -->
        <div class="content__down">
            <v-pagination v-model="currentPage" :page-count="30" class="content__down__pagination"></v-pagination>
             <!-- Select Picture Per Page -->
            <div class="content__down__select">Pictures per page: 
                <div class="selectpic">
                    <select name="limit" @change="onChange" class="selectpic__s">
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                        <option value="90">90</option>
                        <option value="100">100</option>
                    </select>
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
    //Imported Components
    import vPagination from 'vue-plain-pagination'
    import List from './List';
    import axios from "axios";
    export default {
        components: { 
            vPagination, 
            'pictures-list': List
        },
        data(){
            return {
                pictures: [],  currentPage: 1, limitRows: 30
            }
        }, 
        mounted() {

            // Fetch initial results
            this.getPicturesList(); 

        }, 
        computed: {

             // Get Current Page
            getFullPath () {
                return this.currentPage
            },
            // Get Limit Rows
            getLimitCurrent(){
                return this.limitRows
            }

        }, 
        watch: {
            
            //Get Pictures List 
            getFullPath () {
                this.getPicturesList()
            },
            //Get Pictures List 
            getLimitCurrent(){
                this.getPicturesList();
            }

        }, 
        methods: {
            //Get Picture List from the Picsum Api
            getPicturesList(){  
                const url = 'https://picsum.photos/v2/list?page='+this.currentPage+'&limit='+this.limitRows+'';
                axios.get(url)
                .then(response => {
                    this.pictures = response
                })
                .catch ( e=> console.log(e))
            }, onChange(event) {
                this.limitRows = event.target.value;
            }

        }
    }
</script> 
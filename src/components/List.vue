<!-- List Picture Template -->
<template>
    <div class="container">
         <!-- Search Filter Component -->
         <div class="container__search">
             <div class="container__search__box">
                <span class="title__search">PicSum <b>Api</b></span>
                <p class="text__search">
                    Welcome, you can search all kind of pictures on this web site from our Picsum API
                </p>
                <input type="text" placeholder="Search..." v-model="authorNameSearchString" class="input__search"/>
             </div>
           
        </div>
        <!-- Picture List -->
        <div class="container__list">
             <a v-for="pic in filteredList" :key="pic.id" class="container__picture" :href="pic.url" target="_blank">
                <span class="info__id">{{pic.id}}</span>
                <img :src="pic.download_url" :height="pic.heigth" alt="">   
                <div class="info__picture">{{pic.author}}</div>
            </a>
        </div>
        <!-- Modal -->
        <modal-picture name="modal-item" v-bind:item="item"></modal-picture>
    </div>

    
</template>

<script>
    import Picture from './Picture';

    export default {
        name: 'List',
        props: ['pictures'],
        components: {  
            'modal-picture': Picture
        },
        data(){
            return {
               authorNameSearchString: '', item: { }
            }
        },
        mounted() {
            
        },
        methods: {
            show (url) {
                //Show Modal
                this.item=url;
                this.$modal.show('modal-item');
            },
            hide () {
                //Hide Modal
                this.$modal.hide('modal-item');
            }
        },
        computed: {
            //Filter list by Author's Name
            filteredList: function () {
                let pic = this.pictures.data;
                let authorNameSearchString = this.authorNameSearchString;
                if(!authorNameSearchString){
                    return pic;
                }
                //ToLowerCase Function
                authorNameSearchString = authorNameSearchString.trim().toLowerCase();
                //Filter function
                pic = pic.filter(function(item){
                    if(item.author.toLowerCase().indexOf(authorNameSearchString) !== -1){
                        return item;
                    }
                })
                return pic;
            }
        }
    }
</script> 
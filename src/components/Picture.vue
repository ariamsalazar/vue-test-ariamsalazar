<template>
  <!-- Picture Modal -->
  <modal name="modal-item" class="modal__picture">
      <div>
        {{item.url}}
        <iframe :src="item.url" type="application/pdf" width="100%" 
            height="350" frameborder="0" style="position:relative;z 
            index:999" ref="frame" @load="load" v-show="iframe.loaded">
        </iframe>

      </div>
  </modal>
</template>

<script>
    export default {
        name: 'List',
        props: ['item'],
       
        data(){
           return {
                iframe: {
                src: this.item.url,
                loaded: false
                }
            }
        },
        methods: {
            load: function(){
                this.iframe.loaded = true;
            }
        }
    }
</script> 

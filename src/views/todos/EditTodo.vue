<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">{{title}}</h1>

   <div class="form-group">
        <label class="form-label" for="action-item">Action</label>
        <input class="form-input" v-model="editItem.action" type="text" id="action-item">
        <label class="form-label" for="action-item">Priority</label>
        <input class="form-input" v-model="editItem.priority" type="text" id="priority-item">
        <label class="form-label" for="action-item">Complexity</label>
        <input class="form-input" v-model="editItem.complexity" type="text" id="complexity-item">
        <button @click="saveItem" class="btn btn-primary">Update</button>
        <button @click="closeItem" class="btn btn-primary">Close</button>
    </div>
  </div>
 </div>
</template>
<script>
 export default{
    created() {
       this.editItem.id = this.$route.params.item.id;
       this.editItem.action = this.$route.params.item.action;
       this.editItem.priority = this.$route.params.item.priority;
       this.editItem.complexity = this.$route.params.item.complexity;
     },
  name: 'details',
  data() {
   return{
    title: 'Edit item',
    editItem: {
        id: '',
        action: '',
        priority: '',
        complexity: '',
      },
   };
  },
   methods: {
    saveItem() {
        this.$store.dispatch('myTasks/set', this.editItem);

        this.$router.push({name: 'todo'});
      },
      closeItem() {
        this.$router.push({name: 'todo'});

      },
   },
 };
</script>

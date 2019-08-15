<template>
 <div class="details">
  <div class="container">
   <h1 class="text-primary text-center">{{title}}</h1>

   <div class="form-group">
        <label class="form-label" for="action-item">Action</label>
        <input class="form-input" v-model="newItem.action" type="text" id="action-item">
        <label class="form-label" for="action-item">Priority</label>
        <input class="form-input" v-model="newItem.priority" type="text" id="priority-item">
        <label class="form-label" for="action-item">Complexity</label>
        <input class="form-input" v-model="newItem.complexity" type="text" id="complexity-item">
        <button @click="saveItem" class="btn btn-primary">Create</button>
        <button @click="closeItem" class="btn btn-primary">Close</button>
    </div>
  </div>
 </div>
</template>
<script>
 export default{

  name: 'details',
  data() {
   return{
    title: 'New item',
    newItem: {
        id: '',
        action: '',
        priority: '',
        complexity: '',
      },
   };
  },
   methods: {
    saveItem() {
        this.$store.dispatch('myTasks/set', this.newItem);

        this.$router.push({name: 'todo'});
      },
      closeItem() {
        this.$router.push({name: 'todo'});

      },
   },
 };
</script>

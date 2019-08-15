<template>
<div class="container text-left">

    <h2>Action Items</h2>

<button class="btn btn-primary" @click="newItem">New Task</button>

  <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th>Action</th>
      <th>Priority</th>
      <th>Complexity</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="task in this.mytasks">
        <td>{{ task.action }}</td>
        <td>{{ task.priority }}</td>
        <td>{{ task.complexity }}</td>
        <td> <i class="icon icon-1x icon-edit" @click="editItem(task)" ></i>
            <i class="icon icon-1x icon-delete" @click="deleteItem(task.id)"></i></td>
      </tr>
  </tbody>
</table>
</div>
</template>

<script lang="ts">
export interface TodoRecord {
    id: string;
    action: string;
    priority: string;
    complexity: string;
}

export function DocToTodoRecordMap(doc: any): TodoRecord {
    // var rowData = doc.data();
    const record = {
        id: doc.id,
        action: doc.action,
        priority: doc.priority,
        complexity: doc.complexity,
    };

    return record;
}




import Vue from 'vue';



export default Vue.extend({
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Task',
          align: 'left',
          sortable: true,
          value: 'action',
        },
        { text: 'Priority', value: 'priority' },
        { text: 'Complexity', value: 'complexity' },
        { text: 'Actions', value: 'myaction', sortable: false },
      ],
      editedItem: {
        id: '',
        action: '',
        priority: 0,
        complexity: '',
      },
      defaultItem: {
        id: '',
        action: 'dummy',
        priority: 1,
        complexity: 'easy',
      },
    }),
      computed: {
      formTitle(): string {

        return this.editedItem.id === '' ? 'New Item' : 'Edit Item';
      },
        mytasks(): any {

          const parsedObj = JSON.parse(JSON.stringify(this.$store.state.myTasks.data));
          // tslint:disable-next-line:no-console
          console.log('parsedOb---->', parsedObj, '----', typeof parsedObj);
          const result = [];

          for (const i in parsedObj) {
              if (i) {
              const rec = DocToTodoRecordMap (parsedObj[i]);
              console.log('rec---->', i, '=======', rec);
              result.push(rec);
              }
            }
          return result;
      },
    },

    created() {

      this.$store.dispatch('myTasks/openDBChannel').catch(console.error);
    },
     methods: {
      newItem() {
        this.$router.push({name: 'newTodo' } );
      },
      editItem(item: any) {


        // this.$router.push({name: 'edit', params: {id: item.id} } )
        this.$router.push({name: 'edit', params: {item: item }} );

        // this.editedItem = Object.assign({}, item);
        // this.dialog = true;
      },

      deleteItem(item: string) {
        if (confirm('Are you sure you want to delete this item?')) {
          this.$store.dispatch('myTasks/delete', item);
        }
      },

      close() {
        this.dialog = false;
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
        }, 300);
      },

      save() {
        this.$store.dispatch('myTasks/set', this.editedItem);
        this.close();
      },
    },

});
</script>

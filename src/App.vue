<template>
  <header class="mb-8 bg-slate-300">
    <h1 class="text-4xl py-4 text-center">People</h1>
  </header>
  <ap-table
    :columns="columns"
    :rows="formattedPeople"
  />
  <main class="container mx-auto">
    <add-person-form
      @add-person="addPerson"
    />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { cloneDeep } from 'lodash';
import ApTable from './components/ApTable.vue'
import AddPersonForm from './components/AddPersonForm.vue'
import { Columns, People } from './types/People';

const DATA_COLUMNS: Array<Columns> = [
  { key: 'name', label: 'Name' },
  { key: 'amount', label: 'Amount' },
];

const DATA_ROWS: Array<People> = [
  { id: 1, name: 'John', amount: 240 },
  { id: 2, name: 'Stuard', amount: 239 },
  { id: 3, name: 'Robert', amount: 167 },
  { id: 4, name: 'Kevin', amount: 333 },
];

export default defineComponent({
  name: 'App',
  components: {
    ApTable,
    AddPersonForm,
  },
  data() {
    return {
      columns: cloneDeep(DATA_COLUMNS),
      people: cloneDeep(DATA_ROWS),
    }
  },
  computed: {
    formattedPeople() {
      return this.people.map((person: People) => {
        return {
          ...person,
          amount: new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(person.amount),
        }
      })
    },
  },
  methods: {
    addPerson(person: People) {
      this.people.push(person);
    },
  },
})
</script>

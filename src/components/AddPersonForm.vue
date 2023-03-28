<template>
  <div class="container mx-auto p-6">
    <h1 class="text-4xl py-4 text-center">Add Person</h1>
    <form
      class="flex flex-col"
      @submit.prevent="onSubmit"
    >
      <label
        for="name"
        class="block mb-4 text-sm font-medium text-gray-900"
      >
        Name
        <input
          v-model="name"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <label
        for="amount"
        class="block mb-6 text-sm font-medium text-gray-900"
      >
        Amount
        <input
          v-model="amount"
          class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </label>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { uniqueId } from 'lodash';

export default defineComponent({
  name: 'add-person-form',
  data() {
    return {
      name: '',
      amount: '',
    }
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.amount) {
        alert('Please fill in all fields');
        return;
      }

      if (isNaN(Number(this.amount))) {
        alert('Please enter a valid number');
        return;
      }

      this.$emit('addPerson', {
        id: uniqueId(),
        name: this.name,
        amount: this.amount,
      });
      this.name = '';
      this.amount = '';
    },
  },
});
</script>
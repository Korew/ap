<template>
  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th
          v-for="col in columns"
          :key="col.key"
          class="px-6 py-3"
        >
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in rows"
        :key="row.id"
        class="bg-white border-b"
      >
        <td
          v-for="col in columns"
          class="px-6 py-4"
          :key="col.key"
        >
          {{ col.formatter ? col.formatter(row[col.key]) : row[col.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Columns, People } from '@/types/People';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ap-table',
  props: {
    columns: {
      type: Array as PropType<Array<Columns>>,
      required: true,
    },
    rows: {
      type: Array as PropType<Array<People>>,
      required: true,
    },
  },
  methods: {
    formatAmount(amount: number) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    },
  },
})
</script>

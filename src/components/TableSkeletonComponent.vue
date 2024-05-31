<template>
  <div class="overflow-auto">
    <table
      class="w-full border-separate border-spacing-y-0.5 border-t border-gray-900"
    >
      <thead class="text-gray-800">
        <tr>
          <th class="px-4 py-4">{{ $t('transaction_hash') }}</th>
          <th class="p-3">{{ $t('status') }}</th>
          <th class="p-3">{{ $t('block') }}</th>
          <th class="p-3">{{ $t('date_time_utc') }}</th>
          <th class="p-3">{{ $t('from') }}</th>
          <th class="p-3">{{ $t('to') }}</th>
          <th class="p-3">{{ $t('value') }}</th>
          <th class="p-3">{{ $t('gas_price') }}</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr
          class="bg-gray-900 cursor-pointer hover:bg-hover-gray bg-gradient-x animate-gradient-x"
          v-for="n in 15"
          :key="n"
        >
          <td class="p-6 whitespace-nowrap" />
          <td class="p-6 whitespace-nowrap" />
          <td class="p-6 whitespace-nowrap" />
          <td class="p-6 whitespace-nowrap" />
          <td class="p-6 whitespace-nowrap" />
          <td class="p-6 whitespace-nowrap" />
          <td class="p-6 whitespace-nowrap" />
          <td class="p-6 whitespace-nowrap" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

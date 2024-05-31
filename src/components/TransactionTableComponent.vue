<script setup lang="ts">
interface Transaction {
  transactionHash: string;
  status: string;
  block: number;
  timestamp: string;
  from: string;
  to: string;
  value: string;
  coin: string;
  transactionFee: string;
  gasPrice: string;
}

const props = defineProps<{ transactions: Transaction[] }>();

const shortenString = (str: string, front: number, back: number) => {
  if (str.length <= front + back) return str;

  return `${str.slice(0, front)}...${str.slice(-back)}`;
};

const formatNumber = (value: number, decimals: number = 2) =>
  value.toFixed(decimals);
</script>

<template>
  <div class="overflow-auto">
    <table
      class="w-full border-separate border-spacing-y-0.5 border-t border-gray-900"
    >
      <thead class="text-gray-800">
        <tr>
          <th class="px-4 py-4 tracking-wide text-center whitespace-nowrap">
            {{ $t('transaction_hash') }}
          </th>
          <th class="p-3 tracking-wide text-center whitespace-nowrap">
            {{ $t('status') }}
          </th>
          <th class="p-3 tracking-wide text-center whitespace-nowrap">
            {{ $t('block') }}
          </th>
          <th class="p-3 tracking-wide text-center whitespace-nowrap">
            {{ $t('date_time_utc') }}
          </th>
          <th class="p-3 tracking-wide text-center whitespace-nowrap">
            {{ $t('from') }}
          </th>
          <th class="p-3 tracking-wide text-center whitespace-nowrap">
            {{ $t('to') }}
          </th>
          <th class="p-3 tracking-wide text-center whitespace-nowrap">
            {{ $t('value') }}
          </th>
          <th class="p-3 tracking-wide text-center whitespace-nowrap">
            {{ $t('gas_price') }}
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr
          class="bg-gray-900 cursor-pointer hover:bg-hover-gray"
          v-for="transaction in props.transactions"
          :key="transaction.transactionHash"
        >
          <td class="p-3.5 whitespace-nowrap text-center text-white">
            {{ shortenString(transaction.transactionHash, 6, 3) }}
          </td>
          <td class="p-3.5 whitespace-nowrap text-center">
            <span
              :class="{
                'p-1.5 text-xs font-medium uppercase tracking-wide text-green-500 bg-green-900 bg-opacity-20':
                  transaction.status.toLowerCase() == 'success',
                'p-1.5 text-xs font-medium uppercase tracking-wide text-red-500 bg-red-900 bg-opacity-20':
                  transaction.status.toLowerCase() == 'failed',
              }"
              >{{ transaction.status }}</span
            >
          </td>
          <td class="p-3.5 whitespace-nowrap text-center text-gray-800">
            {{ transaction.block }}
          </td>
          <td class="p-3.5 whitespace-nowrap text-center text-gray-800">
            {{ transaction.timestamp }}
          </td>
          <td class="p-3.5 whitespace-nowrap text-center text-white">
            {{ shortenString(transaction.from, 6, 3) }}
          </td>
          <td class="p-3.5 whitespace-nowrap text-center text-white">
            {{ shortenString(transaction.to, 6, 3) }}
          </td>
          <td class="p-3.5 whitespace-nowrap text-center text-gray-800">
            {{
              `${formatNumber(Number(transaction.value))} ${transaction.coin}`
            }}
          </td>
          <td class="p-3.5 whitespace-nowrap text-center text-gray-800">
            {{ `${formatNumber(Number(transaction.gasPrice))} GWEI` }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

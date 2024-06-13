<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
        :footer-props="footerProps"
        :hide-default-header="tooltipHeader"
      >
        <template v-if="tooltipHeader" v-slot:header="{ props }">
          <th v-for="(head, index) in props.headers" :key="index" class="text-left pa-3">
            {{ head.text }}
            <Tooltip
              v-if="head.descricao"
              :texto="head.descricao"
              cor="black"
              icone="mdi-help-circle-outline"
            />
          </th>
        </template>
        <template v-slot:[`footer.page-text`]="itemsPerPage">
          {{ itemsPerPage.pageStart }} - {{ itemsPerPage.pageStop }} de
          {{ itemsPerPage.itemsLength }}
        </template>
        <template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
        <template v-for="(_, someOtherName) in $slots" v-slot:[someOtherName]>
          <slot :name="someOtherName" />
        </template>
        <template v-slot:no-data> Não há itens disponíveis. </template>
      </v-data-table>
    </v-col>
    <v-col cols="12">
      {{ caption }}
    </v-col>
  </v-row>
</template>
  
<script>
import Tooltip from "../atoms/Tooltip.vue";
export default {
  name: "Table-Wrapper",
  components: {
    Tooltip,
  },
  props: {
    headers: {
      type: Array,
    },
    items: {
      type: Array,
    },
    footerProps: {
      default: {
        "items-per-page-text": "Itens por página:",
        "items-per-page-all-text": "Todos",
        "items-per-page-options": [10, 20, -1],
      },
    },
    tooltipHeader: {
      type: Boolean,
      default: false,
    },
    caption: {
      type: String,
      default: "",
    },
  },
  computed: {},
};
</script>
  
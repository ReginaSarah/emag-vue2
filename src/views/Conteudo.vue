<template>
  <view-wrapper>
    <template #titulo> Conteúdo </template>
    <template>
      <card-wrapper>
        <v-container>
          <v-row>
            <v-col lg="12">
              <h3>Alternativas às imagens</h3>
            </v-col>
            <v-col>
              <image-wrapper
                src="https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRZcmlaOZxV_nbS5cWjzzCB1i3PnTRqawOv0-EzUWZ15gTTCyaua_Ngv5hutODmYy7y"
                :width="350"
                :height="300"
                alt="Gatinho"
              />
            </v-col>
            <v-col>
              <image-wrapper />
            </v-col>
          </v-row>
          <v-row class="text-center">
            <v-col lg="12">
              <h3>Tabelas: títulos e legendas</h3>
            </v-col>
          </v-row>
          <table-wrapper
            :headers="headers"
            :items="desserts"
            :footerProps="footerProps"
            :tooltipHeader="true"
            caption="Tabela 1: Informativo de sobremesas"
          >
            <template v-slot:[`item.price`]="{ item }">
              R$ {{ item.price }}
            </template>
          </table-wrapper>
          <table-wrapper
            :headers="headers"
            :items="desserts"
            :footerProps="footerProps"
            :tooltipHeader="false"
          />
        </v-container>
      </card-wrapper>
    </template>
  </view-wrapper>
</template>


  
<script>
import ViewWrapper from "@/components/ViewWrapper.vue";
import ImageWrapper from "@/components/atoms/ImageWrapper.vue";
import TableWrapper from "@/components/organisms/TableWrapper.vue";
import CardWrapper from "@/components/organisms/CardWrapper.vue";

export default {
  name: "Funco-es",
  components: {
    ViewWrapper,
    ImageWrapper,
    TableWrapper,
    CardWrapper,
  },
  data() {
    return {
      headers: [
        {
          text: "Sobremesas (100g)",
          align: "start",
          sortable: false,
          value: "name",
          descricao: "Nome das sobremesas",
        },
        { text: "Calorias", value: "calories" },
        { text: "Gordura (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs", descricao: "Carboidrato" },
        { text: "Proteína (g)", value: "protein" },
        { text: "Ferro (%)", value: "iron" },
        { text: "Preço", value: "price" },
      ],
      desserts: [
        {
          name: "Iogurte",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
          price: "20,00",
        },
        {
          name: "Sorvete",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
          price: "21,00",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
          price: "10,00",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
          price: "5,00",
        },
        {
          name: "Pão",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
          price: "3,00",
        },
        {
          name: "Geleia",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
          price: "26,00",
        },
        {
          name: "Pirulito",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
          price: "1,00",
        },
        {
          name: "Mel",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
          price: "30,00",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
          price: "13,00",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
          price: "5,00",
        },
      ],
      footerProps: {
        "items-per-page-text": "Itens por página:",
        "items-per-page-all-text": "Todos",
        "items-per-page-options": [10, 20, -1],
      },
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "/src/assets/video.mp4",
            type: "video/mp4",
          },
        ],
      },
    };
  },
  created() {
    document.addEventListener("keyup", this.desenhaKeyUp);
    document.addEventListener("keydown", this.desenhaKeyDown);
    document.addEventListener("keypress", this.desenhaKeyPress);
    document.addEventListener("onfocus", this.desenhaKeyPress);
  },
  methods: {
    desenhaKeyUp(e) {
      if (e.code == "Enter") {
        this.keyUpEnter += 1;
      }
      if (e.code == "Delete") {
        this.keyUpDelete += 1;
      }
      if (e.code == "Insert") {
        this.keyUpInsert += 1;
      }
    },
    desenhaKeyDown(e) {
      if (e.code == "Enter") {
        this.keyDownEnter += 1;
      }
      if (e.code == "Delete") {
        this.keyDownDelete += 1;
      }
      if (e.code == "Insert") {
        this.keyDownInsert += 1;
      }
    },
    desenhaKeyPress(e) {
      console.log(e.code);
      if (e.code == "Enter") {
        this.keyPressEnter += 1;
      }
      if (e.code == "Delete") {
        this.keyPressDelete += 1;
      }
      if (e.code == "Insert") {
        this.keyPressInsert += 1;
      }
    },
    zerarClicks() {
      this.keyUpEnter = 0;
      this.keyUpDelete = 0;
      this.keyUpInsert = 0;
      this.keyDownEnter = 0;
      this.keyDownDelete = 0;
      this.keyDownInsert = 0;
      this.keyPressEnter = 0;
      this.keyPressDelete = 0;
      this.keyPressInsert = 0;
    },
  },
};
</script>
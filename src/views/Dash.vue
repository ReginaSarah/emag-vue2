<template>
  <view-wrapper>
    <template #titulo> Página Inicial </template>
    <template>
        <v-container>
          <v-row >
            <v-col cols="6" v-for="(item, ind) in listaMenu" :key="ind">
              <v-card class="pa-3 mb-5 text-center" 
              color="#8fa0bf" 
              @click="irParaUrl(item.url)"
              height="100">
                <v-icon large>{{ item.icon }}</v-icon>
                <h3>{{ item.title }}</h3>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </template>
  </view-wrapper>
</template>
    
    
      
<script>
import ViewWrapper from "@/components/ViewWrapper.vue";

export default {
  name: "DasH",
  components: {
    ViewWrapper,
  },
  data() {
    return {
      listaMenu: [
        { icon: "mdi-ruler", title: "Regras", url: "/regras" },
        { icon: "mdi-function", title: "Funções", url: "/funcoes" },
        { icon: "mdi-table-of-contents", title: "Conteúdo", url: "/conteudo" },
        { icon: "mdi-form-select", title: "Formulários", url: "/forms" },
      ],
    };
  },
  methods: {
    irParaUrl(url){
        this.$router.push(url)
    }
  },
};
</script>
<template>
  <view-wrapper>
    <template #titulo> Formulário </template>
    <template>
      <card-wrapper>
        <v-container>
          <v-row>
            <v-col>
              <Input label="Digite seu nome" v-model="form.nome" />
            </v-col>
            <v-col>
              <InputMask label="Digite seu CPF" v-model="form.cpf" mask="###.###.###-##" />
            </v-col>
            <v-col>
              <Input label="Digite seu email" v-model="form.email" type="email"/>
            </v-col>
            <v-col>
              <ComboBox
                :items="itemsCombo"
                text="nome"
                v-model="form.tipoTeste"
                label="Tipo de Teste:"
                :isRequired="true"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Salvar
                  </v-btn>
                </template>
                <span>Clique aqui para enviar o formulário</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
      </card-wrapper>
    </template>
  </view-wrapper>
</template>
  
  
    
  <script>
import ViewWrapper from "@/components/ViewWrapper.vue";
import CardWrapper from "@/components/organisms/CardWrapper.vue";
import ComboBox from "@/components/atoms/ComboBox.vue";
import Input from "@/components/atoms/Input.vue";
import InputMask from '@/components/atoms/InputMask.vue';

export default {
  name: "Funco-es",
  components: {
    ViewWrapper,
    CardWrapper,
    ComboBox,
    Input,
    InputMask,
  },
  data() {
    return {
      itemsCombo: ["Teste 1", "Teste 2", "Teste 3", "Teste 4", "Teste 5"],
      form: {
        tipoTeste: "",
        nome: "",
        cpf: "",
        email: "",
      },
    };
  },
  methods: {},
};
</script>
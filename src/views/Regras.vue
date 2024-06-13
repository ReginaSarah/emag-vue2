<template>
  <view-wrapper>
    <template #titulo>
			Regras
		</template>

    <template>
      <v-container>
        <card-wrapper>
          <v-row>
            <v-col>
              <h3>Forma lógica e semântica</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              Para manter a regra de lógica e semântica devemos posicionar os componentes que queremos mostrar adequadamente, como numa lista.
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="12">
              Segue abaixo os conteúdos abordados nesta página:
            </v-col>
            <v-col lg="12">
              <ul>   
                <li>Níveis de cabeçalho</li>  
                <li>Tabulação</li>  
                <li>Links adjacentes</li>  
                <li>Dividir áreas de informação</li>  
                <li>Instâncias abertas sem o consentimento do usuário</li>  
              </ul>  
            </v-col>
          </v-row>
        </card-wrapper>
      </v-container>

        <v-container>
        <v-row>
          <v-col lg="12">
            <h3>
              Níveis de cabeçalho
            </h3>            
          </v-col>
          <v-col lg="6">
            <v-card class="pa-3" color="#8fa0bf">              
              <h4>
                É preciso manter os níveis de cabeçalho organizados para melhor entendimento.
              </h4>
              Mesmo que os cards estejam separados, devem seguir o mesmo modelo!          
            </v-card>
            </v-col>
            <v-col lg="6">
            <v-card class="pa-3" color="#426696">              
              <h4>
                Conseguimos entender que este subtítulo está dentro do anterior
              </h4>
              <h5>
                E assim
              </h5>
              <h6>
                Sucessivamente
              </h6>           
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <h3>
              Tabulação e Divisão de Conteúdo por Área
            </h3>
            Não devemos colocar tabelas para separar os conteúdos. Usaremos os cards, como feito acima.
          </v-col>
          <v-col cols="12">
            Dessa forma:
          </v-col>
          <v-col lg="6" cols="12">
            <v-card class="pa-3" color="#6a82ab" height="120">
              Conteúdo 1         
            </v-card>
          </v-col>
          <v-col lg="6" cols="12" class="ma-0 pa-0">
            <v-col lg="12">
            <v-card class="pa-3" color="#8fa0bf">
              Conteúdo 2         
            </v-card>
          </v-col>
          <v-col lg="12">
            <v-card class="pa-3" color="#d9deea">
              Conteúdo 3         
            </v-card>
          </v-col>
          </v-col>
          <v-col lg="12">
            Ao invés dessa:
          </v-col>
          <v-col lg="12">
            <v-data-table
              :headers="headers"
              :items="content"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-col>
        </v-row>

        <v-row>
          <v-col lg="12">
            <h3>Divisão de Links Adjacentes</h3>
          </v-col>
          <v-col>
            <ul id="menu">  
							<li> <a target="_blank" href="https://www.gov.br/pt-br">GOV.br</a></li>  
							<li> <a target="_blank" href="https://v2.vuetifyjs.com/en/">Vuetify</a></li>  
							<li> <a target="_blank" href="https://quasar.dev/">Quasar</a></li>
						</ul>  
          </v-col>
        </v-row>

      </v-container>
    </template>
  </view-wrapper>
    

</template>

<script>
import ViewWrapper from '@/components/ViewWrapper.vue'
import CardWrapper from '@/components/organisms/CardWrapper.vue';
  export default {
    name: 'Regra-s',
    components: {
      ViewWrapper,
        CardWrapper,
    },
    data(){
      return{
        headers: [
          { text: "1", value: "conteudo1" },
          { text: "2", value: "conteudo2" },
          { text: "3", value: "conteudo3" },
        ],
        content: [
          {
            conteudo1: "Este é o conteúdo 1, separado por uma linha",
            conteudo2: "Este é o conteúdo 2, separado por uma linha",
            conteudo3: "Este é o conteúdo 3, separado por uma linha",
          },
          {
            conteudo1: "Este é o conteúdo 4, separado por uma linha",
            conteudo2: "Este é o conteúdo 5, separado por uma linha",
            conteudo3: "Este é o conteúdo 6, separado por uma linha",
          },
        ]
      };
    }
    
  }
</script>
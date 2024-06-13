<template>
    <view-wrapper>
      <template #titulo>
              Funções
          </template>
  
      <template>
        <v-container>
            <v-row>
                <v-col lg="12">
                    <h3>Eventos com o Teclado</h3>
                    Evento: aperte Enter, Delete ou Insert para testar.
                </v-col>
                <v-col>
                    <v-card class="pa-3 mb-5" color="#8fa0bf">
                        Tecla Enter apertada KEYUP <b>{{ keyUpEnter }}</b> vezes.
                    </v-card>
                    <v-card class="pa-3 mb-5" color="#d9deea">
                        Tecla Enter apertada KEYDOWN <b>{{ keyDownEnter }}</b> vezes.
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3 mb-5" color="#8fa0bf">
                        Tecla Delete apertada KEYUP <b>{{ keyUpDelete }}</b> vezes.
                    </v-card>
                    <v-card class="pa-3 mb-5" color="#d9deea">
                        Tecla Delete apertada KEYDOWN <b>{{ keyDownDelete }}</b> vezes.
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3 mb-5" color="#8fa0bf">
                        Tecla Insert apertada KEYUP <b>{{ keyUpInsert }}</b> vezes.
                    </v-card>
                    <v-card class="pa-3 mb-5" color="#d9deea">
                        Tecla Insert apertada KEYDOWN <b>{{ keyDownInsert }}</b> vezes.
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="text-end">
                <v-col >
                    <v-btn
                        color="blue-grey"
                        class="white--text"
                        @click="zerarClicks"
                        >
                        Zerar
                        <v-icon
                            right
                            dark
                        >
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col lg="12">
                    <h3>Controle do Usuário</h3>
                </v-col>
                <v-col>
                <v-card
                    elevation="24"
                    max-height="444"
                    class="mx-auto"
                >
                <v-carousel                
                    :continuous="false"
                    :cycle="cycle"
                    interval="3000">
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                        ></v-carousel-item>
                    </v-carousel>
                    <v-switch
                        v-model="cycle"
                        class="mb-5"
                        label="Rolagem automática"
                        inset
                    ></v-switch>
                </v-card>
            </v-col>
            </v-row>
            
        </v-container>
      </template>
    </view-wrapper>
      
  
  </template>
  
  <script>
  import ViewWrapper from '@/components/ViewWrapper.vue'
    export default {
      name: 'Funco-es',
      components: {
        ViewWrapper,
      },
      data(){
        return{
            keyUpEnter: 0,
            keyUpDelete: 0,
            keyUpInsert: 0,
            keyDownEnter: 0,
            keyDownDelete: 0,
            keyDownInsert: 0,
            keyPressEnter: 0,
            keyPressDelete: 0,
            keyPressInsert: 0,
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],
            cycle: false,
        };
      },
      created(){
        document.addEventListener("keyup", this.desenhaKeyUp);
        document.addEventListener("keydown", this.desenhaKeyDown);
        document.addEventListener("keypress", this.desenhaKeyPress);
        document.addEventListener("onfocus", this.desenhaKeyPress);
      },
      methods: {
        desenhaKeyUp(e){
            if(e.code == "Enter"){
                this.keyUpEnter += 1;
            }
            if(e.code == "Delete"){
                this.keyUpDelete += 1;
            }
            if(e.code == "Insert"){
                this.keyUpInsert += 1;
            }
        },
        desenhaKeyDown(e){
            if(e.code == "Enter"){
                this.keyDownEnter += 1;
            }
            if(e.code == "Delete"){
                this.keyDownDelete += 1;
            }
            if(e.code == "Insert"){
                this.keyDownInsert += 1;
            }
        },
        desenhaKeyPress(e){
            console.log(e.code);
            if(e.code == "Enter"){
                this.keyPressEnter += 1;
            }
            if(e.code == "Delete"){
                this.keyPressDelete += 1;
            }
            if(e.code == "Insert"){
                this.keyPressInsert += 1;
            }
        },
        zerarClicks(){
            this.keyUpEnter = 0;
            this.keyUpDelete = 0;
            this.keyUpInsert = 0;
            this.keyDownEnter = 0;
            this.keyDownDelete = 0;
            this.keyDownInsert = 0;
            this.keyPressEnter = 0;
            this.keyPressDelete = 0;
            this.keyPressInsert = 0;
        }
      },
      
    }
  </script>
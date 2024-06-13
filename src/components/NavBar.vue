<template>
	<div
  >
    <v-app-bar
      color="#004b82"
      dark
      flat
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="#004b82"
        >
        <div v-for="(item, index) in listaMenu" :key="index">
          <v-list-item @click="$router.push(item.url)">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
	export default {
		name: "NavBar",
		components: {
		},
		data(){
			return {
				drawer: false,
        group: null,
        listaMenu: [
          {icon: "mdi-home", title: "Início", url: "/"},
          {icon: "mdi-ruler", title: "Regras", url: "/regras"},
          {icon: "mdi-function", title: "Funções", url: "/funcoes"},
          {icon: "mdi-table-of-contents", title: "Conteúdo", url: "/conteudo"},
          {icon: "mdi-form-select", title: "Formulários", url: "/forms"},
        ],
			};
		},
	};

</script>

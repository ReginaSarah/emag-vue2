
import VueRouter from "vue-router";
import Dash from "@/views/Dash.vue";
import Regras from "@/views/Regras.vue";
import Funcoes from "@/views/Funcoes.vue";
import Conteudo from "@/views/Conteudo.vue"
import Forms from "@/views/Forms.vue"
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", name: "Dash", component: Dash },
    { path: "/regras", name: "Regras", component: Regras },
	{ path: "/funcoes", name: "Funcoes", component: Funcoes },
	{ path: "/conteudo", name: "Conteudo", component: Conteudo },
	{ path: "/forms", name: "Forms", component: Forms },
];

const router = new VueRouter({
	mode: "history",
	base: "",
	routes,
});

export default router;
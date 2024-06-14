<template>
	<v-autocomplete
		:label="label"
		:value="value"
		:item-value="field"
		:return-object="!retornaCampo"
		@change="change"
		@blur="emitBlurEvent"
		:item-text="text"
		no-data-text="Nenhum Item Disponível"
		v-bind="$attrs"
		:disabled="disabled"
		:isRequired="isRequired"
		:rules="rules"
		:filter="filter_owners"
		outlined
		dense
		clearable
		>
		<template v-for="(_, name) in $scopedSlots" v-slot:[name]="slotData">
			<slot :name="name" v-bind="slotData"/>
		</template>
		<template v-for="(_, someOtherName) in $slots" v-slot:[someOtherName]>
			<slot :name="someOtherName"/>
		</template>
	</v-autocomplete>
</template>

<script>

	export default {
		name: "ComboBox",
		props: {
			retornaCampo: {
				required: false,
				default: false,
			},
			value: {
				required: true,
			},
			label: {
				default: "",
			},
			text: {
				default: "descricao",
			},
			field: {
				default: "",
				type: String,
			},
			multiples: {
				default: false,
				type: Boolean,
			},
			disabled: {
				default: false,
				type: Boolean,
			},
			isRequired: {
				default: true,
				type: Boolean,
			},
		},
		methods: {
			clear(){
				this.$emit("input", undefined);
			},
			change(valor){
				this.$emit("input", valor);
			},
			emitBlurEvent(){
				this.$emit("blur");
			},
			filter_owners(item, querytext, itemText){
				if(querytext){
					const list = itemText.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
					const regex = new RegExp(querytext.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
					return regex.test(list.toLowerCase());
				}
				return true;
			},
		},
		computed: {
			rules(){
				if(this.isRequired){
					return [v => !!v || "Este campo é obrigatório"];
				}
				return [];
			},
		},
	};
</script>

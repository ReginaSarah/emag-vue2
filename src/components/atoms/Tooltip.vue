<template>
	<v-tooltip top max-width="350">
		<template v-slot:activator="{ on, attrs }">
			<v-icon
				v-if="icone"
				:color="cor"
				dark
				v-bind="attrs"
				v-on="on"

				small
				>
				{{ icone }}
			</v-icon>
			<slot/>
		</template>
		<span>{{ texto }}</span>
	</v-tooltip>
</template>

<script>
	export default {
		name: "Tool-tip",
		props: {
			cor: String,
			texto: String,
			icone: String,
		},
		computed: {
		},
	};
</script>

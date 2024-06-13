<template>
	<v-sheet
		class="ma-5"
		>
		<v-card elevation="0">
			<v-container>
				<v-row no-gutters>
					<v-col
						align="start"
						cols="12"
						>
						<h2 class="mb-0 elevation-0"><slot name="titulo"/></h2>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
		<v-container class="pa-0">
			<slot/>
		</v-container>
	</v-sheet>
</template>

<script>

	export default {
		name: "ViewWrapper",
		props: {
		},
		data(){
			return {

			};
		},
		computed: {
		},
		watch: {
		},
		methods: {
		},
	};
</script>

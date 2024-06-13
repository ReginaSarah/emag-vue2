<template>
  <v-text-field-simplemask
    :label="label"
    v-model="dado"
    :mask="mask"
    outlined
    dense
  />
</template>

<script>
export default {
  name: "InputMask",
  props: {
    value: {
      default: "",
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "Insira os dados",
      type: String,
    },
    isRequired: {
      default: true,
      type: Boolean,
    },
    mask: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      dado: this.value,
    };
  },
  watch: {
    dado() {
      if (this.dado == null) {
        this.$emit("input", null);
      } else {
        this.$emit("input", this.dado);
      }
    },
    value() {
      this.dado = this.value;
    },
  },
  computed: {
    rules() {
      if (this.isRequired) {
        return [(v) => !!v || "Este campo é obrigatório"];
      }
      return [];
    },
    computedAttrs() {
      return { ...this.$attrs, rules: this.rules };
    },
  },
};
</script>

<style></style>

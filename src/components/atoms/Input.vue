<template>
  <v-text-field
    :type="type"
    :label="label"
    :state="state"
    :value="value"
    :disabled="disabled"
    :rules="rules"
    @input="$emit('input', $event)"
    @blur="emitBlurEvent"
    outlined
    clearable
    dense
  />
</template>

<script>
export default {
  name: "Input-",
  props: {
    state: {
      required: false,
      default: "",
    },
    value: {
      required: true,
    },
    label: {
      default: "",
    },
    invalidFeedback: {
      default: "",
    },
    child: {
      default: "",
    },
    tamCampo: {
      default: 250,
      type: Number,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    isRequired: {
      default: true,
      type: Boolean,
    },
    type: {
      default: "input",
      type: String,
    },
  },
  computed: {
    rules() {
      if (this.isRequired) {
        if (this.type == "email") {
          return [
            (v) => !!v || "Este campo é obrigatório",
            (v) => /.+@.+\..+/.test(v) || "Email deve ser válido",
          ];
        }
        return [
          (v) => !!v || "Este campo é obrigatório",
          (v) =>
            (v && v.length <= 100) ||
            "Este campo deve possuir menos de 100 caracteres",
        ];
      }
      return [];
    },
  },
  methods: {
    emitBlurEvent() {
      if (this.value) {
        this.$emit("input", this.value.trim());
      }
      this.$emit("blur");
    },
  },
};
</script>

import axios from "@/plugins/backendAxios.js";

export default {
  data: function() {
    return {
      formData: {},
      method: "POST",
    };
  },
  methods: {
    submit: function() {
      axios({ method: this.method, url: this.url, data: this.formData })
        .then((response) => {
          this.$formulate.reset(this.name);
          this.$emit("response", response.data);
        })
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
};

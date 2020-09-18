import axios from "@/plugins/backendAxios.js";

export default {
  data: function() {
    return {
      url: "",
      formData: {},
      name: "",
    };
  },
  methods: {
    submit: function() {
      axios
        .post(this.url, this.formData)
        .then((response) => {
          this.$emit("response", response.data);
          this.$formulate.reset(this.name);
        })
        .catch((err) => console.log(err));
    },
  },
};

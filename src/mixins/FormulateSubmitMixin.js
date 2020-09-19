import axios from "@/plugins/backendAxios.js";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data: function() {
    return {
      url: "",
      formData: {},
    };
  },
  methods: {
    submit: function() {
      axios
        .post(this.url, this.formData)
        .then((response) => {
          this.$formulate.reset(this.name);
          this.$emit("response", response.data);
        })
        .catch((err) => console.log(err));
    },
  },
};

<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Settings" link="/u/settings"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        text="User"
        link="/u/settings/user-settings"
      ></breadcrumb-link>
    </breadcrumb-navigation>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <general-box v-bind:overflow="false">
        <formulate-form
          v-bind:name="name"
          v-on:submit="submit1"
          v-model="formData"
        >
          <formulate-input
            type="password"
            label="Old password"
            name="old_password"
            id="old-password"
          ></formulate-input>
          <formulate-input
            type="password"
            label="New password"
            name="new_password"
            id="new-password"
          ></formulate-input>
          <formulate-input
            type="password"
            label="Password confirmation"
            name="password_confirm"
            id="password-confirm"
            validation="required|confirm:new_password"
            validation-name="Password confirmation"
          ></formulate-input>
          <formulate-input type="submit" value="Save"></formulate-input>
        </formulate-form>
      </general-box>
      <general-box v-bind:overflow="false">
        <formulate-form
          v-bind:name="name"
          v-on:submit="submit2"
          v-model="formData2"
        >
          <formulate-input
            type="email"
            label="New e-mail"
            name="email"
            id="email"
            validation="email"
          ></formulate-input>
          <formulate-input type="submit" value="Save"></formulate-input>
        </formulate-form>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import BackendBox from "../components/BackendBox.vue";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation.vue";
import BreadcrumbLink from "../components/BreadcrumbLink.vue";
import BreadcrumbDivider from "../components/BreadcrumbDivider.vue";
import axios from "../plugins/backendAxios.js";
import GeneralBox from "../components/GeneralBox.vue";

export default {
  name: "UsersSettingsUser",
  mixins: [],
  components: {
    BackendBox,
    BreadcrumbNavigation,
    BreadcrumbLink,
    BreadcrumbDivider,
    GeneralBox,
  },
  data() {
    return {
      user: {},
      userOptions: false,
      name: "todoSettingsForm",
      method: "PUT",
      formData: {},
      formData2: {},
    };
  },
  computed: {
    changePasswordUrl() {
      return "/u/api/change-password/";
    },
  },
  methods: {
    submit1: function () {
      this.$store.dispatch("alert/clear");
      axios({
        method: this.method,
        url: this.changePasswordUrl,
        data: this.formData1,
      })
        .then(() => {
          this.$formulate.reset(this.name);
          this.$store.dispatch("alert/success", "New password saved.");
        })
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
    submit2: function () {
      this.$store.dispatch("alert/clear");
      axios({
        method: this.method,
        url: this.user.url,
        data: this.formData2,
      })
        .then((response) => {
          this.$formulate.reset(this.name);
          this.user = response.data;
          this.$store.dispatch("alert/success", "New e-mail saved.");
        })
        .catch((err) => this.$formulate.handle(err.response.data, this.name));
    },
  },
  mounted() {
    axios
      .get("/u/api/users/")
      .then((response) => (this.user = response.data[0]));
  },
  watch: {
    user: function (newValue) {
      axios
        .options(newValue.url)
        .then((response) => (this.userOptions = response.data));
      this.formData2 = newValue;
    },
  },
};
</script>

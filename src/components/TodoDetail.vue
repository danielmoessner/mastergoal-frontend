<template>
  <backend-box>
    <breadcrumb-navigation>
      <breadcrumb-link text="Todos" link="/t/list"></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-bind:text="breadcrumbText"
        v-bind:link="breadcrumbUrl"
      ></breadcrumb-link>
      <breadcrumb-divider></breadcrumb-divider>
      <breadcrumb-link
        v-if="todo.name"
        v-bind:text="todo.name"
        v-bind:link="'/t/list/todos/' + todo.id"
      ></breadcrumb-link>
    </breadcrumb-navigation>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      <general-box :overflow="false">
        <heading-one v-bind:text="toDoName" class="mb-0"> </heading-one>
        <p
          class="text-lg font-normal tracking-normal -mt-5"
          v-bind:class="{ 'text-red-500': timeToDeadlineSeconds < 0 }"
          v-html="timeToDeadline"
        ></p>
        <hr class="mt-2 mb-2" />
        <p>
          Activate:
          <span v-html="todo.activate"></span>
        </p>
        <p>
          Deadline:
          <span v-html="todo.deadline"></span>
        </p>
        <p>
          Completed:
          <span v-html="todo.completed"></span>
        </p>
        <div class="flex justify-between items-center w-full">
          <p>
            Archived:
            <span v-html="todo.is_archived"></span>
          </p>
          <form-button
            v-on:response="changed"
            v-bind:text="'Toggle'"
            v-bind:link="todoUrl"
            v-bind:data="{ is_archived: !todo.is_archived }"
          ></form-button>
        </div>
        <hr class="mt-2 mb-2" />
        <div class="flex justify-between items-center w-full">
          <p>
            Status:
            <span v-html="todo.status"></span>
          </p>
          <p>
            <form-button
              v-on:response="changed"
              v-bind:text="'Set Active'"
              v-bind:link="todoUrl"
              v-bind:data="{ status: 'ACTIVE' }"
              v-bind:style="{
                visibility: todo.status === 'ACTIVE' ? 'hidden' : 'visible',
              }"
            ></form-button>
            <form-button
              class="ml-4"
              v-on:response="changed"
              v-bind:text="'Set Done'"
              v-bind:link="todoUrl"
              v-bind:data="{ status: 'DONE' }"
              v-bind:style="{
                visibility: todo.status === 'DONE' ? 'hidden' : 'visible',
              }"
            ></form-button>
            <form-button
              class="ml-4"
              v-on:response="changed"
              v-bind:text="'Set Failed'"
              v-bind:link="todoUrl"
              v-bind:data="{ status: 'FAILED' }"
              v-bind:style="{
                visibility: todo.status === 'FAILED' ? 'hidden' : 'visible',
              }"
            ></form-button>
          </p>
        </div>

        <hr class="mt-2 mb-2" />
        <p>
          Duration:
          <span v-html="todo.duration"></span>
        </p>
        <p>
          Repetitions:
          <span v-html="todo.repetitions"></span>
        </p>
        <p>
          Previous:
          <span v-html="todo.previous"></span>
        </p>
        <p>
          Next:
          <span>{{ todo.next }}</span>
        </p>
        <p>
          Blocked:
          <span>{{ todo.blocked }}</span>
        </p>
        <hr class="mt-2 mb-2" />
        <p>
          <form-button
            v-on:response="deleted"
            text="Delete"
            v-bind:link="todoUrl"
            v-bind:data="{}"
            method="DELETE"
          ></form-button>
        </p>
      </general-box>
      <general-box heading="Notes" v-if="todo.notes">
        <p v-html="todo.notes"></p>
      </general-box>
      <general-box heading="Edit">
        <rest-form
          method="PUT"
          v-on:response="changed"
          v-if="todo.form_url && todo.url"
          v-bind:url="todo.form_url"
          v-bind:submitUrl="todo.url"
        ></rest-form>
      </general-box>
    </div>
  </backend-box>
</template>

<script>
import HeadingOne from "@/components/HeadingOne.vue";
import GeneralBox from "@/components/GeneralBox.vue";
// import UpdateButton from "@/components/UpdateButton.vue";
// import DeleteButton from "@/components/DeleteButton.vue";
import BreadcrumbNavigation from "@/components/BreadcrumbNavigation.vue";
import BreadcrumbDivider from "@/components/BreadcrumbDivider.vue";
import BreadcrumbLink from "@/components/BreadcrumbLink.vue";
import FormButton from "@/components/FormButton.vue";
import RestForm from "@/components/RestForm.vue";
import axios from "@/plugins/backendAxios.js";
import BackendBox from "@/components/BackendBox.vue";

export default {
  name: "TodoDetail",
  components: {
    HeadingOne,
    BackendBox,
    GeneralBox,
    // UpdateButton,
    // DeleteButton,
    BreadcrumbNavigation,
    BreadcrumbDivider,
    BreadcrumbLink,
    FormButton,
    RestForm,
  },
  data: function() {
    return {
      todo: {},
    };
  },
  mounted() {
    axios.get(this.url).then((response) => (this.todo = response.data));
  },
  computed: {
    url() {
      return "/t/api/todos/" + this.$route.params.id + "/";
    },
    breadcrumbUrl() {
      if (!this.todo.type) return "#";
      switch (this.todo.type) {
        case "NORMAL":
          return "/t/list/normal-todos";
        case "REPETITIVE":
          return "/t/list/repetitive-todos";
        case "NEVER_ENDING":
          return "/t/list/never-ending-todos";
        case "PIPELINE":
          return "/t/list/pipeline-todos";
      }
      return "#";
    },
    breadcrumbText() {
      if (!this.todo.type) return "";
      switch (this.todo.type) {
        case "NORMAL":
          return "Normal";
        case "REPETITIVE":
          return "Repetitive";
        case "NEVER_ENDING":
          return "Never-ending";
        case "PIPELINE":
          return "Pipeline";
      }
      return "";
    },
    toDoName() {
      return this.todo.name || "";
    },
    todoUrl() {
      return this.todo.url || "";
    },
    todoFormUrl() {
      return this.todo.form_url || "";
    },
    timeToDeadlineSeconds() {
      if (this.todo.deadline === null || this.todo.is_done) return 0;
      return (Date.parse(this.todo.deadline) - new Date()) / 1000;
    },
    timeToDeadline: function() {
      if (this.todo.deadline === null || this.todo.is_done) return "";
      let delta = this.timeToDeadlineSeconds;
      let timeToDeadline = delta < 0 ? "Overdue: " : "";
      // calculate (and subtract) whole days
      let days = Math.floor(delta / 86400);
      delta -= days * 86400;
      // calculate (and subtract) whole hours
      let hours = Math.floor(delta / 3600) % 24;
      delta -= hours * 3600;
      // calculate (and subtract) whole minutes
      let minutes = Math.floor(delta / 60) % 60;
      delta -= minutes * 60;
      // return human readable time to deadline
      timeToDeadline += days > 0 ? days + "d " : "";
      timeToDeadline += hours > 0 ? hours + "h " : "";
      timeToDeadline += minutes > 0 ? minutes + "min " : "";
      timeToDeadline = timeToDeadline.slice(0, -1);
      return timeToDeadline;
    },
  },
  methods: {
    changed: function(data) {
      this.todo = data;
    },
    deleted: function() {
      this.$router.push("/t/todos");
    },
  },
};
</script>

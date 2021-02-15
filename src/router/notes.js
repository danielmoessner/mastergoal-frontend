import NotesDashboard from "../views/NotesDashboard.vue";
import NotesNoteDetail from "../views/NotesNoteDetail.vue";
import NotesNoteEdit from "../views/NotesNoteEdit.vue";
import NotesNoteDelete from "../views/NotesNoteDelete.vue";
import NotesAddNote from "../views/NotesAddNote.vue";

export default [
  {
    path: "/n/dashboard/",
    component: NotesDashboard,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/add/",
    component: NotesAddNote,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/",
    component: NotesNoteDetail,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/edit/",
    component: NotesNoteEdit,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
  {
    path: "/n/:id/delete/",
    component: NotesNoteDelete,
    meta: {
      requiresAuthenticationTrue: true,
    },
  },
];

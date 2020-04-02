// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl : "http://127.0.0.1:8000/api/",
  login : "login",
  register : "register",
  forgot : "forgot",



  notes :"getNotes/",

  getTrashNotes: "getTrash/",
  getArchiveNotes: "getArchive/",
  getUnarchiveNotes: "getUnarchive/",
  createNote: "createnote/",
  updatePin: "updatepin/",
  updateArchive: "uparchive/",
  updateTrash: "updateTrash/",
  updateNotes: "updateNotes/",
  updateColor: "setColor/",
  pinNotes : "pinNotes/",
  unpinNotes : "unpinNotes/",
  archiveNotes : "archiveNotes/",
  unarchiveNotes: "unarchiveNotes/",
  delete: "delete/",
  setcolor: "setColor/",
};

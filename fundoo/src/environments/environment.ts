// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl : "http://127.0.0.1:8000/api/",
  login : "login",
  register : "register",
  forgot : "forgot",



  getAllNotes:"getAllNotes/",
  getPinNotes :"getPinNotes/",
  getUnPinNote:"getUnPinNotes/",

  getTrashNotes: "getTrash/",
  getArchiveNotes: "getArchive/",
  getUnarchiveNotes: "getUnarchive/",
  getLabels : "getLabels/",
  createNote: "createnote/",
  createLabel: "createLabel/",
  UpdateNotes: "updateNotes/",
  updatePin: "updatepin/",
  updateArchive: "updateArchive/",
  updateTrash: "updateTrash/",
  updateNotes: "updateNotes/",
  updateColor: "setColor/",
  pinNotes : "pinNotes/",
  unpinNotes : "unpinNotes/",
  archiveNotes : "archiveNotes/",
  unarchiveNotes: "unarchiveNotes/",
  delete: "delete/",
  setcolor: "setColor/",

  //labels
  deleteLabel: "deleteLabel",
};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  baseUrl : "http://127.0.0.1:8000/api/",
  login : "login",
  register : "register",
  forgot : "forgot",


  info: "userDetails/",
  searchData: "searchData/",



  getAllNotes:"getAllNotes/",
  getPinNotes :"getPinNotes/",
  getUnPinNote:"getUnPinNotes/",
  getTrashNotes: "getTrashNotes/",
  getArchiveNotes: "getArchive/",

  getLabels : "getLabels/",
  getLabelNotes: "getLabelNotes/",
  
  createNote: "createnote/",
  createLabel: "createLabel/",
  addCollaborator: "addCollaborator/",
  deleteCollaboration: "deleteCollaboration/",
  
  UpdateNotes: "updateNotes/",
  updatePin: "updatepin/",
  updateArchive: "updateArchive/",
  updateTrash: "updateTrash/",
  updateNotes: "updateNotes/",
  updateColor: "setColor/",
  
  delete: "deleteNotes/",
  setcolor: "setColor/",

  addReminder: "addReminder/",
  deleteReminder: "deleteReminder/",
  //labels
  deleteLabel: "deleteLabel",
};

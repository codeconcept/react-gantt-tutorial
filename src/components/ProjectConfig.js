export const projectConfig = {
  autoSync: true,
  transport: {
    load: {
      url: "http://localhost:3002/data",
    },
    sync: {
      url: "http://localhost:3002/data",
    },
  },
  autoLoad: true,
  // The State TrackingManager which the UndoRedo widget in the toolbar uses
  stm: {
    autoRecord: true,
  },
  // Reset Undo / Redo after each load so that the first load from url does not count as an undoable task
  resetUndoRedoQueuesAfterLoad: true,
};

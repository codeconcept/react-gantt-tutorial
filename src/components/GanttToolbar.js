import { Toolbar } from "@bryntum/gantt";

export default class GanttToolbar extends Toolbar {
  static get type() {
    return "gantttoolbar";
  }

  static get $name() {
    return "GanttToolbar";
  }

  // Called when the toolbar is added to the Gantt panel
  set parent(parent) {
    super.parent = parent;
    const me = this;
    me.gantt = parent;
  }

  get parent() {
    return super.parent;
  }

  static get configurable() {
    return {
      items: [
        {
          ref: "undoRedo",
          type: "undoredo",
          items: {
            transactionsCombo: null,
          },
        },
        {
          type: "textfield",
          ref: "filterByName",
          cls: "filter-by-name",
          flex: "1 0 12.5em",
          // Label used for material, hidden in other themes
          label: "Find tasks by name",
          // Placeholder for others
          placeholder: "Find tasks by name",
          clearable: true,
          keyStrokeChangeDelay: 100,
          triggers: {
            filter: {
              align: "end",
              cls: "b-fa b-fa-filter",
            },
          },
          onChange: "up.onFilterChange",
        },
      ],
    };
  }
  onFilterChange({ value }) {
    if (value === "") {
      this.gantt.taskStore.clearFilters();
    } else {
      value = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      this.gantt.taskStore.filter({
        filters: (task) => task.name && task.name.match(new RegExp(value, "i")),
        replace: true,
      });
    }
  }
}

GanttToolbar.initClass();

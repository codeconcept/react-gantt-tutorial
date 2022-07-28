import { Toolbar, LocaleManager } from "@bryntum/gantt";
import SvSE from "@bryntum/gantt/locales/gantt.locale.SvSE";
import En from "@bryntum/gantt/locales/gantt.locale.En";

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
        {
          type: "buttonGroup",
          toggleGroup: true,
          items: [
            {
              text: "English",
              ref: "english",
              pressed: true,
              ganttConfig: {
                rowHeight: 70,
                barMargin: 5,
              },
            },
            {
              text: "Swedish",
              ref: "swedish",
              ganttConfig: {
                rowHeight: 45,
                barMargin: 10,
              },
            },
          ],
          onAction(action) {
            const language =
              action.source.currentElement.attributes["data-ref"].value;
            console.log(`language ${language}`);
            if (language === "english") {
              console.log('anguage === "english"');
              LocaleManager.locale = En;
            }
            if (language === "swedish") {
              console.log('anguage === "swedish"');
              LocaleManager.locale = SvSE;
            }
          },
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

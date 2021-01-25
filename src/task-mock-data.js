const coloms = ["New Tasks", "In Progress", "Review", "Done"];

const tasks = [
  {
    type: "New Tasks",
    taskId: 1234,
    priority: "Normal",
    created: new Date(),
    name: "Mobile account settings view",
    tags: ["Mobile", "App"],
    comments: 10,
    attachments: 5,
    assignedTo: 34,
  },

  {
    type: "In Progress",
    taskId: 1235,
    priority: "High",
    created: new Date(),
    name: "Chat Mail Redesign",
    tags: ["Mail", "App"],
    comments: 10,
    attachments: 5,
    assignedTo: 34,
  },
  {
    type: "In Progress",
    taskId: 1236,
    priority: "Urgent",
    created: new Date(),
    name: "Video Dashboard ",
    tags: ["Web", "Dashboard"],
    comments: 10,
    attachments: 5,
    assignedTo: 34,
  },
  {
    type: "Review",
    taskId: 1237,
    priority: "High",
    created: new Date(),
    name: "Magazine Homepage",
    tags: ["Web", "Homepage", "RWD"],
    comments: 10,
    attachments: 5,
    assignedTo: 34,
  },

  {
    type: "Done",
    taskId: 1238,
    priority: "Urgent",
    created: new Date(),
    name: "Web Account Settings View",
    tags: ["Web", "App"],
    comments: 10,
    attachments: 5,
    assignedTo: 34,
  },
  {
    type: "Done",
    taskId: 1239,
    priority: "Low",
    created: new Date(),
    name: "Magazine Homepage",
    tags: ["Web", "Homepage", "RWD"],
    comments: 10,
    attachments: 5,
    assignedTo: 34,
  },
];

export { tasks, coloms };

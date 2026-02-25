// enum userRole {
//   admin = "admin",
//   editor = "editor",
//   user = "user",
// }

// as coant er example
const userRole = {
  admin: "admin",
  editor: "editor",
  user: "user",
} as const;
// abr emon jodi hoy key value name alada hoy tobe emon hobe
const userRole2 = {
  admin: "ADMINNEW",
  editor: "editorNEW",
  user: "userNEW",
} as const;
const getUser = (role: (typeof userRole2)[keyof typeof userRole2]) => {
  if (role === userRole2.admin) {
    return "this is admin ";
  } else if (role === userRole2.user) {
    return "this is ueser";
  }
};
getUser(userRole2.admin);

enum userRole {
  admin = "admin",
  editor = "editor",
  user = "user",
}

const getUser = (role: userRole) => {
  if (role === userRole.admin) {
    return "this is admin ";
  } else if (role === userRole.user) {
    return "this is ueser";
  }
};
getUser(userRole.admin);

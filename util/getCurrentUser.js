function getCurrentUser(req) {
  const cookie = req.cookies.get("user");
  const userData = JSON.parse(cookie.value);
  return userData;
}

export default getCurrentUser;

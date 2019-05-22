exports.isLogged = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/auth/login");
  }
};

exports.isAdmin = (req, res, next) => {
  if (req.user.role === "Admin") return next();
  res.redirect("/auth/login");
};

exports.isUser = (req, res, next) => {
  if (req.user.role === "User") return next();
  res.redirect("/auth/login");
};

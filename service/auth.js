function setUser(req, user) {
    req.session.user = user;
  }
  
  function getUser(req) {
    return req.session.user;
  }
  
  module.exports = {
      setUser,
      getUser,
  };
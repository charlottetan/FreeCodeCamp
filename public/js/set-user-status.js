'use strict';

// Leave the below lines alone!
(function(global) {
  global.main = global.main || {};
  global.main.isLoggedIn = !{JSON.stringify(!!user)};
  global.main.userId = !{JSON.stringify(user && user.id || false)};
}(window))

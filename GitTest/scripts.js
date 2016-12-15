$(document).ready(function() {
  try {
    var gh = new GitHub();
    alert(gh);
  } catch(err) {
    alert(err.message);
  }
});

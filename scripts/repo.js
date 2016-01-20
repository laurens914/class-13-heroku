(function(module) {
  var repos = {};

  repos.all = [];

  // TODO: Refactor this ajax call into a get request to the proxy end point provided by server.js.
  repos.requestRepos = function(callback) {
    $.get({
      url: '/github/users/laurens914/repos' +
            '?per_page=100' +
            '&sort=updated',
      // type: 'GET',
      // headers: { 'Authorization': 'token ' + githubToken },
    })
  .done(function(data, message, xhr) {
        repos.all = data;
      })
      .done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);

Package.describe({
  summary: 'OpenID Connect (OIDC) for Meteor accounts',
  version: '1.1.0',
  name: 'seluxit:accounts-oidc',
  git: 'https://github.com/seluxit/meteor-accounts-oidc.git',
});

Package.onUse(function(api) {
  api.use('underscore@1.0.0', ['server', 'client']);
  api.use('accounts-base@2.2.1', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.4.0', ['client', 'server']);

  api.use('seluxit:oidc@1.1.0', ['client', 'server']);

  api.addFiles('oidc_login_button.css', 'client');
  api.addFiles('oidc.js');
});

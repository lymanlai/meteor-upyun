Package.describe({
  summary: "Upload files to Upyun.com. Only Server-Side"
});

Package.on_use(function (api, where) {
  api.export('UPYUN', ['server']);
  api.add_files('upyun.js', ['server']);
});

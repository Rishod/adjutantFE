module.exports = {
  name: 'task-ui-board',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/task/ui-board',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

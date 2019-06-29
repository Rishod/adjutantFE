module.exports = {
  name: 'task-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/task/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

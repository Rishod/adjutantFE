module.exports = {
  name: 'shared-header',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/header',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'adjutant',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/adjutant',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

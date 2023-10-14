let mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
  caseTitle: {
    type: String,
    required: true,
  },
  tags: [''],
});

module.exports = mongoose.model('Case', CaseSchema, 'CaseCollection');

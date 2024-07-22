const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

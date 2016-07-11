const validator = require('validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  user_id: {type: Schema.Types.ObjectId, required: true},
  vote_type: {type: String, required: true}
},
// disable _id field
{_id:false});

const CommentSchema = new Schema({
  detail: {type: String, required: true},
  mentions: [Schema.Types.ObjectId],
  tags: [String],
  photos: [Schema.Types.ObjectId],
  videos: [Schema.Types.ObjectId],
  voters: [VoteSchema],
  created_time: {type: Date, required: true, 'default': Date.now},
  updated_time: {type: Date, required: true, 'default': Date.now}
},
// disable _id field
{_id:false});

const PinSchema = new Schema({
  detail: {type: String, required: true},
  categories: [String],
  created_time: {type: Date, required: true, 'default': Date.now},
  updated_time: {type: Date, required: true, 'default': Date.now},
  resolved_time: {type: Date},
  followers: [Schema.Types.ObjectId],
  level: String,
  mentions: [Schema.Types.ObjectId],
  neighborhood: [String],
  owner: {type: Schema.Types.ObjectId, required: true},
  photos: [Schema.Types.ObjectId],
  status: String,
  location: {type: [Number], index: '2d', required: true},
  tags: [String],
  provider: {type: Schema.Types.ObjectId, required: true},
  voters: [VoteSchema],
  videos: [Schema.Types.ObjectId]
});

const Model = mongoose.model('Pin', PinSchema);

module.exports = Model;
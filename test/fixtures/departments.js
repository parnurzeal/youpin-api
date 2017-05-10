const ObjectId = require('mongoose').Types.ObjectId;

const DEPARTMENT_GENERAL_ID = require('./constants').DEPARTMENT_GENERAL_ID;
const DEPARTMENT_GENERAL_NAME = require('./constants').DEPARTMENT_GENERAL_NAME;
const DEPARTMENT_PUBLIC_RELATIONS_ID = require('./constants').DEPARTMENT_PUBLIC_RELATIONS_ID;
const DEPARTMENT_PUBLIC_RELATIONS_NAME = require('./constants').DEPARTMENT_PUBLIC_RELATIONS_NAME;
const DEPARTMENT_SUPER_ADMIN_ID = require('./constants').DEPARTMENT_SUPER_ADMIN_ID;
const DEPARTMENT_SUPER_ADMIN_NAME = require('./constants').DEPARTMENT_SUPER_ADMIN_NAME;

module.exports = [
  {
    _id: ObjectId(DEPARTMENT_SUPER_ADMIN_ID), // eslint-disable-line new-cap
    name: DEPARTMENT_SUPER_ADMIN_NAME,
    detail: 'Admins live here',
  },
  {
    _id: ObjectId(DEPARTMENT_GENERAL_ID), // eslint-disable-line new-cap
    name: DEPARTMENT_GENERAL_NAME,
    detail: 'An awesome department',
  },
  {
    _id: ObjectId(DEPARTMENT_PUBLIC_RELATIONS_ID), // eslint-disable-line new-cap
    name: DEPARTMENT_PUBLIC_RELATIONS_NAME,
    detail: 'PR officers live here',
  },
];

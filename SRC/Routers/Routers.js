const { Router } = require("express");
const router = Router();
const apiRoute = '/api';
const studentsControllers = require("../Controllers/studentsControllers")

router.get(apiRoute + '/students',studentsControllers.getAll);
router.post(apiRoute + '/students',studentsControllers.create);

module.exports = router;
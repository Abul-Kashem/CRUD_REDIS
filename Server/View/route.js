import express from "express"

import { getAllEmployees, addEmployee, editEmployee, deleteEmployee, getEmployeeById } from "../Controller/empController.js";

const router = express.Router();


router.get("/", getAllEmployees);
router.post("/add", addEmployee);
router.get("/:id", getEmployeeById);
router.put("/:id", editEmployee);
router.delete("/:id", deleteEmployee);

export default router;
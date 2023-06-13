import express from "express"

import { getAllEmployee, addEmployee, updateEmployee, deleteEmployee } from "../Controller/empController.js";

const router = express.Router();


router.get("/getAllEmp", getAllEmployee);
router.post("/addEmp", addEmployee);
router.patch("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);

export default router;
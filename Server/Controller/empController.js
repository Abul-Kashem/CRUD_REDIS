import Employee from "../Model/empSchema.js";

export const getAllEmployee = async (req, res) => {
    try {

        const employees = await Employee.find({});
        if (employees.length == 0) {
            return res.status(200).json({ message: "Employee not found." });
        }
        return res.status(200).json(employees);

    }
    catch (error) {
        return res.status(500).json({ message: "Internal error" });
    }
}

export const addEmployee = async (req, res) => {

    const newEmp = await Employee.findOne({ email: req.body.email });
    // console.log(req.body);

    try {
        if (!newEmp) {
            const employee = Employee(req.body)
            await employee.save();
            return res.status(201).json({ message: "Employee Added" });
        }
        return res.status(400).json({ message: "Employee already exist" });
    }

    catch (error) {
        return res.status(500).json({ message: `Internal error ${error}` });
    }
}

export const updateEmployee = async (req, res) => {
    // console.log(req.params.id)

    const update = Object.keys(req.body);
    const allowedActions = ["name", "email", "phone", "designation"];

    const isAllowed = update.every((key) => {
        return allowedActions.includes(key);
    });
    if (!isAllowed) {
        return res.status(400).json({ message: "Invalid update" });
    }

    try {

        const updateEmp = await Employee.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });
        if (!updateEmp) {
            return res.status(400).json({ message: "Employee not found" });
        }
        await updateEmp.save();

        return res.status(200).json(req.body);
    }
    catch (err) {
        return res.status(500).json({ message: `Internal error ${error}` });
    }

}

export const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Employee deleted" })
    }
    catch (err) {
        return res.status(500).json({ message: `Internal error ${error}` });
    }

}
import Employee from "../Model/empSchema.js";

// Get all employees
export const getAllEmployees = async (req, res) => {

    try {
        const emp = await Employee.find();

        res.status(200).json(emp);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }


}

// Save data of the employee in database

export const addEmployee = async (request, response) => {
    const employee = request.body;

    const newEmployee = new Employee(employee);
    try {
        await newEmployee.save();
        response.status(201).json(newEmployee);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Get a employee by id

export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const editEmployee = async (req, res) => {
    // console.log(req.params.id)
    let employee = req.body;

    const editEmployee = new Employee(employee);
    // console.log(editEmployee)
    try {
        // await Employee.updateOne({ _id: request.params.id }, editEmployee);
        // res.status(201).json(editEmployee);

        const updateEmp = await Employee.findByIdAndUpdate(req.params.id, {
            ...req.body,
        });
        await updateEmp.save();
        res.status(201).json(editEmployee);


    } catch (error) {
        res.status(409).json({ message: error.message });
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
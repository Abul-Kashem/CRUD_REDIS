import mongoose from "mongoose";
import validator from "validator";


const employeeSchema = mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            validate: (value) => {
                if (!validator.isEmail(value)) {
                    return new Error("Invalid email");
                }
            },
        },
        phone: {
            type: String,
            // required: true,
            trim: true,
            unique: true,
            validate: (value) => {
                if (!validator.isMobilePhone(value)) {
                    return new Error("Invalid email");
                }
            },
        },
        designation: {
            type: String,
            required: true,
            trim: true,
        },



    },
    {
        versionKey: false
    }
)

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
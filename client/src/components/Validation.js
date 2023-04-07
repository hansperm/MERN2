
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup  from 'yup';

export default Validation =() => {

const schema = yup.object().shape({
    email: yup.string().email().required("Valid Email is required!"),
    fname: yup.string().required("Enter your First name"),
    lname: yup.string().required("Enter your Last name"),
   // age: yup.number().positive().integer("Enter valid age"),
   // mobile: yup.number().positive().integer("Enter valid mobile number"),
    password: yup.string().min(4,'Password must be min of 4 characters').max(6, 'Password must be max of 6 characters').required("Password is required!"),
    confirmpas: yup.string().required('Confirm Password is required').oneOf([yup.ref("password")],"Password Dont matched!"),
    age: yup.number().typeError('Age must be a valid number'),
    mobile: yup.number().typeError('Enter a valid Mobile nos'),
    dob: yup.date().typeError('Enter a valid date')
  })
  
  const { register, handleSubmit, formState:{errors} ,reset} = useForm({
    resolver: yupResolver(schema),
  }) ;
  
  const onSubmit =(data) => {
    console.log(data);
    JSON.stringify(data);
   <p> console.log(data); </p>
    reset();
  }
  return 
}



import { Formik } from "formik";
import { Form } from "formik/dist/Form";
import { Button } from "react-bootstrap";
import CustomTextInput from "../app/common/form/CustomTextInput";


export default function LoginForm(){
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}
        >
            {({handleSubmit}) => (
                <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                    <CustomTextInput placeholder="Email or Username" name='email' />
                    <CustomTextInput placeholder='Password' name='password' type='password'/>
                    <Button variant='success' value='Login' type='submit'/>
                </Form>
            )}  
        </Formik>
    )
}
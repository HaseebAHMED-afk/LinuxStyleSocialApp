import React ,{FC} from 'react'
//@ts-ignore
import styles from './Global.module.css'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Button } from '@material-ui/core'
import FormField from '../Components/Utils/FormField'


interface ProfileProps {
    firstName: String,
    lastName: String,
    userName: String,
    age: Number,
    country: String,
    stateOrProvince: String,
    city: String,
    profession: String
}

const CreateProfile = () => {

    const ProfileInitialValues : ProfileProps = {
      firstName: '',
      lastName: '',
      userName: '',
      age: 0,
      country: '',
      stateOrProvince: '',
      city: '',
      profession: '',
    }

    const ProfileValidationSchema = Yup.object({
      firstName: Yup.string().required('Enter your first name'),
      lastName: Yup.string().required('Enter your last name'),
      userName: Yup.string().required('Enter a catchy username'),
      age: Yup.number().required('Must be 12 years or older').test((value) => value >= 12),
      country: Yup.string().required('Required'),
      stateOrProvince: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      profession: Yup.string().required('What do you do??'),
    })

    const ProfileOnSubmit = () => {
        console.log('profile created');
    }

    return (
 <div>
     <Formik 
     initialValues={ProfileInitialValues}
     validationSchema={ProfileValidationSchema}
     onSubmit={ProfileOnSubmit}
     >

        <Form>
            {
                () => {
                    <Form>
                        <FormField name='firstName' label='First Name' type='text' multiline={false} />
                    </Form>
                }
            }
        </Form>
     </Formik>
        </div>
    )
}

export default CreateProfile

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
 <div className={styles.profilePage} >
     <h1 className={styles.profileHeading} >Create a catchy profile</h1>
     <Formik 
     initialValues={ProfileInitialValues}
     validationSchema={ProfileValidationSchema}
     onSubmit={ProfileOnSubmit}
     >

            {
                () => (
                    <Form>
                        <FormField name='firstName' label='First Name' type='text' multiline={false} />
                        <FormField name='lastName' label='Last Name' type='text' multiline={false} />
                        <FormField name='userName' label='User Name' type='text' multiline={false} />
                        <FormField name='age' label='Age' type='number' multiline={false} />
                        <FormField name='country' label='Country' type='text' multiline={false} />
                        <FormField name='firstName' label='First Name' type='text' multiline={false} />
                        <FormField name='stateOrProvince' label='State or Province' type='text' multiline={false} />
                        <FormField name='city' label='City' type='text' multiline={false} />
                        <FormField name='profession' label='Profession' type='text' multiline={false} />
                        <Button variant='contained' color='primary' type='submit' className={styles.profileBtn} >Create my Profile</Button>
                    </Form>
    )
            }
     </Formik>
        </div>
    )
}

export default CreateProfile

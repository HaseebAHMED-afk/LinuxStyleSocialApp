import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
//@ts-ignore
import style from './NewPost.module.css'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import FormField from '../../Components/Utils/FormField'
import { Button } from '@material-ui/core'

interface PostFormValues {
    title: string,
    post: string
}

const NewPost = () => {

    const postInitialValues = {
        title: '',
        post: ''
    }

    const postSchema = Yup.object({
        title: Yup.string().required('Required'),
        post: Yup.string().required('Required')
    })

    const postOnSubmit = () => {
        console.log('post submitted');
        
    }
    return (
        <div>
            <SideBar />

            <div className={style.newPostPage} >
                <h1 className={style.PostPageMainHeader} >Write words that inspire generations</h1>
                <Formik
            
            initialValues={postInitialValues}
            validationSchema = {postSchema}
            onSubmit={postOnSubmit}
            >
                {
                    ({dirty,isValid}) => (
                        <Form>
                            <FormField name="title" label="Title" type="text" multiline={false}/>
                            <FormField name="post" label="Post" type="text" rows={5} multiline={true} />
                            <Button type='submit' variant='contained' color='primary'>Post</Button>
                        </Form>
                    )
                    
                }
            </Formik>
            </div>

            
        </div>
    )
}

export default NewPost

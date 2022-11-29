import { Formik, Form, Field} from "formik";
import Input from "../components/form/Input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";


export default function Contact() {
    return(
        <div>
            <Formik 
                initialValues={{
                    name: 'alper',
                    about:'',
                    accept: false,
                    avatar:'',
                    skills: [],
                    gender:0
                }}
                onSubmit={values => {
                    console.log(values)
                }}
                >
                {({values}) => (
                    <Form>
                        <Input label="ad-soyad" name="name"/> <br/>
                        <Field component="textarea" name="about"/> <br/>
                        <Checkbox label="kuralları kabul ediyorum" name="accept"/><br/>
                        <Field component="select" name="gender">
                            <option value={0}>Seçin</option>
                            <option value={2}>Erkek</option>
                            <option value={1}>Kadın</option>
                        </Field><br/>
                        <Field component="select" name="skills" multiple={true}>
                            <option value="react">React</option>
                            <option value="css">CSS</option>
                            <option value="html">HTML</option>
                        </Field><br/>
                        <File label="avatar" name="avatar"/>
                        <button disabled={!values.accept} name="submit">Gönder</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
import { useField } from "formik"
import { FiCheck} from "react-icons/fi"
export default function File({label, ...props}) {
    
    const [helpers,meta,field] = useField(props)

    const changeHandle = e => {
        helpers.setValue(e.target.files[0])
    }

    async function fileOpen() {
        try{
            const [fileHandle] = await window.showOpenFilePicker();
            const file = await fileHandle.getFile();
            helpers.setValue(file);
        }
        catch {
            helpers.setValue('')

        }

    }

    return(
        <div >
            <div>{label}</div>
            <button type="button" onClick={fileOpen} >
                {field.value && <>Dosya Seçildi <FiCheck size={15}/></>}
                {!field.value && 'Dosya Seç'}
            </button>
            {field.value && <button>Dosyayı kaldır</button>}
        </div>
    )
} 
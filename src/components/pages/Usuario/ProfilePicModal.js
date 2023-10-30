import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Profile from './PerfilUsuario';
import { storage } from './firebase';
import { ref, uploadBytes,listAll,getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid'
import './Usuario.css'


function ProfilePicModal (props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [imageUpload, setImageUpload] = useState(null)
    const [imageList,setImageList] = useState([])
    const [profPicUrl,setProfPicUrl] = useState()

    // const userEditPic = {
    //     id: props.usuario._id,
    //     profilePic: profPicUrl
    // }

    const imageListRef = ref(storage, 'saam_prof_pics/${props.usuario.ultimoNome}_${props.usuario.primeiroNome}-${props.usuario.idNurse}/')
//////////////////////////////////////////////////////////////////////////////////////////////
    const uploadImage = ()=>{
        if (imageUpload==null) return
        const imageRef = ref(storage, `saam_prof_pics/${props.usuario.ultimoNome}_${props.usuario.primeiroNome}-${props.usuario.idNurse}/${imageUpload.name+v4()}`)
        uploadBytes (imageRef,imageUpload).then ((snapshot)=>{
            alert('Image Uploaded!')
            getDownloadURL(snapshot.ref).then((url)=>{
                 //   setImageList((prev)=>[...prev,url])
                setImageList([url])
        })
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////
    //aqui quero enviar o url da imagem do user para a database
    const handleSubmit = async () => {
        props.setCustomProfPic(true)
        console.log('props.customProfPic_handleSubmit: '+props.customProfPic)
        setProfPicUrl(imageList)
        try {
            // console.log('url: '+url)
            console.log('imageList_handleSubmit: '+imageList)
            console.log('ProfPicUrl_handleSubmit: '+profPicUrl)
            // const edit = await fetch("http://localhost:5000/api/editUsuarioProfilePic", { method: "POST", body: JSON.stringify(userEditPic), headers: { "content-type": "application/json" } });
            // const res = await edit.json();
            handleClose();
            return
            // return res
        }catch(e){
            console.error(e)
        };
    }
//////////////////////////////////////////////////////////////////////////////////////////////
useEffect(()=>{console.log(imageList);
    console.log('profPicUrl: '+profPicUrl)
    //  const userEditPic= imageList[0]
    const userEditPic = {
        id: props.usuario._id,
        profilePic: imageList[0]
    }
    async function whatever() {
        
        const edit = await fetch("http://localhost:5000/api/editUsuarioProfilePic", { method: "POST", body: JSON.stringify(userEditPic), headers: { "content-type": "application/json" } });
        const res = await edit.json();
    props.setCustomProfPic(true)
        handleClose();
        return res
    }
    whatever()
    },[profPicUrl])
//////////////////////////////////////////////////////////////////////////////////////////////
useEffect(()=>{
    listAll(imageListRef).then((response)=>{
    console.log(response)
    response.items.forEach((item)=>{getDownloadURL(item).then((url)=>{setImageList((prev)=>[...prev, url])})}) 
    })
},[])
//////////////////////////////////////////////////////////////////////////////////////////////
const handleDefault = async () => {
    props.setCustomProfPic(false)
    console.log('props.customProfPic_handleDefault: '+props.customProfPic)
    console.log('imageList_handleDefault: '+imageList)
    console.log('ProfPicUrl_handleDefault: '+profPicUrl)
        handleClose();
        return
}
//////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Editar imagem de perfil.
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Escolha a sua imagem de perfil:</Modal.Title>
                </Modal.Header>
                <Modal.Body>                    
                    {/* <Profile type="file" placeholder={`${props.usuario.profilePic}`} onChange={(e) => setProfilePic(e.target.value)} autoFocus/> */}

                    {/* <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Escolha a sua imagem de perfil:</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder={`${props.usuario.profilePic}`}
                                onChange={(e) => setProfilePic(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                    </Form> */}

    <div className="App">
    <input type='file' onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
    <button onClick={uploadImage} >Upload image</button>

    {imageList.map((url)=>{
        return <img className='imgUploadProfPic' src={url}/>
    })}
    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleDefault}>
                        Perfil por defeito
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Guardar alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProfilePicModal;
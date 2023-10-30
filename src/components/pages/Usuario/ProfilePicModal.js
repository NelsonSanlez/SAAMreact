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

    const userEdit = {
        id: props.usuario._id,
        profilePic: profPicUrl,
    }

    //aqui quero enviar o url da imagem do user para a database
    const handleSubmit = async () => {
        try {
            setProfPicUrl(imageList)
            const edit = await fetch("http://localhost:5000/api/editUsuario", { method: "PUT", body: JSON.stringify(userEdit), headers: { "content-type": "application/json" } });
            const res = await edit.json();
            handleClose();
            return res
        }catch(e){
            console.error(e)
        }
  }


const imageListRef = ref(storage, 'saam_prof_pics/${props.usuario.ultimoNome}_${props.usuario.primeiroNome}-${props.usuario.idNurse}/')
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

useEffect(()=>{
  listAll(imageListRef).then((response)=>{
    console.log(response)
    response.items.forEach((item)=>{getDownloadURL(item).then((url)=>{setImageList((prev)=>[...prev, url])})}) 
  })
},[])


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
                    <Button variant="primary" onClick={handleSubmit}>
                        Guardar alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProfilePicModal;
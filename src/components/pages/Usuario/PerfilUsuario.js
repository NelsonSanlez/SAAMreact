import React, { useState, useRef } from "react";


function Profile() {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
  
    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = e => {
          current.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={imageUploader}
          style={{
            display: "none"
          }}
        />
        <div
          style={{
            height: "60px",
            width: "60px",
            border: "1px dashed black"
          }}
          onClick={() => imageUploader.current.click()}
        >
          <img
            ref={uploadedImage}
            style={{
              width: "100%",
              height: "100%",
              position: "acsolute"
            }}
          />
        </div>
        Click to upload Image
      </div>
    );
  }

export default Profile





/////////////////////////////////////////////////////////


// const Profile = () => {
//     const [imagecrop, setimagecrop] = useState(false); const [image, setimage] = useState("");
//     const [src, setsrc] = useState(false);
//     const [profile, setprofile] = useState([]);
//     const [pview, setpview] = useState(false);
//     const profileFinal = profile.map((item) => item.pview);
//     const onClose = () => {
//         setpview(null);
//     };

//     const onCrop = (view) => {
//     setpview (view);
//     };
//     const saveCropImage = () => {
//     setprofile([...profile, { pview }]); 
//     setimagecrop(false)}
//     // const img = "https://ui-avatars.com/api/?size=128&rounded=true&background=random&color=random&bold=true&length=3&name=${usuario.primeiroNome}+${usuario.ultimoNome}"
// return (
// <div>
//     <div>
//         <div>
//             <img
//                 style={{
//                     width: "200px",
//                     height: "200px",
//                     borderRadius: "50%",
//                     objectFit: "cover",
//                     border: "4px solid green",
//                 }}
//                     onclick={() => setimagecrop(true)}
//                     src={profileFinal.length? profileFinal: img}
//                     alt=""
//             />
//             <label htmlFor="" className="mt-3 font-semibold text-5xl">sfdsdfdf</label>
//                 <Dialog visible={imagecrop} header={()=>(<p htmlFor="" className="text-2xt font-semibold textColor" >Update Profile</p>)}
//                 onHide={()=>setimagecrop(false)}>
//                     <div className="confirmation-content flex flex-column align-items-center" >
//                         <Avatar width={500} height={400} onCrop={onCrop} onClose={onClose} src={src} shadingColor={"#474649"} backgroundColor={"#474649"}/>
//                         <div className="flex flex-column align-items-center mt-5 w-12">
//                             <div className="flex justify-content-around w-12 mt-4">
//                                 <Button onclick={saveCropImage} label="Save" icon="pi pi-check"/>
//                             </div>
//                         </div>
//                     </div>
//                 </Dialog>
//                     <InputText type="file" accept="image/*" style={{display:"none"}} onChange={(event)=>{
//                         const file = event.target.files[0]
//                         if (file && file.type.substring(0,5) === "image") {
//                             setimage(file)                            
//                         } else {
//                             setimage(null)
//                         }
//                     }}/>
//         </div>
//     </div>
// </div>
// )
// }
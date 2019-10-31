
var uploader_form = document.querySelector('.fileInput');

var UploadImagePhoto = document.querySelector('.submitButton');

var UserAvatarBlock = document.querySelector('.circle');


function ClickImageForm(){
    uploader_form.click();
}

function UserPhotoUploader(){
                console.log('chnaged');
                setTimeout(() => {
                    UploadImagePhoto.click();     
                }, 100);
               
}

UserAvatarBlock.addEventListener('click', ClickImageForm);


uploader_form.addEventListener('change', UserPhotoUploader);

import React from 'react';
import axios from 'axios';



class UserInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',
                    imagePreviewUrl: '',
                    pagelink: window.location.href,
                };
    }
 _handleSubmit(e) {
    var  form = document.querySelector('.PhootouploadForm');
    const formData = new FormData(form)
     e.preventDefault();
    fetch('/upload', {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(function(data){ 
        console.log(data +'asdasdasdsadsadasd')
    })
    .catch(function(err) {
        console.log(err)
    })
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  componentDidMount(){
      require('../Styles/ProfileStyles.css');
      require('../Js/profile_scripts');
  }
  render() {
    let {imagePreviewUrl} = 
    this.state;
    let $imagePreview = null;

    var  UserAvatar;
    if(this.props.avatar_url === '../UserDefaultMaleAvatar.png'){
        UserAvatar = require('../UserDefaultMaleAvatar.png');
        console.log('undooooooooooooo')
    }
    else{
        var saterr = this.props.avatar_url;
        UserAvatar = require("../Pictures of users/"+saterr+"");
    }
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt='sad' />);
    } else {
      $imagePreview = ( <img src={UserAvatar} alt="Error" />);
    }
        return(
            <section className = 'Userinfocontainer'>
                <div className='UserInformationBlock'>
                    <div className='UserTopInfo'>
                        <div className='UserAvatarCont'>
                            <div className='UserAvatarInfo'>
                                <div className="circle">
                                    {$imagePreview}
                                </div>
                                <p className='Username userinfotext'>{this.props.username}</p>
                                <p className='Username userinfotextzvanie'>{this.props.rank}</p>
                            </div>
                        </div>
                            <ul className='UserMenu'>
                                <li><a href="#test"> <i className="fas fa-user-cog"></i> Ваш профиль</a></li>
                                <li><a href="#test"> <i className="fas fa-envelope"></i> Мой сообщения</a></li>
                                <li><a href={this.props.User_photos_personal_link}> <i className="fas fa-images"></i> Фото <span>{this.props.Number_of_photos}</span></a></li>
                                <li><a href="#test"> <i className="fas fa-palette"></i> Настроики цветов</a></li>
                                <li><a href="#test"> <i className="fas fa-bug"></i> Жалобы</a></li>
                                <li><a href="#test"> <i className="fas fa-hammer"></i> Управление саитом</a></li>
                                <li><a href="#test"> <i className="fas fa-question"></i> Cтатистика</a></li>
                            </ul>
                    </div>
                    <form action="/upload" method="post"className='PhootouploadForm' encType="multipart/form-data" onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" 
                        type="file" accept="image/*" name="photo"
                        
                        onChange={(e)=>this._handleImageChange(e)}
                    />  
                    <input
                        type="text" defaultValue = {this.state.pagelink} name="pagelink"
                    /> 
                    <button className="submitButton" 
                        type="submit" 
                        onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                    </form>
                    <div className="imgPreview">
                    
                    </div>
                </div>
            </section>
        );
    }
}




class chechkSession extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: ' ',
            rank: " ",
            avatar_url: '../UserDefaultMaleAvatar.png',
            user_photo_names:'Пусто',
            Number_of_photos:' Не удалось наити/загрузить',
            session: "no",
            User_photos_personal_link: 'Не удалось наити'
         };
        
    }
    componentWillMount(){
        axios.get(window.location.href)
        .then(res => {
          const persons = res.data;
          console.log(persons.session +"response");
          console.log(persons + `persons`)

            this.setState({ 
                username: persons.username,
                rank: persons.rank,
                avatar_url: persons.avatar_url,
                user_photo_names: persons.user_photo_names,
                Number_of_photos: persons.Number_of_photos,
                session: persons.session,
                User_photos_personal_link: persons.User_photos_personal_link
            });
        })
    }
    render() {
        console.log(this.state.session+'render');
        const pStyle = {
            fontSize: '80px',
            color: '#fff',
            textAlign: 'center',
            background: '#232323',
            textShadow: '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18'
        };
        if(this.state.session !== "yes"){
            return <div><h3 style={pStyle}>Для просмотра даной страницы необходимо<a href='/login'>Проити авторизацию</a></h3></div>
        }
        else{
            return  <UserInfo 
            username = {this.state.username} 
            Number_of_photos = {this.state.Number_of_photos} 
            avatar_url = {this.state.avatar_url} 
            rank = {this.state.rank}
            User_photos_personal_link = {this.state.User_photos_personal_link} />
        }
       
    }
  }

export default chechkSession;
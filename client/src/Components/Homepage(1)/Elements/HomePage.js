import React from 'react';
//slider
import Slider from "react-slick";


import Crysis_photo from '../img/crysis.jpg';
import batle from '../img/batle.jpg';
import nfs from '../img/cover-5.jpg';
import Honor from '../img/ForHonor.jpg';
//images
import Logo from '../img/logo.gif';
//slider
function Header() {
    return(
        <header>
            <div className='Header_Container'>
                <div className='Header_Context_Block'>
                    <div className='Img_LogoCont'>
                        <img src={Logo} alt='Ошибка'/>
                    </div>
                    
                    <div className='col-sidebar'>
                        <div className='Container-form-seach'>
                            <form>
                                <input type='text' name='search' placeholder='Введите ваш запрос....' />
                                <span> <i className="fas fa-search"></i> </span>
                                <button><i className="fas fa-cog"></i> Разшыриный поиск</button>
                            </form>   
                        </div>               
                    </div>
                    <div className='Menu_Spisok_Container'>
                        <div className='Menu_spisok_block'>
                            <ul>
                                <li><i className="fas fa-comments"></i> <a href="#test">Форум</a></li>
                                <li><i className="fas fa-users"></i> <a href="#test">Про нас</a></li>
                                <li><i className="fas fa-coins"></i> <a href="#test">Донат</a></li>
                            </ul>   
                        </div>  
                    </div>  
                    <div className='exit_btn_container'>
                        <div className='exit_btn_block'>
                            <a href="/register"><i className="fas fa-user"></i> Личный кабинет</a>
                         </div>   
                    </div>     
                 </div>  
            </div>
        </header>
    );
}
function ProductsMenu() {
    return (
        <div className='Product_menu_container'>
            <div className='Product_menu_Block'>
                <ul className='MenuProdUl'>
                    <li className='Menu_Title'>
                        <a className='Menu_Title_Link' href="test">Платформа <i className="fas fa-check"></i></a>  
                        <ul className='Prods_ul'>
                            <li>
                                <a href="test">Android </a> 
                            </li>
                            <li>
                                <a href="test">Android </a> 
                            </li>
                        </ul>      
                    </li>
                    <li className='Menu_Title'>
                        <a className='Menu_Title_Link' href="test">Игры/Продукт <i className="fas fa-check"></i></a>  
                        <ul className='Prods_ul'>
                            <li>
                            <a href="test">Android</a> 
                            </li>
                        </ul>      
                    </li>
                    <li className='Menu_Title'>
                        <a className='Menu_Title_Link' href="test">Тип продукта <i className="fas fa-check"></i></a>  
                        <ul className='Prods_ul'>
                            <li>
                            <a href="test">Android</a> 
                            </li>
                        </ul>      
                    </li>
                    <li className='Menu_Title'>
                        <a className='Menu_Title_Link' href="test">Тип сортировки <i className="fas fa-check"></i></a>  
                        <ul className='Prods_ul'>
                            <li>
                            <a href="test">Android</a> 
                            </li>
                        </ul>      
                    </li>
                </ul>   
            </div>
        </div>   
    );
};
class ProductsSlider extends React.Component{
    render() {
        const settings = {
            centerMode:true,
         
            slidesToShow: 3,
        
            slidesToScroll: 1
        };
          return(
            <div className='Slider_Container'> 
            <div className='Slick_Block'>
            <Slider {...settings}>
                  <div className='ContextSlider'>
                  <div className='SliderTtileImgCont'>
                        <img src={Crysis_photo} alt='error' />
                        <h3>Crysis 3</h3>
                        <div className='Systems_inons'>
                        <i className="fab fa-apple"></i>
                        <i className="fab fa-windows"></i>
                        </div>   
                        <div className='ButtontsCont'>
                            <label className="container">
                            <input type="checkbox" defaultChecked="checked"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>
                        </div>   
                        <div className='Slider_Btn'>
                            <button className='Right_sbtn'>Button</button>
                            <button className='Left_sbtn'>Button</button>
                        </div>   
                        <div className="rating">
                            
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
  
                        <div className='Podrobni'>
                            ПОДРОБНИЕ
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                        tantas recteque ad, at possim aeterno</p>
                    </div>   
                 </div>  
                 
                 <div className='ContextSlider'>
                    <div className='SliderTtileImgCont'>
                        <img src={batle} alt='error' />
                        <h3>Battlefield 1</h3>
                        <div className='Systems_inons'>
                        <i className="fab fa-apple"></i>
                        <i className="fab fa-windows"></i>
                        </div>
                        <div className='ButtontsCont'>
                            <label className="container">
                            <input type="checkbox" defaultChecked="checked"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>
                        </div>   
                        <div className='Slider_Btn'>
                            <button className='Right_sbtn'>Button</button>
                            <button className='Left_sbtn'>Button</button>
                        </div> 
                        <div className="rating">
                            
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Podrobni'>
                            ПОДРОБНИЕ
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                        tantas recteque ad, at possim aeterno</p>
                    </div>   
                 </div>

                 <div className='ContextSlider'>
                 <div className='SliderTtileImgCont'>
                        <img src={Honor} alt='error' />
                        <h3>For Honor</h3>
                        <div className='Systems_inons'>
                        <i className="fab fa-apple"></i>
                        <i className="fab fa-windows"></i>
                        </div>
                        <div className='ButtontsCont'>
                            <label className="container">
                            <input type="checkbox" defaultChecked="checked"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='Slider_Btn'>
                            <button className='Right_sbtn'>Button</button>
                            <button className='Left_sbtn'>Button</button>
                        </div> 
                        <div className="rating">
                            
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Podrobni'>
                            ПОДРОБНИЕ
                        </div>   
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                        tantas recteque ad, at possim aeterno</p>
                    </div>   
                 </div>

                 <div className='ContextSlider'>
                 <div className='SliderTtileImgCont'>
                        <img src={nfs} alt='error' />
                        <h3>NFS: Rivals</h3>
                        <div className='Systems_inons'>
                        <i className="fab fa-apple"></i>
                        <i className="fab fa-windows"></i>
                        </div>
                        <div className='ButtontsCont'>
                            <label className="container">
                            <input type="checkbox" defaultChecked="checked"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>

                            <label className="container">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            </label>
                        </div>
                        <div className='Slider_Btn'>
                            <button className='Right_sbtn'>Button</button>
                            <button className='Left_sbtn'>Button</button>
                        </div> 
                        <div className="rating">
                            
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Podrobni'>
                            ПОДРОБНИЕ
                        </div>   
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                        tantas recteque ad, at possim aeterno</p>
                    </div>   
                 </div>
            </Slider>
          </div>
        </div>
          );
    }
}
function BestAads() {
    return(
        <div className='Aads_container'>
            
                    <div className='ads_block'>
                    <div className='line'>
                    </div>
                    <div className='Ad_Title'>
                    <h3>Последние публикации</h3>
                    </div>
                    <div className='Best_Ads_Container'>
                    <div className='Ads_Blocks'>
                        <div className='Ads_Image'>
                            <img src={Crysis_photo} alt='error' />
                        </div>
                        <div className='Ads_title'>
                        <h4>Far Cary Primal</h4>
                        </div>
                        <div className="rating ads_raitingblock">
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Ads_Opisanie'>
                        <div className='Systems_inons2'>
                            <i className="fab fa-apple"></i>
                            <i className="fab fa-windows"></i>
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                            tants require ad, at possim aeterno<br/>
                            delectus est, Vim eu tamquam<br/>
                            sederunt, et ius semper htmlForensubus<br/>
                            cu movent adipisci cum.
                        </p>
                        </div>
                            <div className='Price_Products'>
                                <h3>Цена: <span>30$</span></h3>
                                <button> Купить </button>
                            </div>  
                        </div>
                                                {/* blocks               */}
                                                <div className='Ads_Blocks'>
                        <div className='Ads_Image'>
                            <img src={Crysis_photo} alt='error' />
                        </div>
                        <div className='Ads_title'>
                        <h4>Far Cary Primal</h4>
                        </div>
                        <div className="rating ads_raitingblock">
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Ads_Opisanie'>
                        <div className='Systems_inons2'>
                            <i className="fab fa-apple"></i>
                            <i className="fab fa-windows"></i>
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                            tants require ad, at possim aeterno<br/>
                            delectus est, Vim eu tamquam<br/>
                            sederunt, et ius semper forensubus<br/>
                            cu movent adipisci cum.
                        </p>
                        </div>
                            <div className='Price_Products'>
                                <h3>Цена: <span>30$</span></h3>
                                <button> Купить </button>
                            </div>  
                        </div>
                        {/* // */}
                        
                        {/* blocks               */}
                        <div className='Ads_Blocks'>
                        <div className='Ads_Image'>
                            <img src={Crysis_photo} alt='error' />
                        </div>
                        <div className='Ads_title'>
                        <h4>Far Cary Primal</h4>
                        </div>
                        <div className="rating ads_raitingblock">
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Ads_Opisanie'>
                        <div className='Systems_inons2'>
                            <i className="fab fa-apple"></i>
                            <i className="fab fa-windows"></i>
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                            tants require ad, at possim aeterno<br/>
                            delectus est, Vim eu tamquam<br/>
                            sederunt, et ius semper forensubus<br/>
                            cu movent adipisci cum.
                        </p>
                        </div>
                            <div className='Price_Products'>
                                <h3>Цена: <span>30$</span></h3>
                                <button> Купить </button>
                            </div>  
                        </div>
                        {/* // */}
                                                {/* blocks               */}
                                                <div className='Ads_Blocks'>
                        <div className='Ads_Image'>
                            <img src={Crysis_photo} alt='error' />
                        </div>
                        <div className='Ads_title'>
                        <h4>Far Cary Primal</h4>
                        </div>
                        <div className="rating ads_raitingblock">
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Ads_Opisanie'>
                        <div className='Systems_inons2'>
                            <i className="fab fa-apple"></i>
                            <i className="fab fa-windows"></i>
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                            tants require ad, at possim aeterno<br/>
                            delectus est, Vim eu tamquam<br/>
                            sederunt, et ius semper forensubus<br/>
                            cu movent adipisci cum.
                        </p>
                        </div>
                            <div className='Price_Products'>
                                <h3>Цена: <span>30$</span></h3>
                                <button> Купить </button>
                            </div>  
                        </div>
                        {/* // */}
                                                {/* blocks               */}
                                                <div className='Ads_Blocks'>
                        <div className='Ads_Image'>
                            <img src={Crysis_photo} alt='error' />
                        </div>
                        <div className='Ads_title'>
                        <h4>Far Cary Primal</h4>
                        </div>
                        <div className="rating ads_raitingblock">
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Ads_Opisanie'>
                        <div className='Systems_inons2'>
                            <i className="fab fa-apple"></i>
                            <i className="fab fa-windows"></i>
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                            tants require ad, at possim aeterno<br/>
                            delectus est, Vim eu tamquam<br/>
                            sederunt, et ius semper htmlForensubus<br/>
                            cu movent adipisci cum.
                        </p>
                        </div>
                            <div className='Price_Products'>
                                <h3>Цена: <span>30$</span></h3>
                                <button> Купить </button>
                            </div>  
                        </div>
                        {/* // */}
                                                {/* blocks               */}
                                                <div className='Ads_Blocks'>
                        <div className='Ads_Image'>
                            <img src={Crysis_photo} alt='error' />
                        </div>
                        <div className='Ads_title'>
                        <h4>World of Warcraf</h4>
                        </div>
                        <div className="rating ads_raitingblock">
                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5" title="Rocks!">5 stars</label>
                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4" title="Pretty good">4 stars</label>
                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3" title="Meh">3 stars</label>
                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2" title="Kinda bad">2 stars</label>
                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1" title="Sucks big time">1 star</label>
                        </div>
                        <div className='Ads_Opisanie'>
                        <div className='Systems_inons2'>
                            <i className="fab fa-apple"></i>
                            <i className="fab fa-windows"></i>
                        </div>
                        <p>Lorem ipsum dolar sit amet, sed duis<br/>
                            tants require ad, at possim aeterno<br/>
                            delectus est, Vim eu tamquam<br/>
                            sederunt, et ius semper htmlForensubus<br/>
                            cu movent adipisci cum.
                        </p>
                        </div>
                            <div className='Price_Products'>
                                <h3>Цена: <span>30$</span></h3>
                                <button> Купить </button>
                            </div>  
                        </div>
                        {/* // */}
                        <div className='Show_ProsBut'>
                        <button> ПОКАЗАТЬ ВСЕ</button>
                    </div>
                    </div>
                    
                </div>    
        </div>
    );
}
function Footer() {
    return(
        <footer>
            <div className='Footer_Container'>
                <div className='Footer_Block'>
                    <div className='Footer_Menu'>
                    <ul>
                        <li><a href="test">О нас</a></li>
                        <li><a href="test">Контакты</a></li>
                        <li><a href="test">Оплата</a></li>
                        <li><a href="test">Помощь</a></li>
                     </ul>   
                     </div>
                     <div className='Social_Container'>
                         <div className='Soc_Blocks'>
                         <a href='#test'><i className="fab fa-vk"></i></a>
                         </div>
                         <div className='Soc_Blocks'>
                         <a href='#test'><i className="fab fa-facebook-f"></i></a>
                         </div>
                         <div className='Soc_Blocks'>
                         <a href='#test'><i className="fab fa-twitter"></i></a>
                         </div>
                     </div>   
                 </div>   
                 
            </div>
         </footer>   
    );
}
class HomepageElementsRender extends React.Component {
    componentDidMount(){
        require('../js/All.min.js');
        require('../Styles/HomepageStyles.css');
        fetch('/photos');
    }
    render(){
        return(
            <React.Fragment>
                <Header />
                <ProductsMenu />
                <ProductsSlider />
                <BestAads />
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomepageElementsRender;
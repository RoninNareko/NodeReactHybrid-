import React from 'react';
import axios from 'axios';


class Article extends React.Component {
  render() {
    const { author, text } = this.props.data
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
      </div>
    )
  }
}
class News extends React.Component {
  renderNews = () => {
    const { data } = this.props
    let newsTemplate = null
    if (data.length) {
      newsTemplate = data.map(function (item) {
        return <Article key={item.id} data={item} />
      })
    } else { newsTemplate = <p>К	сожалению	новостей	нет</p> }
    return newsTemplate
  }
  render() {
    const { data } = this.props
    return (<div className="news">								{this.renderNews()}								{data.length ? <strong className={'news__count'}>Всего	новостей:	{data.length} </strong> : null}						</div>);
  }
}
class Photos extends React.Component {
  state = {
    NewsArr:[{
      id:1,
      author:'yesss',
      text: 'В	четверг,	четвертого	числа...'
    },'2','3','4','5','6','4'],
    persons: []
  }
  componentDidMount() {
    require('../Js/photo');
    require('../Styles/photo_page.css');
    axios.get(window.location.href)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (
      <div className='ContainerPhotosPage'>
        <div className="titleUsername">
          <h1>Photos</h1>
        </div>
        <div className="UserPhotoscontainer">
          <News data={this.state.NewsArr}/>
        </div>
      </div>
    );
  }
}
export default Photos;
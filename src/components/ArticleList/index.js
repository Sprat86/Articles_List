import React, {Component} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends Component {
	render () {
		const articleElements = this.props.articles.map((item, index) =>
		// Передаем в компонент Article в качестве пропсов (article) объект item.
			<li key = {item.id} className='article-list_li'>
			<Article article = {item} defaultOpen = {index === 0} />
			</li>
	)
	return (		
			<ul>
				{articleElements}
			</ul>
		)
	}
}
import React, {Component} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends Component {
	state = {
		openArticleId: null
	}

	render () {
		const articleElements = this.props.articles.map((item, index) =>
		// Передаем в компонент Article в качестве пропсов (article) объект item.
			<li key = {item.id} className='article-list_li' onClick = {this.handleClick.bind(this, item.id)}>
			<Article article={item} isOpen={this.state.openArticleId === item.id} />
			</li>
	)
	return (		
			<ul>
				{articleElements}
			</ul>
		)
	}

	handleClick = openArticleId => {
		console.log(openArticleId);
		this.setState({ openArticleId })
	}
}
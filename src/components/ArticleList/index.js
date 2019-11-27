import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

export default class ArticleList extends PureComponent {
	state = {
		openArticleId: null
	}

	render () {
		const articleElements = this.props.articles.map((item, index) =>
		// Передаем в компонент Article в качестве пропсов (article) объект item.
			<li key = {item.id} className='article-list_li'>
			<Article article={item}
			isOpen={this.state.openArticleId === item.id}
			onButtonClick = {this.handleClick.bind(this, item.id)}
			/>
			</li>
	)
	return (
			<ul>
				{articleElements}
			</ul>
		)
	}

	handleClick = openArticleId => {
		this.setState({
			openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
		})
	}
}
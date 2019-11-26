import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList ( {articles} ) {
	const articleElements = articles.map(item =>
		// Передаем в компонент Article в качестве пропсов (article) объект item.
			<li key = {item.id} className='article-list_li'>
			<Article article = {item} />
			</li>
	)
	return (		
			<ul>
				{articleElements}
			</ul>
	)
}
import React, {Component} from 'react'
import ArticleList from './ArticleList/'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
	state = {
		reverted: false
	}

	render () {
	return(
		<div className= 'contaner'>
			<div className= 'jumbotron'>
				<h1 className= 'display-3'>
					Articles list
					<button className="btn btn-outline-primary btn-lg ml-5" onClick = {this.revert}>Revert</button>
				</h1>				
			</div>	
			<ArticleList articles = {this.state.reverted ? articles.reverse() : articles} />
		</div>
		)
	}

	revert = () => {
		this.setState({
		reverted: !this.state.reverted
		})
	}
}

export default App
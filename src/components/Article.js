import React, {Component} from 'react'

class Article extends Component {
	// Основная запись состояния компонента через конструктор:
	constructor(props){
		super(props)

		this.state = {
			isOpen: props.defaultOpen,
			count: 0
		}
	}

	// Экспериментальная запись: 
	// state = {
	// 	isOpen: props.defaultOpen
	// }

	shouldComponentUpdate (nextProps, nextState) {
		return this.state.isOpen !== nextState.isOpen || this.state.count !== nextState.count
	}

	componentWillMount () {
		console.log('component mounting');
	}

	componentWillReceiveProps (nextProps){
		if (nextProps.defaultOpen !== this.props.defaultOpen) {
			this.setState({
				isOpen: nextProps.defaultOpen
			})
		}
	}	

	componentWillUpdate () {
		console.log('will update');
	}

	render () {
		const {article} = this.props;
		// console.log(this.props);
		// В переменной body ставим условие: если this.state.isOpen в состоянии true, то показываем текст article.text,
		// если в состоянии false - рендерим "пустоту":
		const body = this.state.isOpen && <section className= 'card-text'>{article.text}</section>
		return (
			<div className= 'card mx-auto' style={{width: '50%'}}>
				<div className= 'card-header'>
					<h2 onClick={this.incrementCounter}>
						{article.title}
						<br />
						clicked {this.state.count}
						<button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
							{this.state.isOpen ? 'close' : 'open'}
						</button>
					</h2>
				</div>
				<div className= 'card-body'>
					{body}
					<h5 className= 'card-subtitle mb-2 text-muted'>
						creation date: {(new Date(article.date)).toDateString()}
					</h5>
				</div>
			</div>
		)
	}

	handleClick = () => {
		// console.log('---', 'clicked');
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	incrementCounter = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
}


export default Article
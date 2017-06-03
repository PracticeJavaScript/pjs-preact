import './style';
import { Component } from 'preact';
import r from 'random-js';
import Problem from './problem';
import probs from 'pjs-problems';
const random = r();

// console.log('probs:', probs);

const problems = [];
Object.entries(probs).forEach(subject => {
	problems.push(...subject[1]);
});
// console.log('problems:', problems);



const SEARCH = '//api.github.com/search/repositories';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.problems = problems;
		this.state = {
			currentIndex: this.getNextIndex(),
			currentProblem: this.getCurrentProblem()
		}
	}

	componentWillMount() {
		// this.setState({
		// 	currentIndex: this.getNextIndex(),
		// 	currentProblem: this.getCurrentProblem()
		// });
	}

	getNextIndex() {
		return random.integer(0, this.problems.length -1);
	}

	getCurrentProblem() {
		return this.problems[this.state.currentIndex];
	}

	getNextProblem() {
		return this.problems[this.getNextIndex()];
	}

	componentDidMount() {
		const newState = Object.assign({}, this.state, {
			currentProblem: this.getCurrentProblem()
		});
		this.setState(newState);
		console.log(this.state)
	}

	render(props, state) {
		return (
			<div>
				<h1>Example</h1>
				<div class="list">
					<Problem problem={state.currentProblem} />
				</div>
			</div>
		);
	}
}

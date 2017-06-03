import { Component } from 'preact';

export default class Problem extends Component {
	constructor(props) {
		super(props);
		// console.log('props:', props);
	}
	render(props, state){
		console.log('props.problem:', props.problem);
		// console.log('state:', state);
		return(
			<div class="problem">
				<p class="prompt"></p>
			</div>
		);
	}
}

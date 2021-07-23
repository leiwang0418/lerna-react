import { Component } from "react";
import { IntlProvider } from "react-intl";
import zh from "../compiled-lang/zh.json";

export default class Wrapper extends Component {
	render() {
		return (
			<IntlProvider locale="zh" messages={zh}>
				{this.props.children}
			</IntlProvider>
		);
	}
}

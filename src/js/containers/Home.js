import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		return (
      <div className="box">
        什么都没有
      </div>
		)
	}
}

export default connect()(Home)
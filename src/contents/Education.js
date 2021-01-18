import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="BFA" where="School Of Visual Arts  | NYC" />
<Widecard title="Full Stack Web Development" where="Columbia University Coding Bootcamp" from="8/20" to="1/21"/>
</div>
)
}
}
export default Education
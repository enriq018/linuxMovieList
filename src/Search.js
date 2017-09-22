import React from 'react';


var Search = (props) => (
<div>
<input type="text" onChange={(e) => props.result(e)} placeholder="Search for something.."/>
<button onClick={props.submit}>Try it</button>
</div>
)

export default Search
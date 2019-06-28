import React from 'react';
import { FormBuilder } from 'cb-react-forms';

function App() {
  return (
    <FormBuilder 
			onSubmit={data => console.log(data)}
		/>
  );
}

export default App;

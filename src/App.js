import React from 'react';

function App() {
  const value = 'Worldd';
  //return <div>Hello {value}</div>;

  const [data, setData] = React.useState('');

  React.useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      const aaa = text.concat("ddd")
      setData(aaa);
    })();
  });

  return <div>{data}</div>;
}

export default App;

import React from "react";

export default function App() {
  const htmlString: string = `<div><h1>Hello World</h1><p>This is a sample HTML string.</p></div>`;
  const fn = <T,>(params: T): void => {
    console.log("hello world" + params);
  };
  const arr: number[] = [1, 2, 3, 4, 5];
  const flag: boolean = true;
  return (
    <div className="app">
      <button onClick={() => fn(1)}>click</button>
      <a href="https://www.baidu.com">App</a>
      <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
      {flag ? arr.map((item) => <p key={item}>{item}</p>) : null}
    </div>
  );
}

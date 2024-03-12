import '../App.cssApp.css';
import { useState } from 'react'


/*
  创建和嵌套组件
  React 组件是返回标签的 JavaScript 函数：
*/
function MyButton() {
  const user = {
    name: 'kebi',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
  }


  return (
    <>
      <button className='btn'>
        i am a button
      </button>
      <h1>{user.name}</h1>
      <div style={{
        width: user.imageSize + 'px',
        height: user.imageSize + 'px',
        border: '1px solid red'
      }}></div>
    </>
  )
}


/* 条件渲染 */
function IfShow() {
  let content;
  let isLoggedIn = true

  if (isLoggedIn) {
    content = '我是 true 哦'
  } else {
    content = '我是 fasle'
  }

  return (
    <div>
      {content}
      <br></br>
      {isLoggedIn ? 'true true' : 'fasle fasle'}
      <br></br>
      {isLoggedIn && <MyButton />}
    </div>
  )
}

/* 渲染列表 */
function ShoppingList() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  return (
    products.map(item => {
      return (
        <li key={item.id} style={{ color: item.isFruit ? 'red' : 'yellow' }}>
          {item.title}
        </li>
      )
    })
  )
}

/* 响应事件 */
function ResponseEvnt() {
  function handleClick() {
    console.log('clicked')
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}

/* 更新界面 */
function UpdatePage() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClick}>
      clicked {count} times
    </button>
  )
}

/*
  使用 Hook
  以 use 开头的函数被称为 Hook。 useState 是 React 提供的一个内置 Hook。你也可以通过组合现有的 Hook 来编写属于你自己的 Hook.

  Hook 比普通函数更为严格。你只能在你的组件（后其他Hook）的顶层调用 Hook.如果你在一个条件或循环中使用 useState,请提取一个新的最近并在组件内部使用.
*/

/* 组件间共享数据 */
function ShareData() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function MyButton({ count, onClickCb }) {
    return (
      <button onClick={onClickCb}>
        Clicked {count} times
      </button>
    )
  }

  return (
    <div>
      <MyButton count={count} onClickCb={handleClick}></MyButton>
      <br />
      <MyButton count={count} onClickCb={handleClick}></MyButton>
    </div>
  )
}



function App() {
  return (
    <>
      <div className="App">
        hello wrold
      </div>
      <MyButton></MyButton>
      <IfShow></IfShow>
      <ShoppingList></ShoppingList>
      <ResponseEvnt></ResponseEvnt>
      <br />
      <UpdatePage></UpdatePage>
      <br />
      <UpdatePage></UpdatePage>
      <br />
      <ShareData></ShareData>
    </>
  );
}

export default App;

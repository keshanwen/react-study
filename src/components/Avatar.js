export function Avatar(props) {
  const { person, size = 200 } = props
  return (
    <>

      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
      <ShowAttr {...props}></ShowAttr>

    </>

  );
}

// 将 jsx 作为子组件传递
export function Card({ children }) {
  return (
    <div className='card'>
      {children}
    </div>
  )
}




function getImageUrl(person) {
  return 'https://img1.baidu.com/it/u=2652871943,2395933050&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889'
}

function ShowAttr(options) {
  console.log(options)
  return (<></>)
}

export default function ShowExample() {
  return (
    <>
      <Card>
        <Avatar person={{ name: 'kebi', imageId: '24' }}></Avatar>
        <Avatar size="100" person={{ name: 'kebi', imageId: '24' }}></Avatar>
      </Card>
    </>
  )
}

export function ShowExample2() {
  return (
    <>
      <Card>
        helo wrold
      </Card>
    </>
  )
}
export default function TodoList() {
  const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };


  return (
    <>
      <h1>Hedy { person.name } is Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      ></img>
      <ul style={person.theme}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  )
}
function header({title}) {
  return (
    <div>
    <header>
        <h1>{title}</h1>
    </header>   
    </div>
  )
}

header.defaultProps = {
    title : 'Task Tracker',
}

export default header

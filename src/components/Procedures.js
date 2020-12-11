
function Procedures(props) {
    const proceduresItems = props.proceduresList.map((p) => {
        return <li>{p}</li>
    })
    return(
        <>
            <h1>Procedures</h1>
            <ul>{proceduresItems}</ul>
        </>
    )
}

export default Procedures
const TestComponent = ({testData}) => {

    return(
        <>
            <h2>Test</h2>
            {testData.map(user => <div>
                <p>Namn: {user.name}</p>
                {user.age < 30 ? <p>Ålder: {user.age}</p> : <p>Ålder:30+</p>}
                <p>Stad: {user.location?.city?.zipCode}</p>
            </div>)}
            
        </>
    )
}

export default TestComponent
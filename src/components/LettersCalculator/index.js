import {useState} from 'react'
import {Container,Container1,Header,Label,InputElement,Para,Container2,Image} from './styled'

const LettersCalculator=()=>{
   const [count,setCount]=useState(0)
    const onChangeValue=(event)=>{
        setCount(event.target.value.length)
    }


    return(
        <Container>
            <Container1>
                <Header>Calculate the Letters you enter</Header>
                <Label htmlFor="input">Enter the phrase</Label>
                <br/>
                <InputElement placeholder="Enter the phrase" id="input" onChange={onChangeValue}/>
                <Para>No. of Letters: {count}</Para>
            </Container1>
            <Container2>
                <Image src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters calculator"/>
            </Container2>
        </Container>
    )

}

export default LettersCalculator;
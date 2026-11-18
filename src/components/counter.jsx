import React, {useState} from 'react'

function Counter() {
    const [angka, setangka] = useState(0)

    const handleDecrement = () => {
        setangka(angka - 1)
    }

    const handleIncrement = () => {
        setangka(angka + 1)
    }

    return (
    <div>
        <div className='form-control'>{angka}</div>
        <button className='btn btn-primary' onClick={handleDecrement}>
            dec
        </button>
        <button className='btn btn-primary' onClick={handleIncrement}>
            inc
        </button>
    </div>
  )
}

export default Counter  
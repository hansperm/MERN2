import { useNavigate} from 'react-router-dom'
export const OrderSummary =() => {
    const navigate = useNavigate()
    return <div>
        <h1>Order Confirmed!</h1>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
}
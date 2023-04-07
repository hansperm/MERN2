import { useNavigate} from 'react-router-dom'
import '../App.css'

export const Home =() => {
    
    const navigate = useNavigate()
        
    return (
    <div> 
<main>
<h1>This Is My React Reactions</h1>
  <div class="row">
      <div class="colm-logo">
           
              <h3>Reasons I Love React
              </h3><button onClick={() => navigate('order-summary')}>Place Order</button>
              <ul>
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
            </ul>
      </div>
      <div>
          <div class="form-container">
          
          
            <img src="../logo512.png" alt="react2" align="right"/>
          </div>
         
      </div>
      
  </div>
</main>
</div> 
    )
}








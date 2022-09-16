import './Watch.css'
import Time from './Time/Time'
function Watch(){
    return(
        <div className="screen__watch">
        <div className="screen">
         <Time/>
        </div>
        <div className='screenColumn'>
        <div className="circle"></div>
        <div className="btn"></div>   
        </div>     
        </div>

    )
}
export default Watch;
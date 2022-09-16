import './Clock.css'
import Lace from './Lace/Lace';
import Watch from './Watch/Watch'
import LaceBottom from './LaceBottom/LaceBottom';
function Clock(){
    return(
        <div className="watch">
        <Lace/>
        <Watch/>
        <LaceBottom/>
        </div>
    )
}
export default Clock;
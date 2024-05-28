import './App.css';
import List from './List';
import List2 from './List2'
import List3 from './List3'
import List4 from './List4'
import List5 from './List5'
import List6 from './List6'
import List7 from './List7'
import List8 from './List8'
import List9 from './List9'
import List10 from './List10'

function App() {
  return (
    <div className="App">
     
<div className="navbar">
  <div className="logo">
    <img src="https://www.unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="" />
  </div>

<div className="menu-bar">
  <div className="noti">
    <img src="	https://www.unfluke.in/static/media/bell-icon.d99e8edc.png" alt="" />
    <span class="material-symbols-outlined">
arrow_drop_down
</span>
  </div>
  <div className="coin">
    <img src="https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg" alt="" />
  <span>0</span>
  </div>
  <div className="profile">
    <img src="	https://www.unfluke.in/static/media/monkey.5456259d.jpg" alt="" />
    <span class="material-symbols-outlined">
arrow_drop_down
</span>
  </div>
</div>

</div>

<hr />

<div className="nav-list">
  <ul>
    <li> Leaderboard</li>
    <li>Historical Trading  <span class="material-symbols-outlined">
arrow_drop_down
</span></li>
    <li>Historical Charts</li>
    <li>Scaanners</li>
    <li>Alerts</li>
    <li>Basic Basket</li>
    <li>Advanced Basket</li>
    <li>Pricing</li>
    <li>My Earnings</li>
  </ul>
</div>

<div className="heading">LeaderBoards</div>

<div className="lead-top">
  <div className="lead-name">
    Basic Backtest
  </div>

  <div className="lead-btn">
Sllipage 0% <span class="material-symbols-outlined">
keyboard_arrow_down
</span>
</div>
</div>

<div className="lead-line">
  <ul>
    <li>Rank</li>
    <li className='name'>Name</li>
    <li>Calmar Ratio</li>
    <li>Overall Profit</li>
    <li>Avg.Daily Profit</li>
    <li>Win%(Day)</li>
    <li>Price (Rs)</li>
    <li>Action</li>
  </ul>
</div>

<List/>
<List2/>
<List3/>
<List4/>
<List5/>
<List6/>
<List7/>
<List8/>
<List9/>
<List10/>



    </div>
  );
}

export default App;

import './App.css';
import Slide from './components/Slide/slide';
import ReactPageScroller from 'react-page-scroller'

const goToPage = (pageNumber) => {
  this.reactPageScroller.goToPage(pageNumber);
}
function App() {

  return (
    <div className="App">
      <ReactPageScroller ref={c => this.reactPageScroller = c} >
        <Slide modelName={'Model F'} />
        <Slide modelName={'Model U'} />
        <Slide modelName={'Model C'} />
        <Slide modelName={'Model K'} />
      </ReactPageScroller>
    </div>
  );
}

export default App;

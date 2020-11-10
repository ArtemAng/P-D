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
        <Slide str={'slide 1'} color={'red'} />
        <Slide str={'slide 2'} чcolor={'green'} />
        <Slide str={'slide 3'} color={'blue'} />
        <Slide str={'slide 4'} color={'pink'} />
      </ReactPageScroller>
    </div>
  );
}

export default App;

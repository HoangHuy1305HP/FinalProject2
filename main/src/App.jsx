import React from 'react';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import FilterSidebar from './Components/FilterSidebar';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult/SearchResult';
import Result from './Components/Result';
import Result2 from './Components/Result2/Result2';
// import CarList from './Components/Card/CarList';
// import CarList2 from './Components/Card2/CarList2';
import CarList3 from './Components/Card3/CarList3';
import Review from './Components/Review/Review';
import Page from './Components/Page/Page'
import './App.css'
function App() {
  return (
    
    <div className='container'>
      <Header>
        <NavBar />
        {/* <div className='headerContent'>
          <h1>New Cars</h1>
          <p>Homepage - New Cars</p>
        </div> */}
        {/* <div className='headerContent'>
            <h1>Used Cars</h1>
            <p>Homepage - Used Cars</p>
        </div> */}
        <div className='headerContent'>
            <h1>Search Result</h1>
            <p>Homepage - Search - Search Result</p>
        </div>
        {/* <div className='headerContent'>
            <h1>Search Result</h1>
            <p>Homepage - Search - Search Result</p>
        </div> */}
      </Header>
      {/* <main style={{ display: 'flex' ,background:'black',width:'100%'}}>
        <FilterSidebar /> 
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
          <Search></Search>
          <Result></Result>
          <CarList></CarList>
          <Page></Page>
        </div>
        
      </main> */}
      {/* <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
          <Result></Result>
          <CarList2></CarList2>
          <Page></Page>
        </div>
      </main> */}
      <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
          <Result2></Result2>
          <CarList3></CarList3>
          {/* <SearchResult></SearchResult> */}
          {/* <CarList2></CarList2> */}
          <Page></Page>
        </div>
      </main>
      {/* <main style={{ display: 'flex' ,background:'black'}}>
        <FilterSidebar />
        <div style={{display:'flex', flexDirection:'column',margin:'148px'}}>
        <Search></Search>
          <Result2></Result2>
          <SearchResult></SearchResult>
          {/* <CarList2></CarList2> */}
          {/* <Page></Page>
        </div>
      </main> */} 

    </div>
  );
}

export default App;
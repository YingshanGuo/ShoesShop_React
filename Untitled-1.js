// Action
function receiveSuggestions(suggestions) {
  suggestionsStore.setSuggestions(suggestions);
}

function updateSearchQuery(query) {
  RemoteAPI.fetchSuggestions(query,(suggestions) => {
    receiveSuggestions(suggestions);
    queryStore.setQuery(query);
  });
}
let queryStore = (() => {  
 
let _querys = [];
  
  let emitter = new EventEmitter();
  
  return {
    getQuery() {
      return _querys;
    },
    
    setQuery(query) {
      _querys = query;
      emitter.emit("change");
    },
    
    addChangeListener(callback) {
      emitter.addListener("change",callback);
    },
  };
})();


let suggestionsStore = (() => {
  let _suggestions = [];
  
  let emitter = new EventEmitter();
  
  return {
    getSuggestions() {
      return _suggestions;
    },
    
    setSuggestions(suggestions) {
      _suggestions = suggestions;
      emitter.emit("change");
    },
    
    addChangeListener(callback) {
      emitter.addListener("change",callback);
    },
  };
})();

class QueryLengthView extends React.Component {
  componentDidMount() {
    queryStore.addChangeListener(this.forceUpdate.bind(this));
  }

  render() {
    let query = queryStore.getQuery();

    return (
      <div>Query length: {query.length}</div>
    );
  }
}

class SearchInputView extends React.Component {
  onChange(e) {
        let value = e.target.value;
   value.length>9  ? alert("输入值大于10位"): updateSearchQuery(value) ;
  }
    
  render() {
    return (
      <p>
        Country Name: <br/>
        <input  onChange={this.onChange.bind(this)} placeholder="enter country name"/>
      </p>
    );
  }
};

class SuggestionsDisplayView extends React.Component {
  componentDidMount() {
    suggestionsStore.addChangeListener(this.forceUpdate.bind(this));
  }
  chooseCountry(countryName,countryCode){
    console.log(countryName,countryCode);
    updateSearchQuery(countryName);
    let name=document.querySelector("input").value=countryName;
    
  }
  render() {
    let suggestions = suggestionsStore.getSuggestions();
    let count = suggestions.length;
    
    let content;
    if(count == 0) {
      content = "no matching country"
    } else {
      content = suggestions.map(({countryName,countryCode}) => {
        return <div onClick={this.chooseCountry.bind(this, countryName,countryCode)}>{countryName} - {countryCode}</div>
        
        // return <div onClick={() => { this.chooseCountry(countryName) }}>{countryName} - {countryCode}</div>
      });
    }
    return (
      <p>
        Matching Countries ({count}): <br/>
        {content}
      </p>
    );
  }
};

let App = () => {
  return (
    <div>
      <SearchInputView/>
      <QueryLengthView/>
      <h1>f</h1>
      <SuggestionsDisplayView/>
    </div>
  )
}

// initialize views
window.addEventListener("load",() => {
  React.render(<App/>,document.querySelector("#react-root"));
});


let FAKE_LATENCY = 300;
let RemoteAPI = {
  fetchSuggestions(query,callback) {
    setTimeout(() => {
      if(query == "") {
        callback([]);
        return;
      }
       // find all matching countries
      let suggestions = countriesData.filter(({countryName,code}) => {
        return countryName.toLowerCase().indexOf(query.toLowerCase()) != -1
      });
      callback(suggestions);
    },FAKE_LATENCY);
  }
}

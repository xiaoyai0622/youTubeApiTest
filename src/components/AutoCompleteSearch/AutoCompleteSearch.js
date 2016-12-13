/**
 * Created by xiaoY on 13/12/16.
 */
import React, { Component } from 'react'
import { AutoComplete }     from 'material-ui';
import JSONP                from 'jsonp';
import YoutubeFinder        from 'youtube-finder';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

//injectTapEventPlugin();

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';

class MaterialUIAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput  = this.onUpdateInput.bind(this);
    this.onNewRequest   = this.onNewRequest.bind(this);
    this.YoutubeClient  = YoutubeFinder.createClient({ key: this.props.apiKey });
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  performSearch() {
    const
      self = this,
      url  = googleAutoSuggestURL + this.state.inputValue;

    if(this.state.inputValue !== '') {
      JSONP(url, function(error, data) {
        let searchResults, retrievedSearchTerms;

        if(error) return console.log(error);

        searchResults = data[1];

        retrievedSearchTerms = searchResults.map(function(result) {
          return result[0];
        });

        self.setState({
          dataSource : retrievedSearchTerms
        });
      });
    }
  }

  onUpdateInput(inputValue) {
    const self = this;

    this.setState({
      inputValue : inputValue
    },function(){
      self.performSearch();
    });
  }

  onNewRequest(searchTerm) {

    this.props.callback(searchTerm);
    // const
    //   self   = this,
    //   params = {
    //     part        : 'id,snippet',
    //     type        : 'video',
    //     q           : this.state.inputValue,
    //     maxResults  : this.props.maxResults <= 50 ? this.props.maxResults : '50'
    //   }
    //
    // this.YoutubeClient.search(params, function(error,results) {
    //   if(error) return console.log(error);
    //   self.props.callback(results.items,searchTerm);
    //   self.setState({
    //     dataSource : [],
    //     inputValue : ''
    //   });
    // });
  }

  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete
        searchText          ={this.state.inputValue}
        floatingLabelText   ={this.props.placeHolder}
        filter              ={AutoComplete.noFilter}
        openOnFocus         ={true}
        dataSource          ={this.state.dataSource}
        onUpdateInput       ={this.onUpdateInput}
        onNewRequest        ={this.onNewRequest} />
    </MuiThemeProvider>
  }
}


export default MaterialUIAutocomplete;

import React from 'react';
import Plot from 'react-plotly.js';
import './index.css'
// import {
//   DropdownButton,
//   Dropdown
// } from 'react-bootstrap';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

class Stock extends React.Component {
    state = {
      stockChartXValues1: [],
      stockChartYValues1: [],
      stockChartXValues2: [],
      stockChartYValues2: [],
      StockSymbols : ['BTC','ETH','LTC','ZEC','DASH','XRP','XMR','BCH','NEO','ADA','EOS'],
    //   StockSymbols : ["611", "ABC", "ACP", "ACT", "ACT*", "ADA", "ADCN", "ADL", "ADX", "ADZ", "AE", "AGI", "AIB", "AIDOC", "AION", "AIR", "ALT", "AMB", "AMM", "ANT", "APC", "APPC", "ARC", "ARCT", "ARDR", "ARK", "ARN", "ASAFE2", "AST", "ATB", "ATM", "AURS", "AVT", "BAR", "BASH", "BAT", "BAY", "BBP", "BCD", "BCH", "BCN", "BCPT", "BEE", "BIO", "BLC", "BLOCK", "BLU", "BLZ", "BMC", "BNB", "BNT", "BOST", "BQ", "BQX", "BRD", "BRIT", "BT1", "BT2", "BTC", "BTCA", "BTCS", "BTCZ", "BTG", "BTLC", "BTM", "BTM*", "BTQ", "BTS", "BTX", "BURST", "CALC", "CAS", "CAT", "CCRB", "CDT", "CESC", "CHAT", "CJ", "CL", "CLD", "CLOAK", "CMT*", "CND", "CNX", "CPC", "CRAVE", "CRC", "CRE", "CRW", "CTO", "CTR", "CVC", "DAS", "DASH", "DAT", "DATA", "DBC", "DBET", "DCN", "DCR", "DCT", "DEEP", "DENT", "DGB", "DGD", "DIM", "DIME", "DMD", "DNT", "DOGE", "DRGN", "DRZ", "DSH", "DTA", "EC", "EDG", "EDO", "EDR", "EKO", "ELA", "ELF", "EMC", "EMGO", "ENG", "ENJ", "EOS", "ERT", "ETC", "ETH", "ETN", "ETP", "ETT", "EVR", "EVX", "FCT", "FLP", "FOTA", "FRST", "FUEL", "FUN", "FUNC", "FUTC", "GAME", "GAS", "GBYTE", "GMX", "GNO", "GNT", "GNX", "GRC", "GRS", "GRWI", "GTC", "GTO", "GUP", "GVT", "GXS", "HAC", "HNC", "HSR", "HST", "HVN", "ICN", "ICOS", "ICX", "IGNIS", "ILC", "INK", "INS", "INSN", "INT", "IOP", "IOST", "ITC", "KCS", "KICK", "KIN", "KLC", "KMD", "KNC", "KRB", "LA", "LEND", "LEO", "LINDA", "LINK", "LOC", "LOG", "LRC", "LSK", "LTC", "LUN", "LUX", "MAID", "MANA", "MCAP", "MCO", "MDA", "MDS", "MIOTA", "MKR", "MLN", "MNX", "MOD", "MOIN", "MONA", "MTL", "MTN*", "MTX", "NAS", "NAV", "NBT", "NDC", "NEBL", "NEO", "NEU", "NEWB", "NGC", "NKC", "NLC2", "NMC", "NMR", "NULS", "NVC", "NXT", "OAX", "OBITS", "OC", "OCN", "ODN", "OK", "OMG", "OMNI", "ORE", "ORME", "OST", "OTN", "OTX", "OXY", "PART", "PAY", "PBT", "PCS", "PIVX", "PIZZA", "PLBT", "PLR", "POE", "POLY", "POSW", "POWR", "PPC", "PPT", "PPY", "PRC", "PRES", "PRG", "PRL", "PRO", "PURA", "PUT", "QASH", "QAU", "QSP", "QTUM", "QUN", "R", "RBIES", "RCN", "RDD", "RDN", "RDN*", "REBL", "REE", "REP", "REQ", "REV", "RGC", "RHOC", "RIYA", "RKC", "RLC", "RPX", "RUFF", "SALT", "SAN", "SBC", "SC", "SENT", "SHIFT", "SIB", "SMART", "SMLY", "SMT*", "SNC", "SNGLS", "SNM", "SNT", "SPK", "SRN", "STEEM", "STK", "STORJ", "STRAT", "STU", "STX", "SUB", "SUR", "SWFTC", "SYS", "TAAS", "TESLA", "THC", "THETA", "THS", "TIO", "TKN", "TKY", "TNB", "TNT", "TOA", "TRC", "TRIG", "TRST", "TRUMP", "TRX", "UBQ", "UNO", "UNRC", "UQC", "USDT", "UTK", "UTT", "VEE", "VEN", "VERI", "VIA", "VIB", "VIBE"," VOISE", "VOX", "VRS", "VTC"," VUC"," WABI", "WAVES", "WAX", "WC", "WGR"," WINGS", "WLK", "WOP", "WPR", "WRC", "WTC", "XAUR", "XBP", "XBY", "XCP", "XCXT", "XDN", "XEM", "XGB", "XHI", "XID", "XLM", "XMR", "XNC", "XRB", "XRP", "XTO", "XTZ", "XUC", "XVG", "XZC", "YEE", "YOC", "YOYOW"," ZBC", "ZCL", "ZEC", "ZEN", "ZIL", "ZNY", "ZRX", "ZSC"],
      currency : ''
    }


    handleSelect = e => {
      console.log(e.target.value)
      this.setState(
        {
          currency: e.target.value,
        })
      this.fetchStock(e.target.value)
      // );
    };




  componentDidMount() {
    this.fetchStock();
  }


  fetchStock(stock="") {
    const This = this;
    // console.log(pointerToThis);
    const API_KEY = 'SE1LUFU0BECNTN8Q';
    // let StockSymbol = 'BTC';
    console.log(stock)
    let API_Call = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${stock}&market=SAR&apikey=${API_KEY}`
    // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction1 = [];
    let stockChartYValuesFunction1 = [];
    let stockChartXValuesFunction2 = [];
    let stockChartYValuesFunction2 = [];
    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Time Series (Digital Currency Daily)']) {
            stockChartXValuesFunction1.push(key);
            stockChartYValuesFunction1.push(data['Time Series (Digital Currency Daily)'][key]['1a. open (SAR)']);
          }

          // console.log(stockChartXValuesFunction);
          This.setState({
            stockChartXValues1: stockChartXValuesFunction1,
            stockChartYValues1: stockChartYValuesFunction1
          })
          

          for (var k in data['Time Series (Digital Currency Daily)']) {
            stockChartXValuesFunction2.push(k);
            stockChartYValuesFunction2.push(data['Time Series (Digital Currency Daily)'][k]['1b. open (USD)']);
          }

          // console.log(stockChartXValuesFunction);
          This.setState({
            stockChartXValues2: stockChartXValuesFunction2,
            stockChartYValues2: stockChartYValuesFunction2
          });
        }
     
      ) 
  }


  render() {
    // console.log(currency)
    return (
      <div style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rKNW2OdhQdZDzu0xlUWXawq6FoJeFOJLzZRujq8pj3eRctjI&s')"}} >

        <h3 style={{color: "lightgrey", 'text-align':'center'}}>Daily Cryptocurrency Chart</h3>
        {/* <label> */}
        <center>
        <select style={{color: "grey", 'text-align':'center'}} onChange={this.handleSelect}>
        <option>Make a Choice Here ..</option>
        {this.state.StockSymbols.map(stSymbol=><option  value={stSymbol}>{stSymbol}</option>)}
       </select>
       <br></br>
       <Plot
          data={[
            {
              x: this.state.stockChartXValues1,
              y: this.state.stockChartYValues1,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'green'},
              name: 'SAR',
            },
            {
              x: this.state.stockChartXValues2,
              y: this.state.stockChartYValues2,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'blue'},
              name: 'USD', 
            }
          ]}
          layout={{width: 720, height: 440}}
        />

        </center>
    

     {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton> */} 

{/* <Autocomplete
      style={{ width: 200 }}
      options={StockSymbols}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option}
      renderOption={option => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          fullWidth
          inputProps={{
            ...params.inputProps,
            autoComplete: 'disabled', // disable autocomplete and autofill
          }}
        />
      )}
    /> */}

 

      </div>
    )
  }
}

export default Stock;
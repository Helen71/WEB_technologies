
class Stockexchange {
 
  constructor(API, marks, fstatic, fdynamic, token) {
    this.API = API;
    this.marks = marks;
    this.static  = fstatic;
    this.dynamic = fdynamic;
    this.token   = token;
    this.time = Date.now();
  }

  async obtain_data(gain_Url) {
    let data = await this.set_data(gain_Url);
    return this.handle(data);
  }

  get_link(StatFunc = false) {
    const mrk = this.get_inquiry(this.marks, "marks");
    const flt = this.getFilters(StatFunc); 
    return `${this.API}?${mrk}&${flt}&types=quote&token=${this.token}`
  }

  get_inquiry(args, name) {
    let query = name + "=";
    for (const arg of args) {
      query += arg + ',';
    }
    return query.substring(0, query.length - 1); 
  }
 
  handle(data) {
    let dataArray = [];

    for (var key in data) {
      let quote = data[key]["quote"];
      quote.previousClose = (quote.previousClose - quote.latestPrice).toFixed(2)
      dataArray.push(quote);
    }

    return dataArray;
  }
  getFilters(StatFunc) {
    if (StatFunc) {
      return this.get_inquiry(this.static.concat(this.dynamic), "filter")
    }
    return this.get_inquiry(this.dynamic, "filter")
  }

  upka(data) {
    let tableData = [];
    const keys = Object.keys(data[0])  
    for (const key of keys) {
      tableData.push(document.getElementsByClassName(key));
    }

    
    for (let i = 0; i < data.length; i++) {
      let values = Object.values(data[i]) 
      for (let j = 0; j < values.length; j++) {
        tableData[j][i].innerHTML = values[j];
      }
    }
    this.time = Date.now(); 
  }
  async set_data(url) {
    let reply = await fetch(url);

    if (!reply.ok) {
      console.log("Error HTTP code: " + reply.status);
      return "";
    }
    return reply.json();
  }

  upkacurtime() {
    let timeDiff = (Date.now() - this.time) / 1000 
    document.getElementById('time').textContent = timeDiff.toFixed(1);
  }

 async upkawork(partialUrl) {
    let data = await this.obtain_data(partialUrl);
    this.upka(data);
  }

  
  async new_table(fullUrl, set_column) {
    let data = await this.obtain_data(fullUrl);
    this.new_Table(data, set_column);
  }

  new_Table(strings, set_column) {
    let html = '<table id="data-table">';
    html += '<tr>';
   for (let j of set_column) {
      html += '<th>' + j + '</th>';
    }

    html += '</tr>';
    for (let i = 0; i < strings.length; i++) {
      html += '<tr>';
      for (let j in strings[i]) {
        // Adding classes for fields with the same type of information for the possibility of future updates.
        html += `<td class="${j}">` + strings[i][j] + '</td>';
      }
      html += '</tr>';
    }
    html += '</table>';
    document.getElementById('storage').innerHTML = html;
  }

 
  main() {
    const fullURL = this.get_link(true); 
    const partialURL = this.get_link(); 
    let set_column = ["Nomination of company", "Nomination of position name", "The Latest priсe", "The Latest priсe delta"];
    this.new_table(fullURL, set_column) 

    // Run worker wich will update the timer on the page every 0.1 second.
    rxjs.interval(100)
      .subscribe(() => {
        this.upkacurtime();
      });

    //updating every 20 seconds
    rxjs.interval(20000)
      .subscribe(() => {
        this.upkawork(partialURL);
      });
  }
}
companies = [
  "AAPL",
  "FXWO",
  "FXRW",
  "AMZN",
  "FXTB",
  "FZUS",
  "NEXON",
  "GOOGLE"
]

// Fields that won't be dynamicly updated.
fstatic = ["symbol", "companyName"]
// Fields that will be dynamicly updated.
fdynamic = ["latestPrice", "previousClose"]

new Stockexchange("https://cloud.iexapis.com/v1/stock/market/batch",
  companies,
  fstatic,
  fdynamic,
  "token-placeholder").main();
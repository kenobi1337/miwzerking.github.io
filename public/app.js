

window.onload = function() {
    getCovidStat();
    getCovidStatCountry();
    getQuickFact();
    getMapInfo();
    getCovidOlderStat();
}
/*function getCovidStat() {
    fetch('https://api.covid19api.com/')
    .then(function(response) {return response.json})
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
}
*/
let global_confirmed_cases_older;
let global_deaths_older;
let global_recovered_older;
let global_new_confirmed_cases_older;
let global_new_deaths_older;
let global_new_recovered_older;
function getCovidOlderStat() {
  fetch('https://corona.lmao.ninja/v2/all?yesterday').then(function(response){
      response.json().then(function(data) {
        console.log(data)
          let global_confirmed_cases = data.cases;

          let global_deaths = data.deaths;

          let global_recovered = data.recovered;

          let global_new_confirmed_cases = data.todayCases;
          let global_new_deaths = data.todayDeaths;
          let global_new_recovered = data.todayRecovered;
  
            global_confirmed_cases_older = global_confirmed_cases;
            global_deaths_older = global_deaths;
            global_recovered_older = global_recovered;
            global_new_confirmed_cases_older = global_new_confirmed_cases;
            global_new_deaths_older = global_new_deaths;
            global_new_recovered_older = global_new_recovered;

      });
  }).catch(function(error) {
      console.log('Fetch Error:', error);
  })
  setTimeout(getCovidStat, 1011)
  };
function getCovidStat() {
  fetch('https://corona.lmao.ninja/v2/all?yesterday').then(function(response){
      response.json().then(function(data) {
        console.log(data)
          let global_confirmed_cases = data.cases;

          let global_deaths = data.deaths;

          let global_recovered = data.recovered;

          let global_new_confirmed_cases = data.todayCases;
          let global_new_deaths = data.todayDeaths;
          let global_new_recovered = data.todayRecovered;
          let global_update = data.updated;
          let mili = Math.abs(Date.now() - global_update);
          document.getElementById('infected_global').innerHTML = global_confirmed_cases.toLocaleString('en');
          document.getElementById('death_global').innerHTML = global_deaths.toLocaleString('en');
          document.getElementById('recovered_global').innerHTML = global_recovered.toLocaleString('en');
          document.getElementById('new_confirmed_case').innerHTML = global_new_confirmed_cases.toLocaleString('en');
          document.getElementById('new_death').innerHTML = global_new_deaths.toLocaleString('en');
          document.getElementById('new_recovered').innerHTML = global_new_recovered.toLocaleString('en');
          document.getElementById('latest_update_global').innerHTML = `${Math.floor((mili / 1000) / 60)} minutes ago`;
          window.onload = () => {
            global_confirmed_cases_older = global_confirmed_cases;
            global_deaths_older = global_deaths;
            global_recovered_older = global_recovered;
            global_new_confirmed_cases_older = global_new_confirmed_cases;
            global_new_deaths_older = global_new_deaths;
            global_new_recovered_older = global_new_recovered;
          }
          if (document.getElementById('infected_global').innerHTML !== global_confirmed_cases_older.toLocaleString('en')) {
            document.getElementById('infected_global').style.color = "#FFAE42";
          } else if (document.getElementById('death_global').innerHTML !== global_deaths_older.toLocaleString('en')) {
            document.getElementById('death_global').style.color = "#FFAE42";
          } else if (document.getElementById('recovered_global').innerHTML !== global_recovered_older.toLocaleString('en')) {
            document.getElementById('recovered_global').style.color = "#FFAE42";
          } else if (document.getElementById('new_confirmed_case').innerHTML !== global_new_confirmed_cases_older.toLocaleString('en')) {
            document.getElementById('new_confirmed_case').style.color = "#FFAE42";
          } else if (document.getElementById('new_death').innerHTML !== global_new_deaths_older.toLocaleString('en')) {
            document.getElementById('new_death').style.color = "#FFAE42";
          } else if (document.getElementById('new_recovered').innerHTML !== global_new_recovered_older.toLocaleString('en')) {
            document.getElementById('new_recovered').style.color = "#FFAE42";
          } else {
            document.getElementById('infected_global').style.color = "red";
            document.getElementById('death_global').style.color = "black";
            document.getElementById('recovered_global').style.color = "green";
            document.getElementById('new_confirmed_case').style.color = "black";
            document.getElementById('new_death').style.color = "black";
            document.getElementById('new_recovered').style.color = "green";
          }

      });
  }).catch(function(error) {
      console.log('Fetch Error:', error);
  })
  setTimeout(getCovidStat, 60000)
  };
function getCovidStatCountry() {
    fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort').then(function(response){
        response.json().then(function(data) {
          console.log(data)
            for (let i = 0; i < data.length; i++) {
              let flag = data[i].countryInfo.flag;
              let country = data[i].country;
              let infected = data[i].cases;
              let deaths = data[i].deaths;
              let recovered = data[i].recovered;
              let new_infected = data[i].todayCases;
              let new_deaths = data[i].todayDeaths;
              let new_recovered = data[i].todayRecovered;
              let letest_update = data[i].updated


              document.getElementById(i+'_flag').src = flag;
              document.getElementById(i).innerHTML = country;
              document.getElementById(i+'_infected').innerHTML = infected.toLocaleString('en');
              document.getElementById(i+'_death').innerHTML = deaths.toLocaleString('en');
              document.getElementById(i+'_recovered').innerHTML = recovered.toLocaleString('en');
              document.getElementById(i+'_new_confirmed_case').innerHTML = new_infected.toLocaleString('en');
              document.getElementById(i+'_new_death').innerHTML = new_deaths.toLocaleString('en');
              document.getElementById(i+'_new_recovered').innerHTML = new_recovered.toLocaleString('en');
              document.getElementById(i+'_latest_update').innerHTML = `${Math.floor(((Date.now() - letest_update) / 1000) / 60)} minutes ago`;
            }
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    })
    setTimeout(getCovidStatCountry, 10000)
    };
function getCovidStatForDeveloper() {
    fetch('https://covid19-api.com/country/all?format=json').then(function(response){
        response.json().then(function(data) {
            console.log(data);
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    })};
function getQuickFact() {
    fetch('https://corona.lmao.ninja/v2/all?yesterday').then(function(response){
        response.json().then(function(data) {
              console.log(data)
              let global_confirmed_cases = data.cases;
              let global_deaths = data.deaths;
              let global_recovered = data.recovered;
              let global_new_confirmed_cases = data.todayCases;
              let global_new_deaths = data.todayDeaths;
              let global_new_recovered = data.todayRecovered;
              let update = data.updated;
              document.getElementById('quick_fact_total_confirmed').innerHTML = global_confirmed_cases.toLocaleString('en');
              document.getElementById('quick_fact_total_deaths').innerHTML = global_deaths.toLocaleString('en');
              document.getElementById('quick_fact_total_recovered').innerHTML = global_recovered.toLocaleString('en');
              document.getElementById('quick_fact_new_infected').innerHTML = global_new_confirmed_cases.toLocaleString('en');
              document.getElementById('quick_fact_new_deaths').innerHTML = global_new_deaths.toLocaleString('en');
              document.getElementById('quick_fact_new_recovered').innerHTML = global_new_recovered.toLocaleString('en');
              document.getElementById('update_quick_fact').innerHTML = `${Math.floor(((Date.now() - update) / 1000) / 60)} minutes ago`

              if (document.getElementById('quick_fact_total_confirmed').innerHTML !== global_confirmed_cases_older.toLocaleString('en')) {
                document.getElementById('quick_fact_total_confirmed').style.color = "#FFAE42";
              } else if (document.getElementById('quick_fact_total_deaths').innerHTML !== global_deaths_older.toLocaleString('en')) {
                document.getElementById('quick_fact_total_deaths').style.color = "#FFAE42";
              } else if (document.getElementById('quick_fact_total_recovered').innerHTML !== global_recovered_older.toLocaleString('en')) {
                document.getElementById('quick_fact_total_recovered').style.color = "#FFAE42";
              } else if (document.getElementById('quick_fact_new_infected').innerHTML !== global_new_confirmed_cases_older.toLocaleString('en')) {
                document.getElementById('quick_fact_new_infected').style.color = "#FFAE42";
              } else if (document.getElementById('quick_fact_new_deaths').innerHTML !== global_new_deaths_older.toLocaleString('en')) {
                document.getElementById('quick_fact_new_deaths').style.color = "#FFAE42";
              } else if (document.getElementById('quick_fact_new_recovered').innerHTML !== global_new_recovered_older.toLocaleString('en')) {
                document.getElementById('quick_fact_new_recovered').style.color = "#FFAE42";
              } else {
                document.getElementById('quick_fact_total_confirmed').style.color = "yellow";
                document.getElementById('quick_fact_total_deaths').style.color = "red";
                document.getElementById('quick_fact_total_recovered').style.color = "green";
                document.getElementById('quick_fact_new_infected').style.color = "blue";
                document.getElementById('quick_fact_new_deaths').style.color = "blue";
                document.getElementById('quick_fact_new_recovered').style.color = "blue";
              }
            });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
        })
        setTimeout(getQuickFact, 60000)
        };
const country_name_element = document.querySelector(".country .name");
const total_case_element = document.querySelector(".total-case .value");
const new_case_element = document.querySelector(".total-case .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

const ctx = document.getElementById("axes_line_chart").getContext("2d");

let app_data = [],
    cases_list = [],
    recovered_list = [],
    deaths_list = [],
    dates = [];

let country_code = geoplugin_countryCode();
country_list.forEach( country => {
    if (country.code == country_code) {
        user_country = country.name;
    }
})

function fetchData(country) {
    user_country = country;
    country_name_element.innerHTML = "Loading...";
  
    (cases_list = []),
      (recovered_list = []),
      (deaths_list = []),
      (dates = []),
      (formatedDates = []);
  
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    const api_fetch = async (country) => {
      await fetch(
        "https://api.covid19api.com/total/country/" +
          country +
          "/status/confirmed",
        requestOptions
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((entry) => {
            dates.push(entry.Date);
            cases_list.push(entry.Cases);
          });
        });
      await fetch(
        "https://api.covid19api.com/total/country/" +
          country +
          "/status/recovered",
        requestOptions
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((entry) => {
            recovered_list.push(entry.Cases);
          });
        });
  
      await fetch(
        "https://api.covid19api.com/total/country/" + country + "/status/deaths",
        requestOptions
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.forEach((entry) => {
            deaths_list.push(entry.Cases);
          });
        });
  
      updateUI();
    };
  
    api_fetch(country);
  }
  
  fetchData(user_country);

  function updateUI() {
    updateStats();
    axesLinearChart();
  }
  
  function updateStats() {
    const total_cases = cases_list[cases_list.length - 1];
    const new_confirmed_cases = total_cases - cases_list[cases_list.length - 2];
  
    const total_recovered = recovered_list[recovered_list.length - 1];
    const new_recovered_cases =
      total_recovered - recovered_list[recovered_list.length - 2];
  
    const total_deaths = deaths_list[deaths_list.length - 1];
    const new_deaths_cases = total_deaths - deaths_list[deaths_list.length - 2];
  
    country_name_element.innerHTML = user_country;
    total_case_element.innerHTML = total_cases.toLocaleString('en');
    new_case_element.innerHTML = `+${new_confirmed_cases}`.toLocaleString('en');
    recovered_element.innerHTML = total_recovered.toLocaleString('en');
    new_recovered_element.innerHTML = `+${new_recovered_cases}`.toLocaleString('en');
    deaths_element.innerHTML = total_deaths.toLocaleString('en');
    new_deaths_element.innerHTML = `+${new_deaths_cases}`.toLocaleString('en');
  
    // format dates
    dates.forEach((date) => {
      formatedDates.push(formatDate(date));
    });
  }

  let my_chart;
function axesLinearChart() {
  if (my_chart) {
    my_chart.destroy();
  }

  my_chart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Cases",
          data: cases_list,
          fill: false,
          borderColor: "#FFF",
          backgroundColor: "#FFF",
          borderWidth: 1,
        },
        {
          label: "Recovered",
          data: recovered_list,
          fill: false,
          borderColor: "#009688",
          backgroundColor: "#009688",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: deaths_list,
          fill: false,
          borderColor: "#f44336",
          backgroundColor: "#f44336",
          borderWidth: 1,
        },
      ],
      labels: formatedDates,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
const monthsNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  function formatDate(dateString) {
    let date = new Date(dateString);
  
    return `${date.getDate()} ${monthsNames[date.getMonth() - 1]}`;
  }
  function getMapInfo() {
    fetch('https://corona.lmao.ninja/v2/countries')
    .then(function(response) {return response.json})
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })
}
const getColorFromCount = count => {
    if (count > 50000) {
        return "red";
    } else if (count > 10000) {
        return "yellow";
    } else if (count > 1000) {
        return "blue";
    } else {
        return "grey";
    }
}
const map_box_token = 'pk.eyJ1IjoibWl3emVya2luZyIsImEiOiJja2ZibnBtYW4wNDhnMnpuc3J4b3MzejUyIn0.Nm3Tjvjgn0KgX82rdV87Wg';
mapboxgl.accessToken = map_box_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
zoom: 1.5,
center: [0, 20]
});
let i = 0;
function getMapInfo() {
  fetch('https://corona.lmao.ninja/v2/countries').then(function(response){
    response.json().then(function(data) {
        console.log(data);
        console.log(data);
        data.forEach(datas => {
            i++;
            var marker = new mapboxgl.Marker({
                color: getColorFromCount(data[i].cases)
                })
                .setLngLat([data[i].countryInfo.long, data[i].countryInfo.lat])
                .addTo(map);
        }
    )});
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
};

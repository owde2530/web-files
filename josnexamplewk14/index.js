console.log('hi');

fetch('weather.json')
.then((r) => r.json())
.then(function(data) {
  let weather = data;
  console.log(weather);
  let location  = weather.location.name;
  let temp = weather.current.temp_f;
  // console.log(weather.location.name);
  // console.log(weather.current.temp_f);
  document.getElementById('location').innerHTML = location;
  document.getElementById('tempf').innerHTML = temp;
}
)

fetch ('forecast.json')
.then ((resp => resp.json())
.then(function(data){
  let forecast = data;
  console.log(forecast);
  console.log(forecast.forecast.forecastday[0].astro.sunrise);
  console.log(forecast.forecast.forecastday[0].hour[1].time);
}))


// let weather;
// let forecast;
//
// let boots = {
//   'name': 'boots',
//   'age': 7,
//   'weight': '25 lbs',
//   'color': 'brown',
//   'isOld': function(){
//     if(this.age>10){
//       return 'yes';
//     }else{
//       return 'no';
//     }
//   }
// }
//
// console.log(boots.weight);
// console.log(boots.isOld());
// function cat(name, age, weight, color) {
//   this.name = name;
//   this.age = age;
//   this.weight = weight;
//   this.color = color;
// }
//
// let mycat = new cat ('steve', 15, '25 lbs', 'grey');
//
// console.log(mycat.name);
//
// fetch('weather.json')
// .then((resp) => resp.json())
// .then(function(data) {
//   weather = data;
//   console.log(weather);
//   document.getElementById('location').innerHTML = weather.location.name;
//   document.getElementById('temp').innerHTML = weather.current.temp_f;
//   document.getElementById('condition').innerHTML = weather.current.condition.text.toLowerCase();
// })
// .catch(function(error) {
//   console.log(error);
// });
//
//
//
// fetch('forecast.json')
// .then((resp) => resp.json())
// .then(function(data) {
//   forecast = data;
//   console.log(forecast);
//   let ft = forecast.forecast.forecastday[0].hour[0].time;
//   document.getElementById('fTime').innerHTML = ft.slice(ft.length - 5, ft.length);
//   document.getElementById('fCond').innerHTML = forecast.forecast.forecastday[0].hour[0].condition.text.toLowerCase();
// })
// .catch(function(error) {
//   console.log(error);
// });

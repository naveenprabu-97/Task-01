//XML http request
//create an xml instance(object)00
var request=new XMLHttpRequest();
//initiate new connection
// http metods get put post...
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//send request to server
request.send();
// if server responded succesfully, we need to retrive data
request.onload=function() {
    var data=JSON.parse(this.response);
    for(var i in data)
    {
        var res=data[i];
        console.log(res);
    }
}

let btc=document.getElementById("bitcoin");
let ethe=document.getElementById("Ethereum");
let doge=document.getElementById("dogecoin");
let teth=document.getElementById("tether");
let sol=document.getElementById("solana");

var settings={
  "async":true,
  "scrossDomain":true,
  "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Csolana&vs_currencies=inr",
  "method":"GET",
  "headers":{}
}
$.ajax(settings).done(function(response){
  btc.innerHTML=response.bitcoin.inr;
  ethe.innerHTML=response.ethereum.inr;
  doge.innerHTML=response.dogecoin.inr;
  teth.innerHTML=response.tether.inr;
  sol.innerHTML=response.solana.inr;
});
let res = ['大吉', '吉', '中吉', '凶', '大凶']; //結果の配列

document.getElementById('btn').addEventListener('click', function() {
  let resLen = res.length - 1; //結果の配列の要素数 -1 ※先頭の添字は0のため
  let randomNum = Math.random(); //0 〜 1までのランダムな数
  let num = Math.round(randomNum * resLen); //randomNum * resLenの結果を四捨五入

  document.getElementById('result').textContent = res[num];
});


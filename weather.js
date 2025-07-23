
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("軽度: " +data.coord.lon );
  console.log("緯度" + data.coord.lat );
  console.log("天気: " +data.weather[0].description );
  console.log("最低気温: " +data.main.temp_min);
  console.log("最高気温: " +data.main.temp_max);
  console.log("湿度: " +data.main.humidity);
  console.log("風速: " +data.wind.speed);
  console.log("風向: " +data.wind.deg);
  console.log("都市名: " +data.name);
}

function se() {
  let i = document.querySelector('option');
  let name = i.value;
  console.log("都市ID: "+name)
}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let d = document.createElement('div');
  d.setAttribute('id', 'zentai')
  let bo = document.querySelector('body'); 
  bo.insertAdjacentElement('beforeend', d);

  if (document.querySelector('#keido').checked) {
    let p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("軽度: " +data.coord.lon);
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#ido').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("緯度: " + data.coord.lat );
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#tenki').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("天気: " +data.weather[0].description );
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#mtem').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("最低気温: " +data.main.temp_min);
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#Mtem').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("最高気温: " +data.main.temp_max);
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#situdo').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("湿度: " +data.main.humidity);
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#husoku').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("風速: " +data.wind.speed);
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#kazamuki').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("風向: " +data.wind.deg);
    d.insertAdjacentElement('beforeend', p);
  }

  if (document.querySelector('#toshi1').checked) {
    p = document.createElement('div');
    p.setAttribute('class', 'a')
    p.textContent = ("都市名: " +data.name);
    d.insertAdjacentElement('beforeend', p);
  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#btn');
b.addEventListener('click', sendRequest);
b.addEventListener('click', se); 

let bbo = document.querySelector('#select');
bbo.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
let s = document.querySelector('select#toshi');
let idx;
function sendRequest() {
  idx = s.selectedIndex;
  let url;
  if(idx === 1){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json'
  }
  if(idx === 2){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json'
  }
  if(idx === 3){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json'
  }
  if(idx === 4){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json'
  }
  if(idx === 5){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json'
  }
  if(idx === 6){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json'
  }
  if(idx === 7){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json'
  }
  if(idx === 8){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json'
  }
  if(idx === 9){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json'
  }
  if(idx === 10){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json'
  }
  if(idx === 11){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json'
  }
  if(idx === 12){
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json'
  }
  

  axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

  let d = document.querySelector('div#zentai');
  d.remove()
  let im = document.querySelector('img#IMG');
  im.remove();

  printDom(data);

  let i = document.createElement('img');
  i.setAttribute('id', 'IMG');
  let bo = document.querySelector('body');
  bo.insertAdjacentElement('beforeend', i);

  if(idx === 1){
    i.setAttribute('src', 'カイロ.png');}
  if(idx === 2){
    i.setAttribute('src', 'モスクワ.png');}
  if(idx === 3){
    i.setAttribute('src', 'ヨハネスブルグ.png');}
  if(idx === 4){
    i.setAttribute('src', '北京.png');}
  if(idx === 5){
    i.setAttribute('src', '東京.png');}
  if(idx === 6){
    i.setAttribute('src', 'シンガポール.png');}
  if(idx === 7){
    i.setAttribute('src', 'シドニー.png');}
  if(idx === 8){
    i.setAttribute('src', 'ロンドン.png');}
  if(idx === 9){
    i.setAttribute('src', 'パリ.png');}
  if(idx === 10){
    i.setAttribute('src', 'リオデジャネイロ.png');}
  if(idx === 11){
    i.setAttribute('src', 'ニューヨーク.png');}
  if(idx === 12){
    i.setAttribute('src', 'ロサンゼルス.png');}

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること


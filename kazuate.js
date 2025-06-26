// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let b = document.querySelector('button#botan') ;

// 入力回数（予想回数）
let kaisu = 0;
let seikai = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {

  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  
  let yoso = document.querySelector('input[name="kazu"]');
  yoso = Number(yoso.value);
  let k = document.querySelector('span#kaisu');
  let a = document.querySelector('span#answer');
  let r = document.querySelector('p#result');

  kaisu = kaisu + 1;
    console.log(kaisu + "回目の予想: " + yoso)
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

    if(kaisu > 3 || seikai === 1){
      k.textContent = kaisu;
      a.textContent = yoso;
      r.textContent = "答えは" +kotae+ "でした．すでにゲームは終わっています"
    console.log("答えは" +kotae+ "でした．すでにゲームは終わっています")
    }
  else if(kaisu === 3){
    k.textContent = kaisu;
      a.textContent = yoso;
      r.textContent = "間違い．残念でした答えは" +kotae+ "です"
    console.log("間違い．残念でした答えは" +kotae+ "です")
  }
  else if(kotae === yoso){
    k.textContent = kaisu;
      a.textContent = yoso;
      r.textContent = "正解です．おめでとう！"
    console.log("正解です．おめでとう！")
    seikai = 1;
  }
  else if(kotae > yoso) {
    k.textContent = kaisu;
      a.textContent = yoso;
      r.textContent = "間違い．答えはもっと大きいですよ"
    console.log("間違い．答えはもっと大きいですよ")
  }
  else{
    k.textContent = kaisu;
      a.textContent = yoso;
      r.textContent = "間違い．答えはもっと小さいですよ"
    console.log("間違い．答えはもっと小さいですよ")
  }
}

b.addEventListener('click', hantei); 
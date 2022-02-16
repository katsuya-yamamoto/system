'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 生産システム用語リスト
const easyArray1 = ["一括盤","工程盤","設備","生産指示","LANケーブル",
    "T-mac","シリアル転送","○Mシリアル","○Cシリアル","通過実績","品質実績",
    "工具カウンタ","兆候データ","ハンディターミナル","マスターHUB","統合DB",
    "アプリサーバー","生産指示要求","粗材コンベア","分岐コンベア",
    "中間コンベア","出荷コンベア","イーサネットIP","FLネット","イーサネット",
    "アンドン画面","場所コード","アドレスマップ","配線系統図","配線施工図",
    "アンドンインターロック信号表","トレサ画面","標準回路","個体管理",
    "トレサビリティ"];
    
const easyArray2 = ["ikkatubann","kouteibann","setubi","seisannsiji",
    "LANke-buru","T-mac","siriarutennsou","maruMsiriaru","maruCsiriaru",
    "tuukajisseki","hinnsitujisseki","kougukaunnta","tyoukoude-ta",
    "hanndhita-minaru","masuta-HUB","tougouDB","apurisa-ba-",
    "seisannsijiyoukyuu","sozaikonnbea","bunnkikonnbea","tyuukannkonnbea",
    "syukkakonnbea","i-sanettoIP","FLnetto","i-sanetto","anndonngamenn",
    "basyoko-do","adoresumappu","haisennkeitouzu","haisennsekouzu",
    "anndonninnta-rokkusinngouhyou","toresagamenn","hyoujunnkairo",
    "kotaikannri","toresabirithi"];

const normalArray1 = ["T-macは○Mシリアルを発番する装置","設備の後工程を表す場所コードは15",
    "出荷実績を送信する設備は出荷コンベア","設備のトレサビデータを保存している装置は統合DB",
    "各設備と装置を繋ぐためにHUBを設置している","QC台からワークを入れる、抜くときにはハンディを使用する"];

const normalArray2 = ["T-machamaruMsiriaruwohatubannsurusouti","setubinoatokouteiwoarawasuko-doha15",
    "syukkajissekiwosousinnsurusetubihasyukkakonnbea","setubinotoresabide-tawohozonnsiteirusoutihatougouDB",
    "kakusetubitosoutiwotunagutameniHUBwosettisiteiru","QCdaikarawa-kuwoirerunukutokinihahandhiwosiyousuru"];

const hardArray1 = ["上級","上級テスト"];

const hardArray2 = ["joukyuu","joukyuutest"];

// console.log(easyArray1.length);

// 配列をランダムする
let targetIndex1 = Math.floor(Math.random() * easyArray2.length);
let targetIndex2 = Math.floor(Math.random() * normalArray2.length);
let targetIndex3 = Math.floor(Math.random() * hardArray2.length);
let targetStr1 = easyArray2[targetIndex1].length;
let targetStr2 = normalArray2[targetIndex2].length;
let targetStr3 = hardArray2[targetIndex3].length;
let answer = 0;
let str = 0;

// WEBページにアクションを加える
window.addEventListener("keydown",pushKey);
// window.addEventListener("keydown",create);

// タイピングの関数
function pushKey() {
    let value = document.getElementsByTagName("h3")[0].innerHTML;
    console.log(value)
    if (document.getElementsByTagName("h3")[0].innerHTML === "初級") {
        window.addEventListener("keypress",pushKeyEasy);
    } else if (document.getElementsByTagName("h3")[0].innerHTML === "中級") {
        window.addEventListener("keypress",pushKeyNormal);
    } else if (document.getElementsByTagName("h3")[0].innerHTML === "上級") {
        window.addEventListener("keypress",pushKeyHard);
    }    
}

// 初級用の関数
function pushKeyEasy(event) {
    let keyCode = event.key;
    let ele2 = document.getElementsByTagName("h2")[0];
    let element = document.getElementsByTagName("h3")[0];
    ele2.innerText = " ";
    element.innerText = easyArray1[targetIndex1];
    // 配列からランダムで表示させる
    if (targetStr1 === targetStr1 - answer) {
        let element = document.getElementsByTagName("h3")[0];
        element.innerText = easyArray1[targetIndex1];
        document.getElementsByTagName("span")[1].innerHTML = easyArray2[targetIndex1].substring(answer,targetStr1);
    }  
    
    //入力された文字を比較 
    if (easyArray2[targetIndex1].charAt(answer) === keyCode) {
        
        answer++;
        document.getElementsByTagName("span")[0].innerHTML = easyArray2[targetIndex1].substring(str,answer);
        document.getElementsByTagName("span")[1].innerHTML = easyArray2[targetIndex1].substring(answer,targetStr1);
        
        // 最後まで入力されたか確認して新しい文字列を表示
        if (targetStr1 - answer === 0) {
            let element = document.getElementsByTagName("h3")[0];
            targetIndex1 = Math.floor(Math.random() * easyArray1.length);
            answer = 0;
            targetStr1 = easyArray2[targetIndex1].length;
            element.innerText = easyArray1[targetIndex1];
            document.getElementsByTagName("span")[0].innerHTML = "";
            document.getElementsByTagName("span")[1].innerHTML = easyArray2[targetIndex1].substring(answer,targetStr1);
        }    
    }    
}

// 中級用の関数
function pushKeyNormal(event) {
    let keyCode = event.key;
    let ele2 = document.getElementsByTagName("h2")[0];
    let element = document.getElementsByTagName("h3")[0];
    ele2.innerText = " ";
    element.innerText = easyArray1[targetIndex1];    // 配列からランダムで表示させる
    if (targetStr2 === targetStr2 - answer) {
        let element = document.getElementsByTagName("h3")[0];
        element.innerText = normalArray1[targetIndex2];
        document.getElementsByTagName("span")[1].innerHTML = normalArray2[targetIndex2].substring(answer,targetStr2);
    }  
    
    //入力された文字を比較 
    if (normalArray2[targetIndex2].charAt(answer) === keyCode) {
        
        answer++;
        document.getElementsByTagName("span")[0].innerHTML = normalArray2[targetIndex2].substring(str,answer);
        document.getElementsByTagName("span")[1].innerHTML = normalArray2[targetIndex2].substring(answer,targetStr2);
        
        // 最後まで入力されたか確認して新しい文字列を表示
        if (targetStr2 - answer === 0) {
            let element = document.getElementsByTagName("h3")[0];
            targetIndex2 = Math.floor(Math.random() * normalArray1.length);
            answer = 0;
            targetStr2 = normalArray2[targetIndex2].length;
            element.innerText = normalArray1[targetIndex2];
            document.getElementsByTagName("span")[0].innerHTML = "";
            document.getElementsByTagName("span")[1].innerHTML = normalArray2[targetIndex2].substring(answer,targetStr2);
        }    
    }    
}

// 上級用の関数
function pushKeyHard(event) {
    let keyCode = event.key;
    let ele2 = document.getElementsByTagName("h2")[0];
    let element = document.getElementsByTagName("h3")[0];
    ele2.innerText = " ";
    element.innerText = easyArray1[targetIndex1];    // 配列からランダムで表示させる
    if (targetStr3 === targetStr3 - answer) {
        let element = document.getElementsByTagName("h3")[0];
        element.innerText = hardArray1[targetIndex3];
        document.getElementsByTagName("span")[1].innerHTML = hardArray2[targetIndex3].substring(answer,targetStr3);
    }  
    
    //入力された文字を比較 
    if (hardArray2[targetIndex3].charAt(answer) === keyCode) {
        
        answer++;
        document.getElementsByTagName("span")[0].innerHTML = hardArray2[targetIndex3].substring(str,answer);
        document.getElementsByTagName("span")[1].innerHTML = hardArray2[targetIndex3].substring(answer,targetStr3);
        
        // 最後まで入力されたか確認して新しい文字列を表示
        if (targetStr3 - answer === 0) {
            let element = document.getElementsByTagName("h3")[0];
            targetIndex3 = Math.floor(Math.random() * hardArray1.length);
            answer = 0;
            targetStr3 = hardArray2[targetIndex3].length;
            element.innerText = hardArray1[targetIndex3];
            document.getElementsByTagName("span")[0].innerHTML = "";
            document.getElementsByTagName("span")[1].innerHTML = hardArray2[targetIndex3].substring(answer,targetStr3);
        }    
    }
}

// リセットボタンを作成する関数
function create() {
    let element5 = document.getElementsByTagName("h4")[0];
    let element3 = document.createElement("button");
    element3.innerHTML = "終了する";
    // タグの中に文字列が入っていなかったら追加する
    if (element5.innerHTML === "") {
        element5.appendChild(element3);
    }
    
}

// 時間測定する関数
function timeMeasurement() {
    
}


//タイピングリセット 
const ele = document.getElementsByTagName("h4")[0]
ele.addEventListener("click",() => window.location.reload());



setInterval(entryon, 100);
function entryon() {
  var cmd = Entry.variableContainer.getVariableByName("cmd").value_;


  //기본적인 기능들
  if(cmd.substring(0,2)=='경고'){
    alert(cmd.substring(3,cmd.length-1));
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }
  if(cmd.substring(0,2)=='묻기'){
    Entry.variableContainer.getVariableByName("cmd").value_=prompt(cmd.substring(3,cmd.length-1));
  }
  if(cmd.substring(0,2)=='체크'){
    var check =comfirm(cmd.substring(3,cmd.length-1));
    if(check){
      Entry.variableContainer.getVariableByName("cmd").value_='확인';
    }else{
      Entry.variableContainer.getVariableByName("cmd").value_='취소';
    }
  }


  //링크이동
  if(cmd.substring(0,2)=='링크'){
    if(comfirm(cmd.substring(3,cmd.length-1)+'으로 이동하시겠습니까?')){
      window.open(cmd.substring(3,cmd.length-1),'_blank');
    }
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }
  if(cmd.substring(0,2)=='유저'){
    window.open('https://playentry.org/'+cmd.substring(3,cmd.length-1),'_blank');
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }


  //검색
  if(cmd.substring(0,2)=='구글'){
    window.open('https://www.google.com/search?q='+cmd.substring(3,cmd.length-1),'_blank');
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }
  if(cmd.substring(0,3)=='네이버'){
    window.open('https://search.naver.com/search.naver?query='+cmd.substring(4,cmd.length-1),'_blank');
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }


  //콘솔
  if(cmd.substring(0,2)=='출력'){
    console.log(cmd.substring(3,cmd.length-1));
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }
  if(cmd.substring(0,2)=='에러'){
    console.error(cmd.substring(3,cmd.length-1));
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }


  //파일다운로드
  if(cmd.substring(0,2)=='다운로드'){
    var data = cmd.substring(3,cmd.length-1).split(',')
    var name = data[0];
    var content = data[1];
    savefile(name, content)
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨';
  }


  //기타
  if(cmd.substring(0,2)=='계산'){
    Entry.variableContainer.getVariableByName("cmd").value_=eval(cmd.substring(3,cmd.length-1));
  }
  if(cmd=='대형화면'){
    Entry.engine.toggleFullScreen();
    Entry.variableContainer.getVariableByName("cmd").value_='설치됨'
  }


}



function savefile(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });

    objURL = window.URL.createObjectURL(blob);

    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;

    var a = document.createElement('a');

    a.download = fileName;
    a.href = objURL;
    a.click();
}

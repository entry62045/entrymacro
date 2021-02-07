var macro1 = prompt('첫 번째 작품 ID를 입력해주세요.');
var macro2 = prompt('두 번째 작품 ID를 입력해주세요.');
var macro3 = prompt('세 번째 작품 ID를 입력해주세요.');
var macrotime = prompt('매크로 돌릴 시간을 입력해주세요.');
var time = macrotime * 1000;

function entrymacrostart(){
    fetch('https://playentry.org/api/project/' + macro1, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro2, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro3, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
console.log('매크로를 시작합니다.');
console.log('62045의 매크로를 사용해주셔서 감사합니다.');
setInterval(entrymacrostart, time);
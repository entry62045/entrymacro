var macro1 = prompt('첫 번째 작품 ID를 입력해주세요.');
var macro2 = prompt('두 번째 작품 ID를 입력해주세요.');
var macro3 = prompt('세 번째 작품 ID를 입력해주세요.');
var macro4 = prompt('네 번째 작품 ID를 입력해주세요.');
var macro5 = prompt('다섯 번째 작품 ID를 입력해주세요.');
var macro6 = prompt('여섯 번째 작품 ID를 입력해주세요.');
var macro7 = prompt('일곱 번째 작품 ID를 입력해주세요.');
var macro8 = prompt('여덟 번째 작품 ID를 입력해주세요.');
var macro9 = prompt('아홉 번째 작품 ID를 입력해주세요.');
var macro10 = prompt('열 번째 작품 ID를 입력해주세요.');
var macro11 = prompt('열한 번째 작품 ID를 입력해주세요.');
var macro12 = prompt('열두 번째 작품 ID를 입력해주세요.');
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
    fetch('https://playentry.org/api/project/' + macro4, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro5, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro6, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro7, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro8, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro9, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro10, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro11, {
        method: 'PUT',
        data: 'isopen: true',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    fetch('https://playentry.org/api/project/' + macro12, {
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
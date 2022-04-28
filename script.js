let xoso = function (soO, soTrungThuong) {
  this.soO = soO;
  this.soTrungThuong = soTrungThuong;
  this.tachSo = ("" + this.soTrungThuong).split("");

  this.khoiTaoO = function (so) {
    const el = document.querySelector(".xoso");
    let html = "";
    for (let i = 0; i < so; i++) {
      html += `<div id="div${i}" class="fcon" style="padding: 10px;">2</div>`;
    }
    el.insertAdjacentHTML("afterbegin", html);
  };

  /////////////////////   Khởi tạo ô;

  this.khoiTaoO(this.soO);
  ///////////////////////////

  this.randomColor = function (el) {
    return (el.style.background = `rgb(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255})`);
  };
  /////////////////

  this.rederO = function (tachSo) {
    let els = document.querySelectorAll(".fcon");
    var a;
    let tg;

    // document.querySelector(".b1").addEventListener("click", function (e) {
    //   tg = e.target;
    //   console.log(tg);
    // });

    if(document.querySelector(".b1").clicked == true) {console.log('a');
    return
  }

    els.forEach((el, index) => {
      for (let i = 0; i <= 9; i++) {
        // setTimeout(()=>{console.log(i);
        a = setTimeout(() => {
          el.innerHTML = i;
          el.style.background = `rgb(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255})`;

          // console.log(`dddd${i}`);
        }, 1500 * i);

        if (i == Number(tachSo[index])) {
          break;
          clearTimeout(a);
        }
      }
    });
    console.log(a);
  };

  this.rederO(this.tachSo);
};
/////////
const xoSo1 = new xoso(10, 9898421362);
console.log(xoSo1);

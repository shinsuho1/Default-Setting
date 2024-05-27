
const header = document.querySelector("header");
const menuicon = document.querySelector(".menuicon");
const pop_menu = document.querySelector(".pop_menu");

$(".menuicon").on("click",function(){
    $(this).toggleClass("active");
});

let lastScroll = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScroll) {
        header.classList.remove("active");
    } else {
        header.classList.add("active");
    }
    lastScroll = scrollTop;
})


var main_slide = new Swiper(".main_slide", {
    loop: true,
    autoplay: {
        delay: 8000,
    },
    speed: 1000,
});



$("#gnb.mo>li>a").on("click",function(e){
    e.preventDefault();
    $(this).siblings(".sub-menu").stop().slideToggle();
});





function contactCheck(el) {
    if (!el.value.trim().length > 0 || el.value.trim().length == 0) {
        el.focus();
        return false;
    }
    return true;
}

const form = document.querySelector(".support_form");
if (form) {
    let input_company = document.querySelector("input[name=company]"),
        input_fication = document.querySelector("input[name=fication]"),
        input_name = document.querySelector("input[name=name]"),
        input_phone = document.querySelector("input[name=phone]"),
        input_email = document.querySelector("input[name=email]"),
        textarea = document.querySelector("textarea"),
        input_checkbox = document.querySelector("input[name=checkbox]"),
        button_submit = document.querySelector("button.submit"),
        num = /[0-9]/,
        email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    form.querySelectorAll("label input").forEach((el, index) => {
        el.addEventListener("focus", () => {
            el.parentElement.classList.add("active");
        });
        el.addEventListener("blur", () => {
            if (el.value) return false;
            el.parentElement.classList.remove("active");
        });
    });

    input_checkbox.parentElement.addEventListener("click", () => {
        if (input_checkbox.checked) {
            input_checkbox.parentElement.classList.add("active");
            return false;
        }
        input_checkbox.parentElement.classList.remove("active");
    });

    textarea.addEventListener("focus", () => {
        textarea.parentElement.classList.add("active");
    });
    textarea.addEventListener("blur", () => {
        if (textarea.value) return false;
        textarea.parentElement.classList.remove("active");
    });

    button_submit.addEventListener("click", () => {

        if (!contactCheck(input_name)) {
            alert("성명을 입력해주세요.");
            return false;
        }
        if (!num.test(input_phone.value)) {
            alert("연락처를 확인해주세요.");
            return false;
        }
        if (!email.test(input_email.value)) {
            alert("이메일을 확인해주세요.");
            return false;
        }
        if (!contactCheck(textarea)) {
            alert("문의내용을 입력해주세요.");
            return false;
        }
        if (!input_checkbox.checked) {
            alert("개인정보의 수집 및 이용에 동의해주세요.");
            return false;
        }

        button_submit.disabled = false;
        form.submit();

    });

}

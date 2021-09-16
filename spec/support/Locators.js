const locators ={
    team: "gs-u-display-none gs-u-display-block@m qa-full-team-name sp-c-fixture__team-name-trunc",
    search: "//*[@id='orb-search-q']",
    headings: "ssrcss-bxvqns-PromoLink e1f5wbog0",
    signin:"//*[@id='header-content']/div[2]/nav/div[1]/div/div[1]/ul[2]/li[1]/a",
    username: "user-identifier-input",
    password: "password-input",
    submit: "submit-button",
    errormessage:"form-message__text",
    signinagain: "//*[@id='container']/div/div[2]/div[2]/div[2]/div/p[2]/span/a",
    close: "page__close-icon",
}

//Invalid passwords
const userobj1 ={
    email:"test@gmail.com" ,
    password:["tes","12345678","abcdefgh","@!!!!!!"]
}
//Invalid usernames
const userobj2 ={
    email:["t","123455","@"],
    password:"betaway124"
}
exports.locatorsfile={locators,userobj1,userobj2}
